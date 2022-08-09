#### 前端渲染

> 用户输入url
>
> DNS解析，获取服务器静态资源（HTML + CSS + JS）
>
> 浏览器渲染：HTML解析生成DOM树，CSS解析生成CSSDOm树，DOM和CSSDOM合并产生渲染树（Render Tree）
>
> 浏览器执行JS代码，向提供API接口的服务器发送网络请求
>
> 获取数据，通过其他JS代码，插入HTML，渲染到浏览器



#### 后端渲染  

jsp（Java server page） 更有利于SEO优化

> 浏览器输入网址 
>
> DNS解析，获取当前页面（html + css + java）
>
> > java 代码：从数据库中读取数据，并且将它动态的放在页面上
>
> 将获取到的内容传给浏览器

后端路由：后端处理URL 和页面之间的映射关系

缺点：

1. 整个页面都是后端开发人员编写和维护；前端不好开发；
2. 通常情况下HTML代码和数据以及对应的逻辑会混在一起，编写和维护都是非常糟糕的事情



### router-link

默认将配置的router-link渲染成a标签

to：

tag：配置router-link渲染成指定的标签

replace：replace 不会留下history记录，所以指定replace的情况下，后退键不能返回到上一个页面上

active-class：当<router-link>对应的路由匹配成功时，会自动给当前元素设置一个router-link-active的class，设置active-class可以修改默认的名称



### 路由代码跳转

```vue
this.$router.push({
	path: '',
	query: ''
})
this.$router.replace({
	path: '',
	query: ''
})
```



### 动态路由跳转

```vue
// route.js 文件配置
routes = [
	{ path: '/user/:id', component: '' }
]

// user 页面获取路径参数 id
computed: {
	id(){
		return this.$route.params.id
	}
}
```

> router 与 route 的区别
>
> > router：全局的router，获取到的是全局的router，为一个数组
> >
> > route：当前页面的路由信息，获取到的是一个对象，也为router的一个子项



###  路由懒加载

当打包构建应用时，JavaScript包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才会加载对应组件，这样会更加高效。

```js
// 方式一：结合Vue的异步组件和Webpack的代码分析
const Home = resolve => { require.ensure(['../components/Home.vue']) , () => {
    resolve(require('../components/Home.vue'))
}}

// 方式二： AMD写法
const About = resolve => require(['../components/About.vue'], resolve);

// 方式三：ES6中，Vue异步组件和Webpack的代码分割
const Home = () => import('../components/Home.vue')
```



### 参数传递

params：路径参数

query：问号后面拼接的内容



### 导航守卫 

* to：即将要进入的目标（配置的路由对象 -- route）

* from：当前导航正要离开的路由（配置的路由对象 -- route）

  #### 可选参数

* next：为一个函数，可传递一个路径对象作为参数。<font color='#f00'>在任何情况下，确保<code>next</code>在给定的导航守卫中都被严格调用一次。它可以出现多余一次，但是只能在所以逻辑路径都不重叠的情况下，否则钩子永远都不会解析或报错。</font>

1. 全局前置守卫 -- beforeEach

   ```js
   router.beforeEach((to,from,next) => {
       
   })
   ```

   返回值处理情况：

   - false：取消当前的导航。如果浏览器的URL改变了，那么URL地址会重置到from路由对应的地址
   - 一个路由地址：通过一个路由地址跳转到一个不同的地址，就像调用<code>router.push()</code>一样，可以设置诸如<code>replace: true</code>或<code>name: 'home'</code>之类的配置。当前的导航被中断，然后进行一个新的导航。

2. 全局解析守卫 -- beforeResolve

   ```js
   router.beforeResolve((to, from, next) => {
       
   })
   ```

   <code>router.beforeResolve</code>是获取数据或执行任何其他操作的理想位置。

3. 全局后置钩子 -- afterEach

   和守卫不同，不会接受<code>next</code>函数，也不会改变导航本身

   ```jd
   router.afterEach((to, from) => {
   
   })
   ```

   

4. 路由独享的守卫 -- beforeEnter

   直接在路由配置上定义的守卫<code>beforeEnter</code>：

   ```js
   const routes = [
       {
           path: '',
           component: '',
           beforeEnter: (to, from) => {
               
           }
       }
   ]
   ```

   <code>beforeEnter</code>守卫只在进入路由时触发，不会在<code>params</code>,<code>query</code>或<code>hash</code>改变时触发。只有在从一个不同的路由导航时，才会被触发。

5. 组件内的守卫

   在路由组件内直接定义路由导航守卫（传递给路由配置的）

   > 可用的配置 API：
   >
   > - beforeRouteEnter
   > - beforeRouteUpdate
   > - beforeRouteLeave

```js
const UserDetails  = {
    template: `...`,
    beforeRoueEnter(to, from){
        // 在渲染该组件的对应路由被验证前调用
        // 不能获取组件实例 this
        // 因为当守卫执行时，组件实例还没有被创建
        // 可以通过 传一个回调给 next 来访问组件实例
    },
    beforeRouteUpdate(to, from){
        // 在当前路由改变，但该组件被复用是调用
        // 举例：对于一个带有动态参数的路径 `/user/:id`，在`/user/1`和`user/2`之间跳转时
        // 由于会渲染同样的 UserDetails 组件，因此组件实例会被复用。而这个钩子在这个情况下被调用
        // 因为这种情况发生时，组件已经挂载好了，导航守卫可以访问组件实例 this
    },
    beforeRouteLeave(to, from){
        // 在导航离开渲染该组件的对应路由时调用
        // 可以访问组件实例 this
    }
}
```



### 完成的导航解析流程

1. 导航被触发。
2. 在失活的组件里面调用<code>beforeRouteLeave</code>守卫。
3. 调用全局的<code>beforeEach</code>守卫。
4. 在重用的组件里调用<code>beforeRouteUpdate</code>守卫。
5. 在路由配置里调用<code>beforeEnter</code>。
6. 解析异步路由组件。
7. 在被激活的组件里调用<code>beforeResolve</code>。
8. 调用全局的<code>beforeResolve</code>守卫。
9. 导航被确定。
10. 调用全局的<code>afterEach</code>钩子。
11. 触发DOM更新。
12. 调用<code>beforeRouteEnter</code>守卫中传给<code>next</code>的回调函数，创建好的组件实例会作为回调函数的参数传入。
