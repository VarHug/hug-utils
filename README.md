# hug-utils
常用函数的封装，提供简易版的函数式函数。

项目目录：

src:
  * Enum: 枚举值（常量）
    * TypeEnum: type 类型常量
  * Function:
    * compose: 从右往左执行函数组合
    * curry: 柯里化
  * List:
    * adjust: 将数组中指定索引处的值替换为经函数变换的值
    * all: 如果列表中的所有元素都满足 predicate，则返回 true；否则，返回 false
  * Math:
    * simpleAdd: 简单加法（原生加法）
    * simpleDivide: 简单除法（原生除法）
    * simpleMultiply: 简单乘法(原生乘法)
    * simpleSubtract: 简单减法(原生减法)
  * Type:
    * isInteger: 检测输入值是否为整数
    * isNil: 检测输入值是否为 null 或 undefined
    * isString: 检测输入值是否为字符串
    * type: 用一个单词来描述输入值的（原生）类型，返回诸如 'Object'、'Number'、'Array'、'Null' 之类的结果
