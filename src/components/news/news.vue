<template>
<div  >
<time_display>

</time_display>
  <heads >

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
  import time_display from '../time_display'
  export default{

    data(){
      return {

      };
    },
    created(){

    },
    components:{
      heads,
      foots,
      cont_dt,
      time_display:time_display
    }
  }
</script>
<style scoped lang="less">

</style>
