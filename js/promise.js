class myPromise {
  static PENDING = 'pending'
  static FUlFILLED = 'fulfilled'
  static REJECTED = 'rejected'

  constructor(executor) {
    this.status = myPromise.PENDING
    this.value = null
    this.callback = []
    try {
      executor(this.resolve.bind(this), this.reject.bind(this))
    } catch (error) {
      this.reject(error)
    }
  }

  resolve(value) {
    if (this.status === myPromise.PENDING) {
      this.status = myPromise.FUlFILLED
      this.value = value
      this.callback.map(callback => {
        setTimeout(() => {
          callback.onFulfilled(this.value)
        })
      })
    }
  }

  reject(reason) {
    if (this.status === myPromise.PENDING) {
      this.status = myPromise.REJECTED
      this.value = reason
      this.callback.map(callback => {
        setTimeout(() => {
          callback.onRejected(this.reason)
        })
      })
    }
  }

  then(onFulfilled, onRejected) {
    if (typeof onFulfilled !== 'function') {
      onFulfilled = () => { }
    }
    if (typeof onRejected !== 'function') {
      onRejected = () => { }
    }
    return new myPromise((resolve, reject) => {
      if (this.status === myPromise.PENDING) {
        this.callback.push({
          onFulfilled: (value) => {
            try {
              onFulfilled(value)
            } catch (error) {
              onRejected(error)
            }
          },
          onRejected: (reason) => {
            try {
              onRejected(reason)
            } catch (error) {
              onRejected(error)
            }
          }
        })
      }
      if (this.status === myPromise.FUlFILLED) {
        setTimeout(() => {
          try {
            onFulfilled(this.value)
          } catch (error) {
            onRejected(error)
          }
        })
      }
      if (this.status === myPromise.PENDING) {
        setTimeout(() => {
          try {
            onRejected(this.value)
          } catch (error) {
            onRejected(error)
          }
        }) 
      }
    })
  }
}

const a = () => {}

// new Promise((resolve, reject) => {
//   resolve()
//   reject()
// })