import { curry } from '../../Function';

/**
 * @doc 将数组中指定索引处的值替换为经函数变换的值
 * @description 将数组中指定索引处的值替换为经函数变换的值。
 * @sig Number -> (a -> a) -> [a] -> [a] (curry)
 * @param {Number} idx
 * @param {Function} fn
 * @param {Array} list
 * @returns {Array}
 * @example
 *      adjust(1, toUpper, ['a', 'b', 'c', 'd']);      //=> ['a', 'B', 'c', 'd']
 *      adjust(-1, toUpper, ['a', 'b', 'c', 'd']);     //=> ['a', 'b', 'c', 'D']
 */
const adjust = (idx, fn, list) => {
  if (idx < -list.length || idx >= list.length) {
    return list;
  }
  const start = idx < 0 ? list.length : 0;
  const _idx = start + idx;
  const _list = list.slice();
  _list[_idx] = fn(_list[_idx]);
  return _list;
};

const curryAdjust = curry(adjust);

export default curryAdjust;
