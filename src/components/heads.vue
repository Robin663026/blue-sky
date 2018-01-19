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
  @font-face{
    font-family:PingFangSC-Semibold;
    src:url('../assets/fonts/pfs.ttf');
  }

  @baseFontSize: 75;
  .px2rem(@name, @px){
      @{name}: @px / @baseFontSize * 1rem;
  }
  .tab {
    .px2rem(height,90);
    .px2rem(padding-top,35);
    .px2rem(padding-bottom,23);
    .px2rem(width,750);
    border-bottom: 1px solid #E2E4E6;

    .news-header1 {
      float: left;
      .px2rem(margin-left,343);
      .px2rem(margin-right,280);
      .px2rem(width,65);
      .px2rem(height,32);
      font-family: PingFangSC-Semibold;
      font-size: 32px;
      color: #333333;
      .px2rem(line-height,32);
    }
    [data-dpr="2"].new-header1{
      font-size:64px;
    }
    [data-dpr="3"].new-header1{
      font-size:96px;
    }
    .news-header2 {
      float: left;
      .px2rem(width,32);
      .px2rem(height,32);
      .px2rem(margin-right,30);
      
    }
  }


</style>
