# hug-utils
常用函数的封装，提供简易版的函数式函数。

项目目录：

src:
  * Enum: 枚举值（常量）
    * **[TypeEnum](https://github.com/VarHug/hug-utils/blob/master/src/Enum/index.js#L1)**: type 类型常量
  * Function:
    * **[always](https://github.com/VarHug/hug-utils/blob/master/src/Function/always/index.js)**: 返回一个返回恒定值的函数
    * **[compose](https://github.com/VarHug/hug-utils/blob/master/src/Function/compose/index.js)**: 从右往左执行函数组合
    * **[curry](https://github.com/VarHug/hug-utils/blob/master/src/Function/curry/index.js)**: 柯里化
    * **[identity](https://github.com/VarHug/hug-utils/blob/master/src/Function/identity/index.js)**: 将输入值原样返回
  * List:
    * adjust: 将数组中指定索引处的值替换为经函数变换的值
    * all: 如果列表中的所有元素都满足 predicate，则返回 true；否则，返回 false
    * nth: 返回列表或字符串的第 n 个元素
  * Logic:
    * and: 如果两个参数都是 true，则返回 true；否则返回 false
  * Math:
    * simpleAdd: 简单加法（原生加法）
    * simpleDivide: 简单除法（原生除法）
    * simpleMultiply: 简单乘法(原生乘法)
    * simpleSubtract: 简单减法(原生减法)
  * Object:
    * keys: 返回给定对象所有可枚举的、自身属性的属性名组成的列表
    * prop: 取出对象中指定属性的值
    * values: 返回对象所有自身可枚举的属性的值
  * Relation:
    * gt: 判断首个参数是否大于第二个参数
  * Type:
    * isArray: 检测输入值是否为数组
    * isInteger: 检测输入值是否为整数
    * isNil: 检测输入值是否为 null 或 undefined
    * isObject: 检测输入值是否为对象
    * isString: 检测输入值是否为字符串
    * type: 用一个单词来描述输入值的（原生）类型，返回诸如 'Object'、'Number'、'Array'、'Null' 之类的结果
