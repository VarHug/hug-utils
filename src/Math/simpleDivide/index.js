import { curry } from '../../Function';

/**
 * @doc 简单除法（原生除法）
 * @description 简单除法，第一个数除以第二个数
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
const simpleDivide = (a, b) => {
  return Number(a) / Number(b);
};

const currySimpleDivide = curry(simpleDivide);

export default currySimpleDivide;
