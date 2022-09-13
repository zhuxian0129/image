方式一：使用 script 标签

```html
<script type='x-template' id='my-app'>
    <div>
    	<h2>{{ count }}</h2>
    	<button @click='increment'>+1</button>
    </div>
</script>
```

方式二：使用template

```html
<template id='my-app'>
    <div>
    	<h2>{{ count }}</h2>
    	<button @click='increment'>+1</button>
    </div>
</template>
```

> 这个时候，在createApp的对象内，我们需要传入一个`template`以 # 开头的字符串
>
> > 如果字符串是以 # 开头，那么它将被用作 querySelector，并且使用匹配元素的innerHTML作为模板字符串



#### <template> 内容模板元素

<strong>HTML内容模板(\<template\>) 元素</strong>是一种用于保存客户端内容机制。该内容在加载页面时不会呈现，但随后可以在运行时使用js实例化。

