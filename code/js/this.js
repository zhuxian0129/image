var obj = {
  id: "awesome",
  cool: function coolFn() {
    console.log(this.id);
  }
};
var id = "not awesome";
obj.cool(); // awesome
setTimeout(obj.cool, 100); // not awesome

function identify() {
  return this.name.toUpperCase()
}

function speak() {
  var greeting = `Hello,I'm ${identify.call(this)}`
  console.log(greeting)
}

const me = {
  name: 'Kyle'
}

const you = {
  name: 'Reader'
}

identify.call(me) // this指向 me，打印 KYLE
identify.call(you) // this指向 you，打印 READER

speak.call(me) // KYLE
speak.call(you); // READER

function foo() {
  console.log(this.a)
}

var a = 2;
var o = { a: 3, foo }
var p = { a: 4 }
o.foo(); // 3
(p.foo = o.foo)(); // 2


var myObject = {}

// 原型链
myObject.prototype.foo = 1
// 原型链上层