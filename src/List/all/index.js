import { curry } from '../../Function';

/**
 * @description 如果列表中的所有元素都满足 predicate，则返回 true；否则，返回 false。
 * @sig (a -> Boolean) -> [a] -> Boolean (curry)
 * @param {Function} fn
 * @param {Array} list
 * @returns {Boolean}
 */
const all = (fn, list) => {
  return list.every((elem) => {
    return fn(elem);
  });
};

const curryAll = curry(all);

export default curryAll;
