<template>
  <div >

 <router-view></router-view>

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
    this.$http.get('/api/news').then((response)=>{
      response=response.body;
      if(response.errno===ERR_OK){
        this.news=response.data;
        console.log(this.news);
      }
    });
  }
}
</script>

<style  lang="less">

</style>
