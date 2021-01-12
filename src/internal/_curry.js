const _curry = (fn) => {
  const arity = fn.length;

  return function $curry (...args) {
    if (args.length < arity) {
      return $curry.bind(null, ...args);
    }

    return fn(...args);
  };
};

export default _curry;
