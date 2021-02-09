const fs = require('fs');

const pipe = (...fns) => {
  return (...args) => {
    return fns.reduce((res, fn) => {
      return [fn(...res)];
    }, args);
  };
};

/**
 * @description 生成 markdown 无顺列表
 * @param {String} content
 * @returns {String}
 */
function createMarkdownUl(content) {
  return `* ${content}`;
}

/**
 * @description 行尾插入换行符
 * @param {String} content
 * @returns {String}
 */
function insertBrInTail(content) {
  return `${content}\n`;
}

/**
 * @description 行首插入 tab （两个空格）
 * @param {String} content
 * @returns {String}
 */
function insertTabInHead(content) {
  return `  ${content}`;
}

/**
 * @description 行尾插入冒号
 * @param {String} content
 * @returns {String}
 */
function insertColonInTail(content) {
  return `${content}:`;
}

// 生成根目录的 markdown
const createRootMd = pipe(insertColonInTail, insertBrInTail);

// 生成 type 单个目录的 markdown
// 其实就是聚合 createMarkdownUl 、 insertTabInHead 、 insertColonInTail 、 insertBrInTail
const createTypeMd = pipe(
  createMarkdownUl,
  insertTabInHead,
  insertColonInTail,
  insertBrInTail
);

const rootDir = 'src';

// 类型目录列表
const types = fs
  .readdirSync(rootDir, {
    withFileTypes: true
  })
  .filter((dirent) => {
    return dirent.isDirectory();
  });

console.table(types);

// 类型目录 markdown 内容
const typesCatalogue = types.reduce((acc, dirent) => {
  return acc + createTypeMd(dirent.name);
}, createRootMd(rootDir));

// 读取模板 markdown 文件
const templateMd = fs.readFileSync('template.md').toString();

// 拉取目录并自动化生成的 markdown 内容
const catalogueMd = typesCatalogue;

// 拼接生成的 markdown 内容
const readMeMd = templateMd.replace('{{catalogue}}', catalogueMd);

// 写入md
fs.writeFileSync('doc.md', readMeMd);

console.log('写入完毕');
