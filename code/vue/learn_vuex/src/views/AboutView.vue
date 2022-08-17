<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h4>{{ conuter }}</h4>
    <button @click="sub">-5</button>
    <button @click="add">+5</button>
    <!-- <h3>{{ $store.getters.powerCount }}</h3> -->
    <p>异步加减</p>
    <button @click="asyncSub">-3</button>
    <button @click="asynsAdd">+5</button>
    <div style="border: 1px solid red;"></div>
    <h3>{{ $store.state.a.name }}</h3>
    <h3>{{ $store.getters.doubleCount }}</h3>
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
      this.$store.commit('decrement', 5)
    },
    add() {
      this.$store.commit('increment', 5)
    },
    asyncSub() {
       this.$store.dispatch('decrement', {
        num: 3
      }).then(res => {
        console.log(`异步改变之后的count ${res}`)
      })
    },
    asynsAdd() {
      this.$store.dispatch('increment', {
        num: 5
      }).then(res => {
        console.log(`异步改变之后的count ${res}`)
      })
    }
  }
}
</script>
