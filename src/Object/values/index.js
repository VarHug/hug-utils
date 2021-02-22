import keys from '../keys';

/**
 * @doc 返回对象所有自身可枚举的属性的值
 * @description 返回对象所有自身可枚举的属性的值
 * @sig {k: v} -> [v]
 * @param {Object} obj
 * @returns {Array}
 */
const values = (obj) => {
  return keys(obj).map((key) => {
    return obj[key];
  });
};

export default values;
