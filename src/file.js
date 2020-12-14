/**
 * 格式化文件大小函数，为了保持和硬盘一样，默认采用1000为进位单位
 * @param {Number} size 文件大小
 * @param {Number} carry 单位进制，接受参数为1000或者1024
 * @returns {Number}
 */
export const formatFileSize = (size, carry) => {
  const _suffix = ['bytes', 'KB', 'MB', 'GB', 'TB']
  const _carry = carry === 1024 || carry === 1000 ? carry : 1000
  let _index = 0
  while (size >= _carry && _index < _suffix.length) {
    size /= _carry
    _index++
  }
  size = parseInt(size) === size ? size : size.toFixed(1)
  return `${size}${_suffix[_index]}`
}

/**
 * 获取文件后缀名函数
 * @export
 * @param {String} filename
 * @returns {String}
 */
export const suffix = (filename) => {
  const index = filename.lastIndexOf('.')
  return filename.substr(index + 1)
}
