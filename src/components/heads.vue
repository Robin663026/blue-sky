<template>
  <div class="tab">
  <div class="news-header1">新闻</div>
  <div class="news-header2"><img src="../assets/img/3_icon_search.png" ></div>
  </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style scoped lang="less">
  @import '../assets/css/common.less';
  @import '../assets/css/border-1px.less';
  .tab {
    .px2rem(height,91);
    .px2rem(padding-top,35);
    .px2rem(padding-bottom,23);
    width:100%;
    .border-1px(#E2E4E6);
    .news-header1 {
      float: left;
      .px2rem(margin-left,343);
      .px2rem(margin-right,280);
      .px2rem(width,65);
      .px2rem(height,32);
      font-family: PingFangSC-Semibold;
      /*font-size: 32px;*/
      .px2px(font-size,32);
      color: #333333;
      .px2rem(line-height,32);
    }

    .news-header2 {
      float: left;
      .px2rem(width,32);
      .px2rem(height,32);
      .px2rem(margin-right,30);
      img{
        .px2rem(width,32);
        .px2rem(height,32);
      }

    }
  }


</style>
