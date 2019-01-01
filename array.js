/**
 * 返回数组中的最大值的索引,若数组为空，则返回1
 * @param {Array} arr
 * @returns {Number}
 */
export function max(arr) {
  if (arr.length === 0) {
    return -1
  }
  let maxIndex = 0,
    maxNumber = 0
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] >= maxNumber) {
      maxIndex = i
      maxNumber = arr[i]
    }
  }
  return maxIndex
}

/**
 * 返回数组中的最小值的索引,若数组为空，则返回1
 * @param {Array} arr
 * @returns {Number}
 */
export function min(arr) {
  if (arr.length === 0) {
    return -1
  }
  let minIndex = 0,
    minNumber = 0
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] <= maxNumber) {
      minIndex = i
      minNumber = arr[i]
    }
  }
  return minIndex
}
