<template>
  <div class="main">
  <div class="tab1">
    <div class="tab-item1 ">
      <router-link class="change1" to="/news"><img src="../assets/img/8_icon_news_blue.png" alt=""></router-link>
    </div>
    <div class="tab-item2">
      <router-link class='change2' to="/order"><img src="../assets/img/9_icon_order_grey.png" alt=""></router-link>
    </div>
    <div class="tab-item3">
      <router-link class='change3' to="/me"><img src="../assets/img/10_icon_me_grey.png" alt=""></router-link>
    </div>
  </div>
  <div class="tab">
    <div class="tab-item4"><router-link  to="/news">新闻</router-link></div>
    <div class="tab-item5"><router-link to="/order">订阅</router-link></div>
    <div class="tab-item6"><router-link to="/me">我</router-link></div>
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

<style  scoped lang="less">
  @import '../assets/css/common.less';
  @import '../assets/css/border-1px.less';
  .main {

    .border-1px(#E2E4E6);
    .px2rem(height, 101);
    width:100%;

    .tab1 {
      .px2rem(margin-top, 14);
      .px2rem(margin-bottom, 6);
      .px2rem(margin-left, 146);
      .px2rem(margin-right, 150);
      .px2rem(height, 48);

      .tab-item1 {
        float: left;
        .px2rem(width, 48);
        .px2rem(margin-right, 157);
      }
      .tab-item2 {
        float: left;
        .px2rem(width, 48);
        .px2rem(margin-right, 153);
      }
      .tab-item3 {
        float: left;
        .px2rem(width, 48);
      }
    }

    .tab {
      .px2rem(margin-bottom, 10);
      .px2rem(margin-left, 148);
      .px2rem(margin-right, 162);
      .px2rem(height, 22);

      .tab-item4 {
        float: left;
        .px2rem(width, 45);
        .px2rem(margin-right, 160);
        font-family: PingFang Regular;
        .px2px(font-size, 22);
        color: #A5A5A5;
        a {
          text-decoration: none;
          &:hover {
            color: #A5A5A5;
          }
        }
      }

      .tab-item5 {
        float: left;
        .px2rem(width, 45);
        .px2rem(margin-right, 167);
        font-family: PingFang Regular;

        .px2px(font-size, 22);
        color: #A5A5A5;
        a {
          text-decoration: none;
          &:hover {
            color: #A5A5A5;
          }
        }
      }

      .tab-item6 {
        float: left;
        .px2rem(width, 23);
        font-family: PingFang Regular;

        .px2px(font-size, 22);
        color: #A5A5A5;
        a {
          text-decoration: none;
          &:hover {
            color: #A5A5A5;
          }
        }
      }
    }
  }

</style>
