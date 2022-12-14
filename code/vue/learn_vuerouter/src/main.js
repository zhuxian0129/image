import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

router.beforeResolve((to, form, next) => {
  console.log('beforeResolve')
  next()
})

router.afterEach((to, form) => {
  console.log('afterEach')
})