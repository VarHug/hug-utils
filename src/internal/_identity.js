/**
 * @description 将输入值原样返回。适合用作默认或占位函数。
 * @sig a -> a
 * @param {*} x 输入值
 * @returns {*} x
 */
const _identity = (x) => {
  return x;
};

export default _identity;
