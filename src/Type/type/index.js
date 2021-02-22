import { TypeEnum } from '../../Enum';

/**
 * @doc 用一个单词来描述输入值的（原生）类型，返回诸如 'Object'、'Number'、'Array'、'Null' 之类的结果
 * @description 用一个单词来描述输入值的（原生）类型，返回诸如 'Object'、'Number'、'Array'、'Null' 之类的结果。不区分用户自定义的类型，统一返回 'Object'。
 * @sig (* -> {*}) -> String
 * @param {*} val
 * @returns {String}
 */
const type = (val) => {
  if (val === undefined) {
    return TypeEnum.UNDEFINED;
  } else if (val === null) {
    return TypeEnum.NULL;
  }
  return Object.prototype.toString.call(val).slice(8, -1);
};

export default type;
