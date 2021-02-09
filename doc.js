const fs = require('fs');
const path = require('path');

const curry = (fn) => {
  const arity = fn.length;

  return function $curry(...args) {
    if (args.length < arity) {
      return $curry.bind(null, ...args);
    }

    return fn(...args);
  };
};

const pipe = (...fns) => {
  return (...args) => {
    return fns.reduce((res, fn) => {
      return [fn(...res)];
    }, args);
  };
};

/**
 * @description 清除文案中的空格
 * @param {String} content
 * @returns {String}
 */
const clearSpace = (content) => {
  return content.replace(/\s*/g, '');
};

/**
 * @description 生成 markdown 无顺列表
 * @param {String} content
 * @returns {String}
 */
const createMarkdownUl = (content) => {
  return `* ${content}`;
};

/**
 * @description 生成 markdown 超链接
 * @param {String} content
 * @param {String} link
 * @returns {String}
 */
const createMarkdownLink = (content, link) => {
  return `[${content}](${link})`;
};

/**
 * @description 生成 markdown 加粗内容
 * @param {String} content
 * @returns {String}
 */
const createMarkdownBold = (content) => {
  return `**${content}**`;
};

/**
 * 行首插入内容
 * @param {String} prefix
 * @param {String} content
 * @returns {String}
 */
const insertInHead = curry((prefix, content) => {
  return `${prefix}${content}`;
});

/**
 * 行尾插入内容
 * @param {String} suffix
 * @param {String} content
 * @returns {String}
 */
const insertInTail = curry((suffix, content) => {
  return `${content}${suffix}`;
});

/**
 * @description 行尾插入换行符
 * @param {String} content
 * @returns {String}
 */
const insertBrInTail = insertInTail('\n');

/**
 * @description 行尾插入冒号
 * @param {String} content
 * @returns {String}
 */
const insertColonInTail = insertInTail(':');

/**
 * @description 行尾插入空格
 * @param {String} content
 * @returns {String}
 */
const insertSpaceInTail = insertInTail(' ');

/**
 * @description 行首插入 tab
 * @param {String} content
 * @returns {String}
 */
const insertTabInHead = insertInHead('  ');

/**
 * @description 获取指定路径下的文件夹
 * @param {String} path
 * @returns {Array<Dirent>}
 */
function getDirs(path) {
  return fs
    .readdirSync(path, {
      withFileTypes: true
    })
    .filter((dirent) => {
      return dirent.isDirectory();
    });
}

// 生成根目录的 markdown
const createRootMd = pipe(insertColonInTail, insertBrInTail);

// 生成 type 单个目录的 markdown
const createTypeMd = pipe(
  createMarkdownUl,
  insertTabInHead,
  insertColonInTail,
  insertBrInTail
);

// 生成粗处理 fn 单个方法的 markdown （生成链接格式，加粗，加冒号）
const createRudeFnMd = pipe(
  createMarkdownLink,
  createMarkdownBold,
  insertColonInTail,
  insertSpaceInTail
);

// 生成细处理 fn 单个方法的 markdown
const createFnMd = pipe(
  insertInTail,
  createMarkdownUl,
  insertTabInHead,
  insertTabInHead,
  insertBrInTail
);

const rootPath = 'src';
const baseMasterPath = 'https://github.com/VarHug/hug-utils/blob/master';
const baseMasterPathWithRoot = `${baseMasterPath}/${rootPath}`;

// 类型目录列表
const types = getDirs(rootPath);

// 类型目录 markdown 内容
const typesCatalogue = types.reduce((typeAcc, typeDirent) => {
  const typeDirName = typeDirent.name;
  const fnsPath = path.resolve(rootPath, typeDirName);

  // 二级（函数、常量）目录列表
  const fns = getDirs(fnsPath);

  // 迭代，依次生成单个文件的 md ，并拼接
  const typeCatalogue = fns.reduce((fnAcc, fnDirent) => {
    const fnDirName = fnDirent.name;
    const fnPath = `${baseMasterPathWithRoot}/${typeDirName}/${fnDirName}/index.js`;

    const fnCodePath = path.resolve(
      rootPath,
      typeDirName,
      fnDirName,
      './index.js'
    );
    // 读取文件 desc
    const fnCode = fs.readFileSync(fnCodePath).toString();
    const fnCodeWithoutSpace = clearSpace(fnCode);
    const descriptionRe = /\/\*\*\*@description(\S*?)\*@/;
    const descriptionMatch = fnCodeWithoutSpace.match(descriptionRe);
    const description = descriptionMatch && descriptionMatch[1];
    const rudeFnMd = createRudeFnMd(fnDirName, fnPath);
    return fnAcc + createFnMd(description, rudeFnMd);
  }, createTypeMd(typeDirName));

  return typeAcc + typeCatalogue;
}, createRootMd(rootPath));

// 读取模板 markdown 文件
const templateMd = fs.readFileSync('template.md').toString();

// 拉取目录并自动化生成的 markdown 内容
const catalogueMd = typesCatalogue;

// 拼接生成的 markdown 内容
const readMeMd = templateMd.replace('{{catalogue}}', catalogueMd);

// 写入md
fs.writeFileSync('doc.md', readMeMd);

console.log('写入完毕');
