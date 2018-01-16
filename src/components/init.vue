<template>
  <div class="hello">
<span id="im">
  <img src="../assets/img/54_img.png" alt="">
</span>
    <span id="md">蓝穹</span>
  </div>
</template>

<script>

  export default {
    name: 'init',
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    position:relative;
  }

  #im{
    position:absolute;
    left:0;
    right:0;
    margin-left:auto;
    margin-right:auto;
    width:360px;
    height:248px;
    top:0;
    margin-top:20px;
  }
  #md{
    top:0;
    position:absolute;
    text-align:center;
    margin-top:270px;
    left:0;
    right:0;
    margin-left:auto;
    margin-right:auto;
    color:#008CFF;
    font-size:56px;
    line-height:78px;
    letter-spacing:24px;
    font-family:PingFangSC-Regular;
  }
</style>
