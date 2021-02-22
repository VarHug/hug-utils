/**
 * @doc 检测输入值是否为整数
 * @description 检测输入值是否为整数
 * @sig * -> Boolean
 * @param {*} n
 * @returns {Boolean}
 */
const isInteger =
  Number.isInteger ||
  ((n) => {
    return n << 0 === n;
  });

export default isInteger;
