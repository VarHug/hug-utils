# hug-utils
常用函数的封装，提供简易版的函数式函数。

项目目录：

src:
  * Enum:
    * **[TypeEnum](https://github.com/VarHug/hug-utils/blob/master/src/Enum/TypeEnum/index.js)**: 类型常量
  * Function:
    * **[always](https://github.com/VarHug/hug-utils/blob/master/src/Function/always/index.js)**: 返回一个返回恒定值的函数
    * **[compose](https://github.com/VarHug/hug-utils/blob/master/src/Function/compose/index.js)**: 从右往左执行函数组合
    * **[curry](https://github.com/VarHug/hug-utils/blob/master/src/Function/curry/index.js)**: 柯里化
    * **[identity](https://github.com/VarHug/hug-utils/blob/master/src/Function/identity/index.js)**: 将输入值原样返回
  * List:
    * **[adjust](https://github.com/VarHug/hug-utils/blob/master/src/List/adjust/index.js)**: 将数组中指定索引处的值替换为经函数变换的值
    * **[all](https://github.com/VarHug/hug-utils/blob/master/src/List/all/index.js)**: 如果列表中的所有元素都满足predicate，则返回true；否则，返回false
    * **[nth](https://github.com/VarHug/hug-utils/blob/master/src/List/nth/index.js)**: 返回列表或字符串的第n个元素
  * Logic:
    * **[and](https://github.com/VarHug/hug-utils/blob/master/src/Logic/and/index.js)**: 如果两个参数都是true，则返回true；否则返回false
  * Math:
    * **[simpleAdd](https://github.com/VarHug/hug-utils/blob/master/src/Math/simpleAdd/index.js)**: 简单加法（原生加法）
    * **[simpleDivide](https://github.com/VarHug/hug-utils/blob/master/src/Math/simpleDivide/index.js)**: 简单除法（原生除法）
    * **[simpleMultiply](https://github.com/VarHug/hug-utils/blob/master/src/Math/simpleMultiply/index.js)**: 简单乘法(原生乘法)
    * **[simpleSubtract](https://github.com/VarHug/hug-utils/blob/master/src/Math/simpleSubtract/index.js)**: 简单减法(原生减法)
  * Object:
    * **[keys](https://github.com/VarHug/hug-utils/blob/master/src/Object/keys/index.js)**: 返回给定对象所有可枚举的、自身属性的属性名组成的列表
    * **[prop](https://github.com/VarHug/hug-utils/blob/master/src/Object/prop/index.js)**: 取出对象中指定属性的值
    * **[values](https://github.com/VarHug/hug-utils/blob/master/src/Object/values/index.js)**: 返回对象所有自身可枚举的属性的值
  * Relation:
    * **[gt](https://github.com/VarHug/hug-utils/blob/master/src/Relation/gt/index.js)**: 判断首个参数是否大于第二个参数
  * Type:
    * **[isArray](https://github.com/VarHug/hug-utils/blob/master/src/Type/isArray/index.js)**: 检测输入值是否为数组
    * **[isInteger](https://github.com/VarHug/hug-utils/blob/master/src/Type/isInteger/index.js)**: 检测输入值是否为整数
    * **[isNil](https://github.com/VarHug/hug-utils/blob/master/src/Type/isNil/index.js)**: 检测输入值是否为null或undefined
    * **[isObject](https://github.com/VarHug/hug-utils/blob/master/src/Type/isObject/index.js)**: 检测输入值是否为对象
    * **[isString](https://github.com/VarHug/hug-utils/blob/master/src/Type/isString/index.js)**: 检测输入值是否为字符串
    * **[type](https://github.com/VarHug/hug-utils/blob/master/src/Type/type/index.js)**: 用一个单词来描述输入值的（原生）类型，返回诸如'Object'、'Number'、'Array'、'Null'之类的结果

