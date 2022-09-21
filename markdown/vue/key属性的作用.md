### 官方解释

- 在Vue的<font color='#f00'>虚拟DOM算法</font>，在<font color='#f00'>新旧nodes</font>对比时辨识<font color='#f00'>VNodes</font>；
- 如果<font color='#f00'>不使用key</font>，Vue会使用一种最大限度减少动态元素并且尽可能的尝试就地<font color='#f00'>修改/复用相同类型元素</font>的算法；
- 而<font color='#f00'>使用key</font>，它会基于key的变化<font color='#f00'>重新排列元素顺序</font>，并且<font color='#f00'>销毁key不存在的元素</font>，<font color='#f00'>创建新增的key</font>；

### VNode -- Virtual Node

无论是组件还是元素，它们最终在Vue中表示出来的都是一个个VNode

VNode的本质是一个JavaScript的对象

```html
<div class='title' style='font-size: 30px; color: red;'>
    哈哈哈
</div>
```

```js
const vnode = {
    type: 'div',
    props: {
        class: 'title',
        style: {
            'font-size': '30px',
            color: 'red'
        }
    },
    childred: '哈哈哈'
}
```

#### Vue转换过程

template -- VNode -- 真实DOM

### 虚拟DOM

如果我们不只是一个简单的div，而是有一堆的元素，那么它们应该会形成一个VNode Tree

```html
<div>
    <p>
        <i>哈哈哈</i>
        <i>嘻嘻嘻</i>
    </p>
    <span>呜呜呜</span>
    <strong>嘿嘿嘿</strong>
</div>
```

<img src='../../img/202209182151486.png'>

### diff算法

diff算法作用：对比新旧节点数据，更新DOM

> 存在key
> 使用patchKeyedChildren方法
>
> 记录新旧节点的一些变量：c1 新VNodes节点数组；c2 旧VNodes节点数组；i = 0 记录头部遍历下标；l2 旧节点长度；e1 新节点尾部下标；e2 旧节点尾部下标
>
> 1. 从头部开始遍历，依次对比各项，更新 i，直到遇到不同的两个节点，跳出while循环
> 2. 从尾部开始遍历，依次对比各项，更新e1、e2，直至遇到两个不同的节点，跳出while循环
> 3. 常规序列（i > e1 或者 i > e2）新增节点 / 移除多余节点
> 4. 非常规序列，循环旧的节点，建立新旧节点映射，尝试匹配新的节点，并删除不再存在的节点，最后移动和挂载节点

> 没有key
>
> 使用patchUnkeyedChildren方法
>
> 1. 获取新旧节点nodes数组长度
> 2. 取两数最小值，遍历nodes，进行patch
> 3. 如果旧nodes长度较大，移除剩余旧节点
> 4. 反之，新增新节点

