class Task {
  id;

  // 构造函数 Task()
  Task(ID) { id = ID }
  outputTask() { this.outputTask(id) }
}

class XYZ extends Task {
  label;

  // 构造函数 XYZ()
  XYZ(ID, Label) {
    super(ID);
    label = Label
  }

  outputTask() {
    super();
    this.outputTask(this.label)
  }
}

class ABC extends Task {

}

function Foo() { }
var a1 = new Foo();
Foo.prototype.constructor = function Gotcha() { };
a1.constructor; // Gotcha(){}
a1.constructor.name; // "Gotcha" 
a1; // Foo {}


var Foo = {};
var a1 = Object.create(Foo);
a1; // Object {}
Object.defineProperty(Foo, "constructor", {
  enumerable: false,
  value: function Gotcha() { }
});
a1; // Gotcha {}