import { TypeEnum } from '../../Enum';
import type from '../type';

/**
 * @description 检测输入值是否为数组
 * @sig * -> Boolean
 * @param {*} x
 * @returns {Boolean}
 */
const isArray = (x) => {
  return type(x) === TypeEnum.ARRAY;
};

export default isArray;
