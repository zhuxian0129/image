const moduleA = {
  state: () => ({
    name: 'moduleA'
  }),

  getters: {
    doubleCount (state, getters, rootState) {
      return state.name + 'getter' + rootState.count
    }
  }
}

export default moduleA