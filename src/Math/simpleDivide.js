import { _curry } from '../internal';

/**
 * @description 简单除法，第一个数除以第二个数
 * @sig Number -> Number -> Number
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const simpleDivide = (a, b) => {
  return Number(a) / Number(b);
};

const currySimpleDivide = _curry(simpleDivide);

export default currySimpleDivide;
