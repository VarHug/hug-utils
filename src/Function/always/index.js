/**
 * @doc 返回一个返回恒定值的函数
 * @description 返回一个返回恒定值的函数。注意，对于非原始值，返回的值是对原始值的引用。
 * @sig a -> (* -> a)
 * @param {*} val
 * @returns {Function}
 */
const always = (val) => {
  return () => {
    return val;
  };
};

export default always;
