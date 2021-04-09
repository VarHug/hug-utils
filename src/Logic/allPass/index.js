/**
 * @doc 传入包含多个 predicate 的列表，返回一个 predicate：如果给定的参数满足列表中的所有 predicate ，则返回 true
 * @description 传入包含多个 predicate 的列表，返回一个 predicate：如果给定的参数满足列表中的所有 predicate ，则返回 true。
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates
 * @returns {Function}
 */
const allPass = (predicates) => {
  return (...args) => {
    for (let i = 0; i < predicates.length; i++) {
      if (!predicates[i].apply(this, args)) {
        return false;
      }
    }
    return true;
  };
};

export default allPass;
