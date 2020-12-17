import { curry } from './appendix'

/**
 * 返回数组中的最大值的索引,若数组为空，则返回-1
 * @param {Array} arr
 * @returns {Number}
 */
export const max = (arr) => {
  if (arr.length === 0) {
    return -1
  }
  let maxIndex = 0
  let maxNumber = 0
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] >= maxNumber) {
      maxIndex = i
      maxNumber = arr[i]
    }
  }
  return maxIndex
}

/**
 * 返回数组中的最小值的索引,若数组为空，则返回-1
 * @param {Array} arr
 * @returns {Number}
 */
export const min = (arr) => {
  if (arr.length === 0) {
    return -1
  }
  let minIndex = 0
  let minNumber = 0
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] <= minNumber) {
      minIndex = i
      minNumber = arr[i]
    }
  }
  return minIndex
}

/**
 * 数组去重，返回去重后的数组
 * @param {Array} arr
 * @returns {Array}
 */
export const unique = (arr) => {
  const res = []
  const dic = {}
  for (const element of arr) {
    if (!dic[element]) {
      dic[element] = 1
      res.push(element)
    }
  }
  return res
}

/**
 * 对数组中的各项元素执行一遍需要的方法，若返回值相同，保留第一个值，返回去重后的数组。
 *
 * @function
 * @sig (a -> b) -> [a] -> [a]
 * @param {Function} fn
 * @param {Array} arr
 * @returns {Array}
 */
export const uniqBy = curry((fn, arr) => {
  const set = new Set()
  const result = []
  let appliedItem
  arr.forEach((item) => {
    appliedItem = fn(item)
    if (!set.has(appliedItem)) {
      set.add(appliedItem)
      result.push(item)
    }
  })
  return result
})
