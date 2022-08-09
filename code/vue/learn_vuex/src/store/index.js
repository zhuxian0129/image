import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    powerCount(state) {
      return Math.pow(state.count, 2)
    }
  },
  // 同步更新
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  },
  // 异步操作
  actions: {
  },
  modules: {
  }
})
