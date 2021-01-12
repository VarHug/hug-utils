const _compose = (...fns) => {
  return (...args) => {
    return fns.reduceRight((res, fn) => {
      return [fn(...res)];
    }, args)[0];
  };
};

export default _compose;
