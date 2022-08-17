Vuex 是一个专为Vue.js 应用程序开发的状态管理模式。

它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

### 单视图管理

状态管理应用包含以下几个部分：

- state：驱动应用的数据源
- view：以声明方式将state映射到视图
- action：响应在view上的用户输入导致的状态变化

<img src="https://v3.vuex.vuejs.org/flow.png" style="zoom: 50%;" />

当我们的应用遇到多个组件共享状态时，单向数据流的简洁性很容易被破坏：

- 多个视图依赖于同一状态。
- 来自不同视图的行为需要变更同一状态。



### 多视图状态管理

<img src="https://v3.vuex.vuejs.org/vuex.png">



### 什么情况下应该使用Vuex

如果不打算开发大型单页应用，使用Vuex可能是繁琐冗余的。但是，如果我们需要构建一个中大型单页应用，可以考虑在组件外部管理状态，Vuex将会成为自然而然的选择。



### state

#### 单一状态树  Single Source of Truth

Vuex 使用单一状态树 -- 用一个对象包含全部的应用层级状态。

单一状态树让我们能够直接地定位任一特定的状态片段，在调试过程中也能轻易地取到整个当前应用状态的快照。

### mutations

Mutation 遵循Vue的响应式规则，那么当我们变更状态时，监视状态的Vue组件也会自动更新。这也意味这Vuex中的mutation也需要与使用vue一样遵守一些注意事项：

1. 最好提前在store中初始化好所有属性。
2. 当需要在对象上添加新的属性时，应该：
   - 使用<code>Vue.set(obj, key, value)</code>
   - 以新对象替换老对象
3. 当需要删除对象上的属性时，应该：
   - 使用<code>Vue.delete(obj, key)</code>

mutation 必须是同步函数

### getters



### actions

Action类似于 mutation，不同在于：

- Action提交的是mutation，而不是直接变更状态。
- Action可以包含任意异步操作

Action函数接受一个与store实例具有相同方法和属性的context对象，因此可以调用<code>context.commit</code>提交一个mutation，或者通过<code>context.state</code>和<code>context.getters</code>来获取 state 和 getters。

### modules

由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。

为了解决以上问题，Vuex允许我们将store分割成 模块（module）。每个模块拥有自己的state，mutation，action，getter，设置是嵌套子模块 —— 从上之下进行同样方式的分割。

