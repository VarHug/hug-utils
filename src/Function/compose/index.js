/**
 * @description 从右往左执行函数组合，最后一个函数可以是任意元函数（参数个数不限），其余函数必须是一元函数。
 * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
 * @param  {...Function} fns
 * @returns {Function}
 */
const compose = (...fns) => {
  return (...args) => {
    return fns.reduceRight((res, fn) => {
      return fn(...res);
    }, args);
  };
};

export default compose;
