<template>
<div  >
<time_display>
</time_display>
  <heads >
  </heads>
 <column>
 </column>
<foots>
</foots>

</div>
</template>
<script>
  import foots from '../foots'
  import heads from '../heads'
  import column from './column'
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
      column,
      time_display
    }
  }
</script>
<style scoped lang="less">

</style>
