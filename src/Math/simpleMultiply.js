import { _curry } from '../internal';

/**
 * @description 简单乘法，两数相乘
 * @sig Number -> Number -> Number
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const simpleMultiply = (a, b) => {
  return Number(a) * Number(b);
};

const currySimpleMultiply = _curry(simpleMultiply);

export default currySimpleMultiply;
