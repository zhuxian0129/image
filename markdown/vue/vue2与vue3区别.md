### 数据监听

- 在`vue2`中,`vue2`是使用的`Object.defineProperty`来劫持数据的`getter`和`setter`方法；这种方式存在一个缺陷<font color='#f00'>当给对象添加或删除属性时，是无法劫持监听的</font>；
- 所以在`vue2`中，不得不提供一些特殊的API，比如`$set`和`$delete`，事实上都是一些hack方法，也增加了开发者学习新的API的成本；
- 而在`vue3`中，使用`Proxy`来实现数据的劫持。

### 非必要API的删除

- 移除了实例上的 `$on`，`$off`，`$once`;
- 移除了一些特性：`filter`，内联模块；

### 编译方面的优化

生成Block Tree，Slot编译优化，diff算法优化

### 新的API

> 由 OPtions API 到 Composition API
>
> OPtions API 中包含data，props，methods，computed，生命周期等选项；
>
> Composition API 可以将 相关联的代码 放到同一处进行处理，而不需要在多个OPtions之间寻找

### data 属性

**data属性**是传入一个函数，并且该函数需要返回一个对象；

- 在`vue2`时，data属性可以传入一个对象（虽然官方推荐是一个函数）
- 在`vue3`时，data必须传入一个函数，否则会在浏览器中报错

data中返回的对象，会被<font color='#f00'>Vue响应式系统劫持</font>，之后对该<font color='#f00'>对象的修改或者访问</font>都会在劫持中被处理；

