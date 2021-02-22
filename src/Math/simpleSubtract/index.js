import { curry } from '../../Function';

/**
 * @doc 简单减法(原生减法)
 * @description 简单减法，首个参数减去第二个参数
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
const simpleSubtract = (a, b) => {
  return Number(a) - Number(b);
};

const currySimpleSubtract = curry(simpleSubtract);

export default currySimpleSubtract;
