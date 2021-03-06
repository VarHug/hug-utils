/**
 * @doc 柯里化
 * @description 对函数进行柯里化
 * @sig (* -> a) -> (* -> a)
 * @param {Function} fn 需要柯里化的函数
 * @returns {Function} 柯里化的函数
 */
const curry = (fn) => {
  const arity = fn.length;

  return function $curry(...args) {
    if (args.length < arity) {
      return $curry.bind(null, ...args);
    }

    return fn(...args);
  };
};

export default curry;
