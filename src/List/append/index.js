import { curry } from '../../Function';
import concat from '../concat';

/**
 * @doc 在列表末尾拼接一个元素
 * @description 在列表末尾拼接一个元素。
 * @sig a -> [a] -> [a]
 * @param {*} el
 * @param {Array} list
 */
const append = (el, list) => {
  return concat(list, [el]);
};

const curryAppend = curry(append);

export default curryAppend;
