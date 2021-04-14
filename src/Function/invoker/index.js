import { isFunction } from '../../Type';

/**
 * @doc 将具有指定元数（参数个数）的具名方法，转换为可以被给定参数和目标对象直接调用的函数
 * @description 将具有指定元数（参数个数）的具名方法，转换为可以被给定参数和目标对象直接调用的函数。
 * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
 * @param {Number} arity 参数数量
 * @param {String} method 方法名
 * @returns {Function}
 */
const invoker = function (arity, method) {
  return function () {
    const target = arguments[arity];
    if (target != null && isFunction(target[method])) {
      return target[method].apply(
        target,
        Array.prototype.slice.call(arguments, 0, arity)
      );
    }
    throw new TypeError(
      toString(target) + ' does not have a method named "' + method + '"'
    );
  };
};

export default invoker;
