/**
 * @doc 合并两个对象的自身属性
 * @description 合并两个对象的自身属性（不包括 prototype 属性）。如果某个 key 在两个对象中都存在，使用后一个对象对应的属性值。
 * @sig {k: v} -> {k: v} -> {k: v}
 * @param {Object} l
 * @param {Object} r
 * @returns {Object}
 */
const merge = (l, r) => {
  return Object.assign({}, l, r);
};

export default merge;
