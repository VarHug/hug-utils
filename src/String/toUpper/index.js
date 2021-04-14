/**
 * @doc 将字符串转换为大写
 * @description 将字符串转换为大写。
 * @sig String -> String
 * @param {String} str
 * @returns {String}
 */
const toUpper = (str) => {
  return typeof str === 'string' ? str.toUpperCase() : '';
};

export default toUpper;
