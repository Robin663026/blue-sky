<template>
<div class="main">
  <time_display></time_display>
  <div class="search">
    <div class="input"></div>
    <div class="cancel">取消</div>
  </div>
  <div class="content">
    <img src="../../assets/img/55_load_fail.png" alt="">
    <div class="word">
      无相关关键词文章
    </div>
  </div>

</div>
</template>

<script>
  import time_display from '../time_display.vue';
    export default {
        data() {
            return {}
        },
      components:{
        time_display
      }
    }
</script>

<style scoped lang="less">
  @import '../../assets/css/main.less';
.main {
  width:100%;
  .px2rem(height,1334);
  .search {
    .px2rem(height, 90);
    width: 100%;
    .input {
      .px2rem(width, 600);
      .px2rem(height, 70);
      .px2rem(border-radius, 10);
      background: #F1F3F5;
      .px2rem(margin-left, 30);
      .px2rem(margin-top, 8.8);
      .px2rem(margin-right, 33);
      .px2rem(margin-bottom, 11.2);
    }
  }
  .content{
    .px2rem(height,1202);
    width:100%;
    img{
      .px2rem(width,300);
      .px2rem(height,290);
      .px2rem(margin-left,246);
      .px2rem(margin-top,290);
      .px2rem(margin-right, 204);
      .px2rem(margin-bottom, 20);
    }
    .word{
      .px2rem(width,256);
      .px2rem(height,45);
      .px2rem(margin-left,247);
      .px2rem(margin-top,0);
      .px2rem(margin-right, 247);
      .px2rem(margin-bottom, 557);
      .px2px(font-size,32);
      .px2rem(ling-height,45);
      font-family:PingFang Regular;
      color: #A5A5A5;
    }
  }


}

</style>
