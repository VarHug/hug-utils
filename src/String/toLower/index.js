/**
 * @doc 将字符串转换为小写
 * @description 将字符串转换为小写。
 * @sig String -> String
 * @param {String} str
 * @returns {String}
 */
const toLower = (str) => {
  return typeof str === 'string' ? str.toLowerCase() : '';
};

export default toLower;
