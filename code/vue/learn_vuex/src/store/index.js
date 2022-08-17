import Vue from 'vue'
import Vuex from 'vuex'

import moduleA from './ModuleA'

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
    increment(state, num) {
      state.count += num
    },
    decrement(state, num) {
      state.count -= num
    }
  },
  // 异步操作
  actions: {
    increment(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('increment', payload.num)
          resolve(context.state.count)
        }, 1000)
      })
    },
    decrement(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('decrement', payload.num)
          resolve(context.state.count)
        }, 1000)
      })
    }
  },
  modules: {
    a: moduleA
  }
})
