import { curry } from '../../Function';
import { isArray, isString } from '../../Type';

/**
 * @doc 连接列表或字符串
 * @description 连接列表或字符串，要求两个参数类型相同。 如果将 Array 与非 Array 连接，将抛出错误。
 * @sig [a] -> [a] -> [a]
 * @sig String -> String -> String
 * @param {Array|String} a
 * @param {Array|String} b
 */
const concat = (a, b) => {
  if (isArray(a)) {
    if (isArray(b)) {
      return a.concat(b);
    }
    throw new TypeError(toString(b) + ' is not an array');
  }
  if (isString(a)) {
    if (isString(b)) {
      return a + b;
    }
    throw new TypeError(toString(b) + ' is not a string');
  }
  throw new TypeError(toString(a) + ' is not an array or a string');
};

const curryConcat = curry(concat);

export default curryConcat;
