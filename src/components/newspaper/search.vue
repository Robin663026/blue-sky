<template>
  <div class="main">
    <time_display></time_display>
    <div class="search">
      <div class="input">请输入关键字</div>
      <div class="cancel">取消</div>
    </div>
    <div class="hot">
      <div class="hot_search">热门搜索关键字</div>
      <div class="letter"></div>
    </div>
    <div class="keyboard">
      <img src="../../assets/img/" alt="">
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
.main{
  width:100%;
  .px2rem(height,1334);
  .search{
    .px2rem(height,90);
    width:100%;
    .input{
      .px2rem(width,600);
      .px2rem(height,70);
      .px2rem(border-radius,10);
      background: #F1F3F5;
      .px2rem(margin-left,30);
      .px2rem(margin-top,8.8);
      .px2rem(margin-right,33);
      .px2rem(margin-bottom,11.2);


      }
    }
    .cancel{
      .px2rem(width,57);
      .px2rem(height,28);
      .px2rem(margin-left,0);
      .px2rem(margin-top,30);
      .px2rem(margin-right,30);
      .px2rem(margin-bottom,32);
      font-family:PingFang Regular;
      .px2px(font-size,28);
      .px2rem(line-height,29);
    }

  .hot{
    width:100%;
    .px2rem(height,674);
    .px2rem(padding-left,40);
    .px2rem(padding-top,30);
    .hot_search{
      .px2rem(width,199);
      .px2rem(height,28);
      .px2rem(margin-left,0);
      .px2rem(margin-top,0);
      .px2rem(margin-right,511);
      .px2rem(margin-bottom,20);
      font-family:PingFangSC-Semibold;
      .px2px(font-size,28);
      .px2rem(line-height,29);
    }
    .letter{
      .px2rem(height,60);
      .px2rem(border-radius,100);
      .border-1px(#A5A5A5);
      .border-top(#A5A5A5);
      .border-left(#A5A5A5);
      .border-bottom(#A5A5A5);
      .px2rem(padding-left,20);
      .px2rem(padding-top,16);
      .px2rem(padding-right,20);
      .px2rem(padding-bottom,16);
      .px2rem(margin-right,60);
    }

  }
  .keyboard{
    width:100%;
    .px2rem(height,530.6);
  }
}
</style>
