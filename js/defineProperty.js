const arr = [1, 2, 3, 4, 5]

/* Object.defineProperty(arr, '', {
  get() {
    console.log(obj['arr'])
    // return obj['arr']
  },
  set(value) {
    obj['arr'] = value
    console.log('setted')
  }
}) */
// obj.arr
// obj.name = '123'
// obj.arr.push(5)

// const arr1 = [1, 2, 3, 4]
const obj = {
  name: 'obj',
  obj1: {
    name: 'obj1'
  }
}

newObj1 = new Proxy(obj, {
  set(target, prop, value) {
    console.log('setted')
    // if (target[prop] !== null && typeof target[prop] === 'object') {
    //   Reflect.set(target[prop], prop, value)
    // }
    Reflect.set(target, prop, value)
  },
  get(target, prop) {
    console.log('getted')
    return Reflect.get(target, prop)
  }
})

newObj1.name = 'haha'
newObj1.age = 12
newObj1.age
