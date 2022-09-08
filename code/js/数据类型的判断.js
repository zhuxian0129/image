// typeof 可判断除null以外的基本数据类型

// instanceof
// 只能用来判断变量的原型链上是否有构造函数的prototype属性（两个对象是否属于原型链的关系），不一定能获取对象的具体类型
// Instanceof 不适用判断原始类型的值，只能用于判断对象是否从属关系

// constructor
// 由于undefined和null是无效的对象，因此是没有constructor属性的,这两个值不能用这种方法判断.

// Object.prototype.toString.call()
// Object.prototype.toString方法返回对象的类型字符串，因此可用来判断一个值的类型。
// 因为实例对象有可能会自定义toString方法，会覆盖Object.prototype.toString，所以在使用时，最好加上call
// 所有的数据类型都可以使用此方法进行检测，且非常精准

var iframe = document.createElement("iframe")
document.body.append(iframe)

var xArray = window.frames[window.frames.length - 1].Array

var arr = new xArray(1,2,3)

console.log(arr)