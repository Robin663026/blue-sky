<template>
  <div class="main container">
  <div class="tab1">
    <div class="tab-item1 ">
      <router-link class="change1" to="/news"></router-link>
    </div>
    <div class="tab-item2">
      <router-link class='change2' to="/order"></router-link>
    </div>
    <div class="tab-item3">
      <router-link class='change3' to="/me"></router-link>
    </div>
  </div>
  <div class="tab">
    <div class="tab-item1"><router-link  to="/news">新闻</router-link></div>
    <div class="tab-item2"><router-link to="/order">订阅</router-link></div>
    <div class="tab-item3"><router-link to="/me">我</router-link></div>
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

<style  lang="less">
  @baseFontSize: 75;
  .px2rem(@name, @px){
      @{name}: @px / @baseFontSize * 1rem;
  }
  .main {
    border-top: 1px solid #E2E4E6;
    .px2rem(height,100);


    .tab1 {
      .px2rem(margin-top,13);
      .px2rem(margin-bottom,7);
      .px2rem(margin-left,146);
      .px2rem(margin-right,150);
      .px2rem(height,48);
      background: #FFF;
      .tab-item1 {
        float:left;
        background-image:url("../assets/img/8_icon_news_blue.png");
        .px2rem(width,48);
        .px2rem(margin-right,157);
        }
      .tab-item2{
        float:left;
        background-image:url("../assets/img/9_icon_order_grey.png");
        .px2rem(width,48);
        .px2rem(margin-right,153);
      }
      .tab-item3{
        float:left;
        background-image:url("../assets/img/10_icon_me_grey.png");
        .px2rem(width,48);

      }
    }
    /*background-img:url("")*/
    .tab {

      .px2rem(margin-bottom,10);
      display: flex;
      width: 100%;

      .tab-item {
        flex: 1;
        text-align: center;
        font-family: PingFangSC-Regular;
        font-size:11px;

        color: #A5A5A5;
        & > a {

          text-decoration: none;
          color: #A5A5A5;
        }
      }
    }
  }




</style>
