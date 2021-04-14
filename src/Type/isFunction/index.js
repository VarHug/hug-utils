import { TypeEnum } from '../../Enum';
import type from '../type';

/**
 * @doc 检测输入值是否为函数
 * @description 检测输入值是否为对象
 * @sig * -> Boolean
 * @param {*} x
 * @returns {Boolean}
 */
const isFunction = (x) => {
  return type(x) === TypeEnum.FUNCTION;
};

export default isFunction;
