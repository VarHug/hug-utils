import { isString } from '../../Type';
import { curry } from '../../Function';

/**
 * @description 返回列表或字符串的第 n 个元素。如果 n 为负数，则返回索引为 length + n 的元素。
 * @sig Number -> [a] -> a | undefined
 * @sig Number -> String -> String
 * @param {Number} offset
 * @param {Array | String} list
 * @returns {*}
 */
const nth = (offset, list) => {
  const idx = offset < 0 ? list.length + offset : offset;
  return isString(list) ? list.charAt(idx) : list[idx];
};

const curryNth = curry(nth);

export default curryNth;
