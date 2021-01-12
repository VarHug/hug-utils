/**
 * 获取m到n之间的整数随机数
 * @export
 * @param {Number} m
 * @param {Number} n
 */
export const random = (m, n) => {
  return (m + Math.random() * (n - m + 1)) | 0;
};

/**
 * 洗牌算法
 * @export
 * @param {Array} arr
 * @returns {Array}
 */
export const shuffle = (arr) => {
  const _arr = arr.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = random(0, i);
    const temp = _arr[i];
    _arr[i] = _arr[j];
    _arr[j] = temp;
  }
  return _arr;
};
