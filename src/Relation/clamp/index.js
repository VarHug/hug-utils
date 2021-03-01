import { curry } from '../../Function';

/**
 * @doc 将数字限制在指定的范围内
 * @description 将数字限制在指定的范围内。clamp 也可用于其他有序类型，如字符串和日期。
 * @sig Ord a => a -> a -> a -> a
 * @param {Number} min
 * @param {Number} max
 * @param {Number} value
 * @returns {Number}
 */
const clamp = (min, max, value) => {
  if (min > max) {
    throw new Error(
      'min must not be greater than max in clamp(min, max, value)'
    );
  }
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
};

const curryClamp = curry(clamp);

export default curryClamp;
