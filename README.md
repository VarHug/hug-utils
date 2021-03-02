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
    * **[append](https://github.com/VarHug/hug-utils/blob/master/src/List/append/index.js)**: 在列表末尾拼接一个元素
    * **[concat](https://github.com/VarHug/hug-utils/blob/master/src/List/concat/index.js)**: 连接列表或字符串
    * **[find](https://github.com/VarHug/hug-utils/blob/master/src/List/find/index.js)**: 查找并返回list中首个满足predicate的元素；如果未找到满足条件的元素，则返回undefined
    * **[map](https://github.com/VarHug/hug-utils/blob/master/src/List/map/index.js)**: 接收一个函数和一个functor,将该函数应用到functor的每个值上，返回一个具有相同形态的functor
    * **[nth](https://github.com/VarHug/hug-utils/blob/master/src/List/nth/index.js)**: 返回列表或字符串的第n个元素
    * **[reduce](https://github.com/VarHug/hug-utils/blob/master/src/List/reduce/index.js)**: 左折叠操作
  * Logic:
    * **[and](https://github.com/VarHug/hug-utils/blob/master/src/Logic/and/index.js)**: 如果两个参数都是true，则返回true；否则返回false
  * Math:
    * **[simpleAdd](https://github.com/VarHug/hug-utils/blob/master/src/Math/simpleAdd/index.js)**: 简单加法（原生加法）
    * **[simpleDivide](https://github.com/VarHug/hug-utils/blob/master/src/Math/simpleDivide/index.js)**: 简单除法（原生除法）
    * **[simpleMultiply](https://github.com/VarHug/hug-utils/blob/master/src/Math/simpleMultiply/index.js)**: 简单乘法(原生乘法)
    * **[simpleSubtract](https://github.com/VarHug/hug-utils/blob/master/src/Math/simpleSubtract/index.js)**: 简单减法(原生减法)
  * Object:
    * **[keys](https://github.com/VarHug/hug-utils/blob/master/src/Object/keys/index.js)**: 返回给定对象所有可枚举的、自身属性的属性名组成的列表
    * **[merge](https://github.com/VarHug/hug-utils/blob/master/src/Object/merge/index.js)**: 合并两个对象的自身属性
    * **[prop](https://github.com/VarHug/hug-utils/blob/master/src/Object/prop/index.js)**: 取出对象中指定属性的值
    * **[propEq](https://github.com/VarHug/hug-utils/blob/master/src/Object/propEq/index.js)**: 如果指定对象属性与给定的值相等，则返回true；否则返回false
    * **[values](https://github.com/VarHug/hug-utils/blob/master/src/Object/values/index.js)**: 返回对象所有自身可枚举的属性的值
  * Relation:
    * **[clamp](https://github.com/VarHug/hug-utils/blob/master/src/Relation/clamp/index.js)**: 将数字限制在指定的范围内
    * **[gt](https://github.com/VarHug/hug-utils/blob/master/src/Relation/gt/index.js)**: 判断首个参数是否大于第二个参数
  * Type:
    * **[isArray](https://github.com/VarHug/hug-utils/blob/master/src/Type/isArray/index.js)**: 检测输入值是否为数组
    * **[isInteger](https://github.com/VarHug/hug-utils/blob/master/src/Type/isInteger/index.js)**: 检测输入值是否为整数
    * **[isNil](https://github.com/VarHug/hug-utils/blob/master/src/Type/isNil/index.js)**: 检测输入值是否为null或undefined
    * **[isObject](https://github.com/VarHug/hug-utils/blob/master/src/Type/isObject/index.js)**: 检测输入值是否为对象
    * **[isString](https://github.com/VarHug/hug-utils/blob/master/src/Type/isString/index.js)**: 检测输入值是否为字符串
    * **[type](https://github.com/VarHug/hug-utils/blob/master/src/Type/type/index.js)**: 用一个单词来描述输入值的（原生）类型，返回诸如'Object'、'Number'、'Array'、'Null'之类的结果

