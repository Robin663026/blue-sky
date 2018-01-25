<template>
  <div class="message">
    <time_display></time_display>
    <div class="heade">
      <div class="left"><img src="../../assets/img/4_icon_back.png" ></div>
      <div class="right">消息通知</div>

    </div>
    <div class="content">
      <div class="con"></div>
    </div>
  </div>

</template>

<script>
  import time_display from '../time_display'
    export default {
        data() {
            return {}
        }
    }
</script>

<style scoped lang="less">
  @import '../../assets/css/main.less';
  .message{
    width:100%;
    top:0;
    left:0;
    right:0;
    position:fixed;
    .px2px(bottom,101);
    .heade{
      .px2rem(height,91);
      .px2rem(padding-top,35);
      .px2rem(padding-bottom,23);
      width:100%;
      .border-1px(#E2E4E6);
      .left{
        .px2rem(width,32);
        .px2rem(height,32);
        .px2rem(margin-left,30);
        .px2rem(margin-right,248);
        .px2rem(margin-top,27);
        .px2rem(margin-bottom,32);
      }
      .right{
        font-family: PingFangSC-Semibold;
        /*font-size: 32px;*/
        .px2px(font-size,32);
        .px2rem(width,130);
        .px2rem(height,32);
        .px2rem(margin-right,310);
        .px2rem(margin-top,30);
        .px2rem(margin-bottom,29);
      }
    }
    .content{
      .px2rem(height,1103);
      width:100%;
      .con{

      }
    }
  }
</style>
