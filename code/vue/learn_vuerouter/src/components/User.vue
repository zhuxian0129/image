<template>
  <div>
    <span>我是张三，哈哈哈{{userId}}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    userId() {
      return this.$route.params.userId
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log(vm)
    })
  }
}
</script>
<style>
</style>
