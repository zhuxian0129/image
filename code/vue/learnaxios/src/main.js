import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/* axios({
  url: 'http://www.soosupply.com/dd/countries',
  method: 'get'
}).then(res => {
  console.log(res)
}) */

axios.all([axios({
  url: 'http://www.soosupply.com/dd/countries'
}), axios({
  url: 'http://www.soosupply.com/dd/currencies'
})]).then(axios.spread((res1,res2) => {
  console.log(res1, res2)
}))