import { curry } from '../../Function';

/**
 * @description 如果首个参数大于第二个参数，返回 true；否则返回 false。
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 */
const gt = (a, b) => {
  return a > b;
};

const curryGt = curry(gt);

export default curryGt;
