[].map(function (item, index) {

})

// parseInt 充当map的callback，入参 item，index，返回值 parseInt(item,index)
[1, 2, 3].map(parseInt)

parseInt(1, 0)
parseInt(2, 1)
parseInt(3, 2)

class Bird {
  constructor() {
    console.log(111)
  }
}

class Flamigo extends Bird {
  constructor() {
    super()
    console.log(222)
  }
}

const pet = new Flamigo()


async function async1() {
  console.log('async1 start') // 2
  await async2() // 
  console.log('async1 end') // 6
}
async function async2() {
  console.log('async2') // 3
}

console.log('script start') // 1

setTimeout(function () {
  console.log('setTimeout') // 8
}, 0)

async1()

new Promise(function (resolve) {
  console.log('promise1') // 4
  resolve()
}).then(function () {
  console.log('promise2') // 7
})
console.log('script end') // 5


var b = 10;
(function b() {
  b = 20;
  console.log(b);
})();


/** 
 * 使用递归的方式处理 
 * wrap 内保存结果 ret 
 * 返回一个递归函数 *
 * @returns 
 * */
function wrap() {
  var ret = [];
  return function flat(a) {
    for (var item of a) {
      if (item.constructor === Array) {
        ret.concat(flat(item))
      } else {
        ret.push(item)
      }
    }
    return ret
  }
}
console.log(wrap()(arr));

var a = 10;
(function () {
  console.log(a) // undefined
  a = 5
  console.log(window.a) // 10
  var a = 20;
  console.log(a) // 20
})()

var b = 10;
(function () {
  console.log(b) // 10
  b = 5
  console.log(window.b) // 5
  console.log(b) // 5
})()


var obj = {
  '2': 3,
  '3': 4,
  'length': 2,
  'splice': Array.prototype.splice,
  'push': Array.prototype.push
}
obj.push(1)
obj.push(2)
console.log(obj)

// 实现 (5).add(3).minus(2) 功能
Number.prototype.add = function (n1) {
  return this + n1
};

(5).add(3)


var a = {
  n: 1
};
var b = a;
a.x = a = {
  n: 2
};
console.log(a.x) // {n:2}
console.log(b.x) // undefined

var a = 1
var b = a
b = a = 3
console.log(a, b)

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function maopao(arr) {
  console.time('aaa')
  const array = [...arr]
  for (let i = 0, len = array.length; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (array[i] > array[j]) {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    }
  }
  console.timeEnd('aaa')
  return array
}

// {1:222, 2:123, 5:888}，请把数据处理为如下结构：[222, 123, null, null, 888, null, null, null, null, null, null, null]
function formatData(data) {
  const arr = new Array(12)
  for (let i in arr) {
    arr[i] = data[++i] || null
  }
  return arr
}
const data = { 1: 222, 2: 123, 5: 888 }
console.log(formatData(data))

const obj = {
  name1: '123',
  age: 23
}

const { age: name1 } = obj
console.log(name1)

const myObject = {
  name: 'myObject'
}

// 只读的 foo
Object.defineProperty(myObject.__proto__, 'foo', {
  value: 'foo',
  writable: false
})

// 没有标记只读的 foo1
Object.defineProperty(myObject.__proto__, 'foo1', {
  value: 'foo1',
  writable: true
})

// 只读的 foo2
Object.defineProperty(myObject.__proto__, 'foo2', {
  value: 'foo2',
  writable: false
})

// 读取描述符setter
let foo3 = 'foo3'
Object.defineProperty(myObject.__proto__, 'foo3', {
  set(value) {
    foo3 = value
  },
  get() {
    return foo3
  }
})

myObject.foo = 'bar' // 属性未被添加，且[[prototype]]内foo未被修改
myObject.foo1 = 'bar1' // 属性添加成功
Object.defineProperty(myObject, 'foo2', {
  value: 'bar2',
  configurable: true,
  enumerable: true,
  writable: true
})
myObject.foo3 = 'bar3'
console.log(myObject) 

var anotherObject = {
  a: 2
}
var myObj = Object.create(anotherObject)
console.loh(myObj)
myObj.a++
console.log(myObj)

var ar = [1,1,1,1,1,1,1]
var ar1 = [2,2,2,2,2,2,2]
ar.forEach(item => {
  item = ''
})
for (let i in ar1) {
  ar1[i] += 1
}
console.log(ar)
console.log(ar1)