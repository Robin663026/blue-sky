<template>
<div  >

  <heads class="row clearfix">

  </heads>
 <cont_dt>
 </cont_dt>
<foots>

</foots>
</div>
</template>
<script>
  import foots from '../foots'
  import heads from '../heads'
  import cont_dt from './con_dt'

  const ERR_0K=0;
  export default{
    name:'news',
    data(){
      return {
        news:{}
      };
    },
    created(){
//      this.$http.get('./api/news').then((response)=>{
//        response=response.body;
//        //console.log(response.data)
//        if(response.errno===ERR_0K){
//          this.news=response.data;
//
//        }
//      });
    },
    components:{
      heads,
      foots,
      cont_dt
    }
  }
</script>
<style scoped lang="less">

</style>
