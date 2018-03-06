<template>
  <div class="main">
    <div class="image">
      <img src="" alt="" width="375" height="175">
    </div>
    <div class="down">
      <span class="num"></span>
      <span class="icon"><img src="../../assets/img/33_save.png" alt=""width="21" height="21"></span>
    </div>

  </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style lang="less">
.main{
  position:fixed;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  z-index:200;
  background: #333333;
  padding:492px 0;
  .down{
    position:absolute;
    left:15px;
    bottom:25px;
    height:21px;
    padding-right:15px;
    .num{
      display:inline-block;
      vertical-align: top;
    }
    .icon{
      display:inline-block;
      vertical-align: top;
      padding-left:299px;
    }
  }
}
</style>
