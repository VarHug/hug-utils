import { TypeEnum } from '../../Enum';
import type from '../type';

/**
 * @doc 检测输入值是否为对象
 * @description 检测输入值是否为对象
 * @sig * -> Boolean
 * @param {*} x
 * @returns {Boolean}
 */
const isObject = (x) => {
  return type(x) === TypeEnum.OBJECT;
};

export default isObject;
