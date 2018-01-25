<template>
<div class="main">
  <div class="images">
    <div class="line1">
      <img src="../../assets/img/20_share_wechat2.png" alt="" class="image1">
      <img src="../../assets/img/19_share_wechat.png" alt="" class="image2">
      <img src="../../assets/img/21_share_sina.png" alt="" class="image3">
    </div>
    <div class="line2">
      <span class="word1">微信</span>
      <span class="word2">朋友圈</span>
      <span class="word3">新浪微博</span>
    </div>
    <div class="line1">
      <img src="../../assets/img/18_share_qq.png" alt="" class="image4">
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
    <div class="line3">
      <span class="word4">QQ</span>
      <span class="word5">敬请期待</span>
      <span class="word3">敬请期待</span>
    </div>
  </div>
  <div class="cancel">
    取消
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

<style scoped lang="less">
  @import '../../assets/css/main.less';
  .main{
    .px2rem(height,443);
    .px2rem(width,690);
    .px2rem(border-radius,12);
    .images{
      .px2rem(height,352);
      .px2rem(padding-bottom,30);
      .line1{
        .px2rem(margin-top,40);
        .px2rem(margin-bottom,8);
        image1{
          .px2rem(width,80);
          .px2rem(height,80);
          .px2rem(margin-left,113);
          .px2rem(margin-right,112);
        }
        .image2{
          .px2rem(width,80);
          .px2rem(height,80);
          .px2rem(margin-right,113);
        }
        .image3{
          .px2rem(width,80);
          .px2rem(height,80);
          .px2rem(margin-right,112);
        }
        .circle{
          .px2rem(width,80);
          .px2rem(height,80);
          .px2rem(border-radius,40);
          background: #D8D8D8;
        }
      }
      .line2{
        .px2rem(height,33);
        width:100%;
        .word1{
          .px2rem(width,48);
          .px2rem(height,33);
          .px2rem(margin-left,129);
          .px2rem(margin-right,132);
        }
        .word2{
          .px2rem(width,72);
          .px2rem(height,33);
          .px2rem(margin-right,109);
        }
        .word3{
          .px2rem(width,96);
          .px2rem(height,33);
          .px2rem(margin-right,134);
        }
      }
      .line3{
        .px2rem(height,33);
        width:100%;
        .word4{
          .px2rem(width,37);
          .px2rem(height,33);
          .px2rem(margin-left,134);
          .px2rem(margin-right,126);
        }
        .word5{
          .px2rem(width,96);
          .px2rem(height,33);
          .px2rem(margin-right,97);
        }
        .word6{
          .px2rem(width,96);
          .px2rem(height,33);
          .px2rem(margin-right,134);
        }
      }
    }
    .cancel{
      .px2rem(height,91);
      .px2rem(margin-left,313);
      .px2rem(margin-right,312);
      .px2rem(margin-top,29);
      .px2rem(margin-bottom,29);
      .px2px(font-size,32);
      .px2rem(line-height,33);
      font-family:PingFang Regular;
      color: #FF0000;
      .border-top(#E2E4E6);
    }
  }
</style>
