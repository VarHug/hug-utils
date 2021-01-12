export const curry = (fn) => {
  const arity = fn.length;

  return function $curry (...args) {
    if (args.length < arity) {
      return $curry.bind(null, ...args);
    }

    return fn(...args);
  };
};

export const compose = (...fns) => {
  return (...args) => {
    return fns.reduceRight((res, fn) => {
      return [fn(...res)];
    }, args)[0];
  };
};

/**
 * 将输入值原样返回。适合用作默认或占位函数。
 *
 * @function
 * @sig a -> a
 */
export const identity = (x) => {
  return x;
};
