// 如果一个项目，存在多个服务器地址接口时，
// 可以创建多个axios实例，为每个实例进行独立的配置
const instance1 = axios.create({
  timeout: 5000,
  baseURL:''
})

const instance2 = axios.create({
  baseURL: '',
  timeout: ''
})

export function request(config) {
  // 创建axios实例
  const instance = axois.create({
    baseURL: '',
    timeout: 5000
  })

  // 发送真正的网络请求
  instance
}