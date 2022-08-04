// 防抖：中文名字 防抖，顾名思义，防止抖动
// 做A，当B事件隔T个时间都没有触发时

// When a sequence of calls of the returned function ends, the argument
// function is triggered. The end of a sequence is defined by the `wait`
// parameter. If `immediate` is passed, the argument function will be
// triggered at the beginning of the sequence instead of at the end.
function debounce(func, wait = 300, immediate = false) { // 初次是否执行的防抖函数
  let timer = null, isInvoke = false

  debounced = function (...args) {
    if (timer) clearTimeout(timer)
    if (immediate && !isInvoke) {
      func.apply(this, args)
      isInvoke = true
    }
    timer = setTimeout(() => {
      func.apply(this, args)
      isInvoke = false
    }, wait)
  }
  
  debounced.cancel = function () {
    if (timer) clearTimeout(timer)
    isInvoke = false, timer = null
  }
  return debounced;
}


