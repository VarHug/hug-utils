import { curry } from '../../Function';

/**
 * @doc ap 将函数列表作用于值列表上
 * @description ap 将函数列表作用于值列表上。
 * @sig [a -> b] -> [a] -> [b]
 * @param {Array} functions
 * @param {Array} list
 */
const ap = (functions, list) => {
  return functions.reduce((acc, fn) => {
    return acc.concat(
      list.map((item) => {
        return fn(item);
      })
    );
  }, []);
};

const curryAp = curry(ap);

export default curryAp;
