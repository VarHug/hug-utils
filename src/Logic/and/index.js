import { curry } from '../../Function';

/**
 * @description 如果两个参数都是 true，则返回 true；否则返回 false。
 * @sig a -> b -> a | b
 * @param {any} a
 * @param {any} b
 * @returns {any}
 */
const and = (a, b) => {
  return a && b;
};

const curryAnd = curry(and);

export default curryAnd;
