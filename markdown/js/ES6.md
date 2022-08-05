### 箭头函数与普通函数的区别

箭头函数是普通函数的简写，可以更优雅的定义一个函数，和普通函数相比，有一下几点差异：

* 函数体内的<code>this</code>对象，就是定义时所在的对象，而不是使用时所在的对象

* 不可以使用<code>arguments</code>对象，该对象在函数体内不存在。如果要用，可以用<code>rest</code>参数代替

* 不可以使用<code>yield</code>命令，因此箭头函数不能作<code>Genertor函数</code>

* 不可以使用<code>new</code>命令：没有自己的<code>this</code>，无法调用call，apply；没有<code>prototype</code>属性，而<code>new</code>命令在执行时需要将构造函数的<code>prototype</code>属性赋值给新的对象<code>__proto</code>

  

### 新增的变量声明关键字let和const与ES6之前的关键字var的区别



###  使用new来调用函数（发生构造函数调用）

1. 创建一个全新的对象（空对象）；
2. 这个对象会执行[[prototype]]链接（这个对象内部的[[prototype]]属性会被赋值为该构造函数的prototype属性）；
3. 这个新对象会绑定到函数调用的this；
4. 如果函数没有返回其他对象，那么new表达式中的函数调用会自动返回这个新对象

