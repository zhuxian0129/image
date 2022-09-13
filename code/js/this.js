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



function Foo(name) {
  this.name = name
}

Foo.prototype.myName = function () {
  return this.name
}

function Bar(name, label) {
  Foo.call(this, name)
  this.label = label
}

Bar.prototype = Object.create(Foo.prototype)

Bar.prototype.myLable = function () {
  return this.label
}

var a = new Bar('a', 'obj a')

a.myName()
a.myLable()



var a = {
  name: 'a'
}

var b = Object.create(a)

a.name = 'a1'

console.log(b.__proto__)


var name = 222
var a = {
  name: 111,
  say() {
    console.log(this.name)
  }
}
var fun = a.say
fun() // 222
a.say() // 111

var b = {
  name: 333,
  say() {
    fun()
  }
}
b.say(a.say) // 222
b.say = a.say
b.say() // 333

var obj = {
  birth: 1990,
  getAge() {
    var b = this.birth
    var fn = () => new Date.getFullYear() - this.birth
    return fn()
  }
}
obj.getAge()
