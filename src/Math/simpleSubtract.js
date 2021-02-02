import { _curry } from '../internal';

/**
 * @description 简单减法，首个参数减去第二个参数
 * @sig Number -> Number -> Number
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const simpleSubtract = (a, b) => {
  return Number(a) - Number(b);
};

const currySimpleSubtract = _curry(simpleSubtract);

export default currySimpleSubtract;
