import { curry } from '../../Function';

/**
 * @description 简单加法，两数相加
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
const simpleAdd = (a, b) => {
  return Number(a) + Number(b);
};

const currySimpleAdd = curry(simpleAdd);

export default currySimpleAdd;
