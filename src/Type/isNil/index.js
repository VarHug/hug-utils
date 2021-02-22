/**
 * @doc 检测输入值是否为 null 或 undefined
 * @description 检测输入值是否为 null 或 undefined
 * @sig * -> Boolean
 * @param {*} x
 * @returns {Boolean}
 */
const isNil = (x) => {
  return x == null;
};

export default isNil;
