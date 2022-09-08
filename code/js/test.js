"use strict";

// 类型检查
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

// 设置属性描述符
function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

// 设置类的属性
function _createClass(Constructor, protoProps, staticProps) {
    // 一般属性
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);

    // 静态属性
    if (staticProps) _defineProperties(Constructor, staticProps);

    Object.defineProperty(Constructor, "prototype", {writable: false});

    return Constructor;
}

var C = /*#__PURE__*/function () {
    function C() {
        _classCallCheck(this, C);

        this.num = Math.random();
    }

    _createClass(C, [{
        key: "rand",
        value: function rand() {
            console.log("Random: " + this.num);
        }
    }]);

    return C;
}();

class Person{
    constructor() {
    }
    person(){
        console.log('person',this)
    }
}

class Students extends Person{
    constructor() {
        super();
    }
    student(){
        super.person()
        console.log('students', this)
    }
}

const p = new Person()
p.person()

const s = new Students()
s.student()
s.person()

var a = []
a[0] = 0
a['asd'] = 1

for(let i of a){
    console.log(i)
}


Function.prototype.zxApply = function (thisArg, args){
    if(typeof thisArg !== 'object' || thisArg === null) thisArg = Object(thisArg)
    const fn = Symbol.for(Math.random())
    thisArg[fn]= this
    const result = thisArg[fn](...args)
    delete thisArg[fn]
    return result
}

function foo(){
    console.log(this, arguments)
}

'toString' in foo

foo.zxApply('123', [1,2,3,2,3])

