/**
 * 获取m到n之间的整数随机数
 * @export
 * @param {Number} m
 * @param {Number} n
 */
export function random(m, n) {
  return (m + Math.random() * (n - m + 1)) | 0
}
