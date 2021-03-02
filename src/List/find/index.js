import { curry } from '../../Function';

/**
 * @doc 查找并返回 list 中首个满足 predicate 的元素；如果未找到满足条件的元素，则返回 undefined
 * @description 查找并返回 list 中首个满足 predicate 的元素；如果未找到满足条件的元素，则返回 undefined 。
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn
 * @param {Array} list
 * @returns {*}
 */
const find = (fn, list) => {
  return list.find(fn);
};

const curryFind = curry(find);

export default curryFind;
