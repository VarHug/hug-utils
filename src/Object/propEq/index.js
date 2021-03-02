import { curry } from '../../Function';

/**
 * @doc 如果指定对象属性与给定的值相等，则返回 true ；否则返回 false
 * @description 如果指定对象属性与给定的值相等，则返回 true ；否则返回 false 。
 * @sig String -> a -> Object -> Boolean
 * @param {String} key
 * @param {*} value
 * @param {*} obj
 * @returns {Boolean}
 */
const propEq = (key, value, obj) => {
  return obj[key] === value;
};

const curryPropEq = curry(propEq);

export default curryPropEq;
