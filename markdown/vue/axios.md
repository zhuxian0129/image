选择一：传统的Ajax是基于XMLHttpRequest（XHR）

> 为什么不用它：
>
> 配置和调用方式等非常混乱
>
> 编码起来也非常头疼
>
> 所以真实开发中很少直接使用，而是使用jQuery-Ajax

选择二：jQuery-Ajax

> 相对传统的Ajax非常好用
>
> 但是，在vue的整个开发中都是不需要使用jQuery了
>
> 那么，为了方便我们进行一个网络请求，特意引入一个jQuery，得不偿失
>
> 完全没有必要为了网络请求就引入这个重量级的框架

选择三：官方在Vue1.x，推出Vue-resource

> 相对于jQuery，小很多
>
> 但是就目前，已不再维护，对以后项目开发和维护都存在很大的隐患

选择四：axios

> 在浏览器发送XMLHttpRequests请求
>
> 在node.js中发送http请求
>
> 支持Promise API
>
> 拦截请求和响应
>
> 转换请求和响应数据