import { curry } from '../../Function';

/**
 * @doc 简单乘法(原生乘法)
 * @description 简单乘法，两数相乘
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
const simpleMultiply = (a, b) => {
  return Number(a) * Number(b);
};

const currySimpleMultiply = curry(simpleMultiply);

export default currySimpleMultiply;
