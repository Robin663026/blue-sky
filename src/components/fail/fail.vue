<template>
  <div class="fail" >
  <header></header>
  <div class="back"><img src="../../img/4_icon_back.png" width="16"height="16"></div>
  <div class="content">
    <div class="image"><img src="../../img/57_no_wifi.png" width="150" height="145"></div>
    <div class="text1">加载失败</div>
    <div class="text2"@click="reload">
      <div class="detail">点击重新加载</div>
    </div>
  </div>  
  </div>
</template>
<script>
export default {
  methods: {
    // 重新加载
    reload () {
      this.$emit('reload')
    }
  }
}
</script>

<style lang="less">
  @import (reference)'../../assets/less/common.less';

  .fail{
   background:@bc;
   width:100%;
   height:100%;
   header{
    height:20px;
    width:100%;
    background:@bc1;
   }
   content{
    width:100%;
    text-align:center;
    .image{
      padding:144px 0 10px 0;
    }
    .text1{
      padding-bottom:30px;
      font-family:PingFangSC-Regular;
      font-size: 16px;
      color: @light;
    }
    .text2{
      width:140px;
      background: @bg;
      border: 1px solid @97;
      border-radius: 50px;
      .detail{
        dispaly:inline-block;
        padding:8px 22px;
        text-align:center;
        padding:8px;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: @light;
      }
    }
   }
  }
  
</style>

