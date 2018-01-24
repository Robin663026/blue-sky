<template>
  <div  class="main">
    <time_display></time_display>
    <order_header >

  </order_header>
  <order_dt>

  </order_dt>
  <foots>

  </foots>
  </div>
</template>
<script>
  import order_header from './order_header'
  import foots from '../foots'
  import order_dt from './order_dt'
  import time_display from '../time_display'
  export default {
    data() {
      return {

      }
    },
    components:{
      order_header,
      foots,
      order_dt,
      time_display
    }
  }
</script>
<style scoped lang="less">
</style>
