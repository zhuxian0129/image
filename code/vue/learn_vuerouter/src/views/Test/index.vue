<template>
  <div>
    <h2>哈哈哈</h2>
    <button @click="getChildData">点击</button>
    <child ref="child"/>
  </div>
</template>

<script>
import child from "@/views/Test/components/child";
export default {
  name: "index",
  components: { child },
  data(){
    return {

    }
  },
  methods: {
    getData(){

    },
    getChildData(){
      this.$refs.child.getData()
    }
  }
}
</script>

<style scoped>

</style>