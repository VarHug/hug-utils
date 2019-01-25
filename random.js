/**
 * 获取m到n之间的整数随机数
 * @export
 * @param {Number} m
 * @param {Number} n
 */
export function random(m, n) {
  return (m + Math.random() * (n - m + 1)) | 0
}

/**
 * 洗牌算法
 * @export
 * @param {Array} arr
 * @returns {Array}
 */
export function shuffle(arr) {
  let _arr = arr.slice()
  for (let i = arr.length - 1; i > 0; i--) {
    let j = random(0, i)
    let temp = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = temp
  }
  return _arr
}
