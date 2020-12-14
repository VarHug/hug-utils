/**
 * 获取Object的具体类型
 * @param {Object} obj
 * @returns {String} Object,Array,Function
 */
export const getObjectType = (obj) => {
  return Object.prototype.toString.call(obj).replace(/\[object (\w+)\]/, '$1')
}

/**
 * 获取对象的长度
 * @param {Object} obj
 * @returns {boolean}
 */
export const getObjectLength = (obj) => {
  if (getObjectType(obj) === 'Object') {
    return Object.keys(obj).length
  }
}

/**
 * 判断两个对象是否相等
 * @param {Object} obj1
 * @param {Object} obj2
 * @returns {boolean}
 */
export const equalObject = (obj1, obj2) => {
  const type1 = getObjectType(obj1)
  const type2 = getObjectType(obj2)
  if (type1 !== type2) {
    return false
  }
  const len1 = Object.keys(obj1).length
  const len2 = Object.keys(obj2).length
  if (len1 !== len2) {
    return false
  }
  const stack = []
  stack.push(obj1, obj2)
  while (stack.length) {
    const item1 = stack.shift()
    const item2 = stack.shift()
    const keys = Object.keys(item1)
    const isEqual = keys.every((key) => {
      if (item1[key] instanceof Object) { // 忽略函数
        stack.push(item1[key], item2[key])
        return true
      } else {
        return item1[key] === item2[key]
      }
    })
    if (!isEqual) {
      return false
    }
  }
  return true
}
