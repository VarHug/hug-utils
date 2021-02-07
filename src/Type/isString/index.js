import { TypeEnum } from '../../Enum';
import type from '../type';

/**
 * @description 检测输入值是否为字符串
 * @sig * -> Boolean
 * @param {*} x
 * @returns {Boolean}
 */
const isString = (x) => {
  return type(x) === TypeEnum.STRING;
};

export default isString;
