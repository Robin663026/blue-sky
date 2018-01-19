<template>
  <div id="app">

 <router-view></router-view>

</div>
</template>

<script>

export default{
  data(){
    return {
      seller:{}
    }
  },
  methods:{

  },
  created(){
    this.$http.get('/api/')
  }
}
</script>

<style scoped lang="less">

</style>
