import { curry } from '../../Function';

/**
 * @doc 左折叠操作
 * @description 遍历列表，相继调用二元迭代函数（参数为累积值和从数组中取出的当前元素），将本次迭代结果作为下次迭代的累积值。返回最终累积值。
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn
 * @param {*} acc
 * @param {Array} list
 * @returns {*}
 */
const reduce = (fn, acc, list) => {
  return list.reduce(fn, acc);
};

const curryReduce = curry(reduce);

export default curryReduce;
