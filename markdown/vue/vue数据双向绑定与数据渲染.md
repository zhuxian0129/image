## 响应式原理

<font color='red'>响应式数据的关键：拦截对象属性的设置和读取操作</font>

### 命令式和声明式框架

**命令式框架**

例如：jQuery 获取DOM，操作DOM

**声明式框架**

例如：Vue：没有直接操作DOM

命令式框架：注重过程

声明式框架：注重结果

#### 双向绑定的实现 Vue2

vue2的实现：当将一个普通对象传入Vue示例作为data选项，Vue将遍历此对象所有的property，并使用**Object.defineProperty**把这些property全部转为getter/setter。

```html
<body>
<input type="text">
<h1></h1>
<button>点击</button>
</body>
<script>
    const input = document.querySelector('input')
    const h1 = document.querySelector('h1')
    const btn = document.querySelector('button')
    let data = { text: '' }
    input.addEventListener('input', function (e){
        data.text = e.target.value
    })
    btn.onclick = function (){
        data.text = '你好'
    }
    Object.defineProperty(data, 'text', {
        get(){
            return data.text
        },
        set(newValue){
            h1.innerText = newValue
           input.value = newValue
        }
    })
</script>
```

### 数据双向绑定 Vue3

vue3的实现：当我们从一个组件的data函数中返回一个普通js对象时，Vue会将这个对象包裹在一个带有get和set处理程序的<strong>Proxy</strong>中。

```html
<body>
<input type="text">
<h1></h1>
<button>点击</button>
</body>
<script>
    const input = document.querySelector('input')
    const h1 = document.querySelector('h1')
    const btn = document.querySelector('button')
    let data = { text: '' }
    input.addEventListener('input', function (e){
        dataProxy.text = e.target.value
    })
    btn.onclick = function (){
        dataProxy.text = '你好'
    }
    function bindValue(target, prop){
        h1.innerText = target[prop]
        input.value = target[prop]
    }
    bindValue(data, 'text', {
        [h1.innerText]: h1.innerText,
        [input.value]: input.value
    })
    const dataProxy = new Proxy(data, {
        get(target, prop){
            return Reflect.get(target, prop)
        },
        set(target, prop, value){
            Reflect.set(target, prop, value)
            bindValue(target, prop)
        }
    })
</script>
```



