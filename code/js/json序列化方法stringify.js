const obj = {
  name: 'obj',
  age: 12,
  friends: [
    { name: 'xixi', age: 13 },
    { name: 'haha', age: 11 }
  ]
}

// 将整个对象转JSON字符串
const jsonStr1 = JSON.stringify(obj)

/* stringify 第二参数 */
//  1. 传入数组：设定哪些是需要转换的
const jsonStr2 = JSON.stringify(obj, ['name', 'age'])

// 2.传入回调函数