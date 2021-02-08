import { TypeEnum } from '../../Enum';
import { type } from '../../Type';

/**
 * @description 返回给定对象所有可枚举的、自身属性的属性名组成的列表。注意，不同 JS 运行环境输出数组的顺序可能不一致。
 * @sig {k: v} -> [k]
 * @param {Object} obj
 * @returns {Array}
 */
const keys = (obj) => {
  const _type = type(obj);
  if (_type === TypeEnum.OBJECT || _type === TypeEnum.ARRAY) {
    return Object.keys(obj);
  }
  return [];
};

export default keys;
