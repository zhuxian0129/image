// 节流：

function throttle(fn, interval) {
  let lastTime = new Date().getTime()

  const _throttle = function (...arg) {
    const nowTime = new Date().getTime()
    const remainTime = interval - (nowTime - lastTime)
    if (remainTime <= 0) {
      fn.apply(this, arg)
      lastTime = nowTime
    }
  }

  return _throttle
}