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
  @baseFontSize: 75;
  .px2rem(@name, @px){
      @{name}: @px / @baseFontSize * 1rem;
  }
  .tab {
    .px2rem(height,90);
    .px2rem(padding-top,35);
    .px2rem(padding-bottom,23);
    border-bottom: 1px solid red;

    .news-header1 {
      float: left;

      .px2rem(margin-left,343);
      .px2rem(margin-right,280);

      font-family: PingFangSC-Semibold;
      font-size: 16px;
      color: #333333;
      .px2rem(line-height,33);
    }

    .news-header2 {
      float: left;
      .px2rem(margin-right,30);
      img {
        .px2rem(height,32);
        .px2rem(width,32);
      }
    }
  }


</style>
