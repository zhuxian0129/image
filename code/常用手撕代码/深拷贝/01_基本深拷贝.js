const s1 = Symbol('s1')
const s2 = Symbol('s2')
const s3 = Symbol.for('clone')
const obj = {
  name: 'obj',
  friend: {
    name: 'hh',
    fn() {
      console.log('fn')
    }
  },
  foo() {
    console.log(11)
  },
  hobbies: ['111', '222', '333'],
  [s1]: s1,
  [s2]: [1,2,3,4,5,6,7],
  a: s3
}

/* JSON 做深拷贝存在的问题：
      1. 不能拷贝函数
      2. Symbol类型的key会被直接忽略
      3. 循环引用保存
 */

function isObject(value) {
  const valueType = typeof value
  return (value !==null && valueType === 'object') ? true : false
}

function deepClone(originValue) {
  // 判断是否是一个 set 类型
  if (originValue instanceof Set) {
    return new Set([...originValue])
  }
  // 判断是否是一个 map 类型
  if (originValue instanceof Map) {
    return new Map([...originValue])
  }
  // 处理传入数据为 symbol 类型
  if (typeof originValue === 'symbol') {
    return Symbol(originValue.description)
  }

  // 判断传入的originValue 是否是一个对象类型
  if (!isObject(originValue)){
    return originValue
  }
  const newObj = Array.isArray(originValue) ? [] : {}
  // 迭代一个对象的除Symbol以外的可枚举属性
  for (const key in originValue) {
    newObj[key] = deepClone(originValue[key])
  }

  // 遍历 Symbol 类型的可枚举属性
  Object.getOwnPropertySymbols(originValue).map(item => {
      newObj[item] = deepClone(originValue[item])
  })
  return newObj
}

const cloneObj = deepClone(obj)
console.log(cloneObj)