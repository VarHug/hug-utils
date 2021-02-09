# hug-utils
常用函数的封装，提供简易版的函数式函数。

项目目录：

src:
  * Enum:
  * Function:
    * **[always](https://github.com/VarHug/hug-utils/blob/master/src/Function/always/index.js)**: 返回一个返回恒定值的函数。注意，对于非原始值，返回的值是对原始值的引用。
    * **[compose](https://github.com/VarHug/hug-utils/blob/master/src/Function/compose/index.js)**: 从右往左执行函数组合，最后一个函数可以是任意元函数（参数个数不限），其余函数必须是一元函数。
    * **[curry](https://github.com/VarHug/hug-utils/blob/master/src/Function/curry/index.js)**: 对函数进行柯里化
    * **[identity](https://github.com/VarHug/hug-utils/blob/master/src/Function/identity/index.js)**: 将输入值原样返回。适合用作默认或占位函数。
  * List:
    * **[adjust](https://github.com/VarHug/hug-utils/blob/master/src/List/adjust/index.js)**: 将数组中指定索引处的值替换为经函数变换的值。
    * **[all](https://github.com/VarHug/hug-utils/blob/master/src/List/all/index.js)**: 如果列表中的所有元素都满足predicate，则返回true；否则，返回false。
    * **[nth](https://github.com/VarHug/hug-utils/blob/master/src/List/nth/index.js)**: 返回列表或字符串的第n个元素。如果n为负数，则返回索引为length+n的元素。
  * Logic:
    * **[and](https://github.com/VarHug/hug-utils/blob/master/src/Logic/and/index.js)**: 如果两个参数都是true，则返回true；否则返回false。
  * Math:
    * **[simpleAdd](https://github.com/VarHug/hug-utils/blob/master/src/Math/simpleAdd/index.js)**: 简单加法，两数相加
    * **[simpleDivide](https://github.com/VarHug/hug-utils/blob/master/src/Math/simpleDivide/index.js)**: 简单除法，第一个数除以第二个数
    * **[simpleMultiply](https://github.com/VarHug/hug-utils/blob/master/src/Math/simpleMultiply/index.js)**: 简单乘法，两数相乘
    * **[simpleSubtract](https://github.com/VarHug/hug-utils/blob/master/src/Math/simpleSubtract/index.js)**: 简单减法，首个参数减去第二个参数
  * Object:
    * **[keys](https://github.com/VarHug/hug-utils/blob/master/src/Object/keys/index.js)**: 返回给定对象所有可枚举的、自身属性的属性名组成的列表。注意，不同JS运行环境输出数组的顺序可能不一致。
    * **[prop](https://github.com/VarHug/hug-utils/blob/master/src/Object/prop/index.js)**: 取出对象中指定属性的值。如果不存在，则返回undefined。
    * **[values](https://github.com/VarHug/hug-utils/blob/master/src/Object/values/index.js)**: 返回对象所有自身可枚举的属性的值
  * Relation:
    * **[gt](https://github.com/VarHug/hug-utils/blob/master/src/Relation/gt/index.js)**: 如果首个参数大于第二个参数，返回true；否则返回false。
  * Type:
    * **[isArray](https://github.com/VarHug/hug-utils/blob/master/src/Type/isArray/index.js)**: 检测输入值是否为数组
    * **[isInteger](https://github.com/VarHug/hug-utils/blob/master/src/Type/isInteger/index.js)**: 检测输入值是否为整数
    * **[isNil](https://github.com/VarHug/hug-utils/blob/master/src/Type/isNil/index.js)**: 检测输入值是否为null或undefined
    * **[isObject](https://github.com/VarHug/hug-utils/blob/master/src/Type/isObject/index.js)**: 检测输入值是否为对象
    * **[isString](https://github.com/VarHug/hug-utils/blob/master/src/Type/isString/index.js)**: 检测输入值是否为字符串
    * **[type](https://github.com/VarHug/hug-utils/blob/master/src/Type/type/index.js)**: 用一个单词来描述输入值的（原生）类型，返回诸如'Object'、'Number'、'Array'、'Null'之类的结果。不区分用户自定义的类型，统一返回'Object'。

