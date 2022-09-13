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

const jsonParse = JSON.parse(jsonStr1, function (key,value){
    if(key === 'age'){
        return value - 1
    }
    return value
})
