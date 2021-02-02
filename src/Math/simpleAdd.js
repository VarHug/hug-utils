import { _curry } from '../internal';

/**
 * @description 简单两数相加的加法
 * @sig Number -> Number -> Number
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const simpleAdd = (a, b) => {
  return Number(a) + Number(b);
};

const currySimpleAdd = _curry(simpleAdd);

export default currySimpleAdd;
