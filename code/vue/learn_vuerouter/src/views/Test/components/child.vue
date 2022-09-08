<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "child",
  data(){
    return {
      list: []
    }
  },
  methods: {
    getData(){
      setTimeout(()=> {
        this.list = this.random(20, 5)
      }, 300)
    },
    random(maxNum = 10, length = 10){
      let temp = []
      for(let i = 0; i < length; i++){
        temp.push((Math.random() * maxNum).toFixed(0))
      }
      console.log(temp)
      return temp
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style scoped>

</style>