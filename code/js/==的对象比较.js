// 关于 x == y 的比较

// 1. x 和 y 数据类型相同


// 2.


// x 或者 y 中有一个为对象，另一个为 String 或 Number
const info = {
    name: 'info'
}

console.log(123 == info) // false

// 加条件
info[Symbol.toPrimitive] = function (){
    return 123
}

console.log(123 == info) // true

first: for(let i = 0; i < 10; i++){
    second: for(let j = 1; j < i; j++){
        if(i === j) break second
    }
}