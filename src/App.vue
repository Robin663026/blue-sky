<template>
  <div class="main">
    <keep-alive >
      <router-view></router-view>
    </keep-alive>
    <lg-preview></lg-preview>



</div>
</template>

<script>
  const ERR_OK=0;
export default{
  data(){
    return {
      news:{}
    };
  },
  methods:{

  },
  created(){
    // this.$http.get('/api/news').then((response)=>{
    //   response=response.body;
    //   if(response.errno===ERR_OK){
    //     this.news=response.data;
    //   }
    // });
  }
}
</script>

<style  lang="less">

  

</style>
