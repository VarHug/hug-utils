import keys from '../keys';

/**
 * @doc 返回对象自身可枚举属性的键值对数组
 * @description 返回对象自身可枚举属性的键值对数组
 * @sig {k: v} -> [[k, v]]
 * @param {Object} obj
 * @returns {Array}
 */
const entries = (obj) => {
  return keys(obj).map((key) => {
    return [key, obj[key]];
  });
};

export default entries;
