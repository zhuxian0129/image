<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span>{{ conuter }}</span>
    <button @click="sub">-</button>
    <button @click="add">+</button>
    <h3>{{ $store.getters.powerCount }}</h3>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    conuter() {
      return this.$store.state.count
    }
  },
  methods: {
    sub() {
      this.$store.commit('decrement')
    },
    add() {
      this.$store.commit('increment')
    }
  }
}
</script>
