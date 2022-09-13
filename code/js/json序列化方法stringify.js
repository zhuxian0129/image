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
const jsonStr3 = JSON.stringify(obj, function (key,value){
  if(key === 'age'){
    return value + 1
  }
  return value
})

// stringify 第三个参数
const jsonStr4 = JSON.stringify(obj, null, 4)
const jsonStr4 = JSON.stringify(obj, null, '----')

// 如果 要转换的对象中存在 toJSON 方法，会直接将 toJSON 的返回值，作为转换的结果返回
const obj1 = {
  name: 'obj1',
  toJSON(){
    return 123
  }
}
const jsonStr5 = JSON.stringify(obj1) // 123