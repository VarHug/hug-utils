import { curry } from '../../Function';
import { nth } from '../../List';
import { isInteger } from '../../Type';

/**
 * @doc 取出对象中指定属性的值
 * @description 取出对象中指定属性的值。如果不存在，则返回 undefined。
 * @typedefn Idx = String | Int | Symbol
 * @sig Idx -> {s: a} -> a | undefined
 * @param {String | Number} p
 * @param {Object} obj
 * @returns {*}
 */
const prop = (p, obj) => {
  if (obj == null) {
    return;
  }
  return isInteger(p) ? nth(p, obj) : obj[p];
};

const curryProp = curry(prop);

export default curryProp;
