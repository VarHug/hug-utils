import { curry } from '../../Function';
import { keys } from '../../Object';
import { isArray, isObject } from '../../Type';
import reduce from '../reduce';

/**
 * @doc 接收一个函数和一个 functor, 将该函数应用到 functor 的每个值上，返回一个具有相同形态的 functor
 * @description 接收一个函数和一个 functor, 将该函数应用到 functor 的每个值上，返回一个具有相同形态的 functor。
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn
 * @param {Array|Object} functor
 * @returns {Array|Object}
 */
const map = (fn, functor) => {
  if (isArray(functor)) {
    return functor.map(fn);
  }
  if (isObject(functor)) {
    return reduce(
      (acc, key) => {
        acc[key] = fn(functor[key]);
        return acc;
      },
      {},
      keys(functor)
    );
  }
  return {};
};

const curryMap = curry(map);

export default curryMap;
