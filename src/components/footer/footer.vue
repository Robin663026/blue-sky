<template>
  <div class="bottomB border-1px" >
    <div class="tab-image">
      <div class="tab-item ">
        <router-link  to="/news" class="tab-item1 ">
          <div class="icon_1"></div>
        </router-link>
      </div>
      <div class="tab-item ">
        <router-link  to="/order" class="tab-item1">
          <div class=" icon_2"></div>
        </router-link>
      </div>
      <div class="tab-item ">
        <router-link  to="/me" class="tab-item1 ">
          <div class="icon_3"></div>
        </router-link>
      </div>
    </div>
    <div class="tab-wrapper">
      <div class="tab-item "><router-link  to="/news">新闻</router-link></div>
      <div class="tab-item "><router-link to="/order">订阅</router-link></div>
      <div class="tab-item " ><router-link to="/me">我</router-link></div>
    </div>

  </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        computed:{
          theme(){
            return this.$store.state.theme
          }
        }
    }
</script>

<style lang="less">
  @import (reference)'../../assets/css/common';
  .bottomB {
    position:fixed;
    bottom:0px;
    left:0px;
    width: 100%;
    padding: 7px 39px 5px 39px;
    height: 50px;
    z-index:200;
    .border-1px(bc);
    .tab-image {
      display: flex;
      height: 24px;
      line-height: 24px;
      .tab-item {
        flex: 1;

        text-align: center;
        .tab-item1{
          display:inline-block;

          width:90px;
          height:30px;
          .icon_1{
            height:30px;
            background:url(../../assets/img/8_icon_news_grey.png) no-repeat center center;

            background-size:24px 24px;
          }
          .icon_2{
            height:30px;
            background:url(../../assets/img/9_icon_order_grey.png) no-repeat center center;
            background-size:24px 24px;
          }
          .icon_3{
            height:30px;
            background:url(../../assets/img/10_icon_me_grey.png) no-repeat center center;
            background-size:24px 24px;
          }

        }

        .router-link-exact-active{

          .icon_1{
            height:30px;
            background:url(../../assets/img/8_icon_news_blue.png) no-repeat center center;

            background-size:24px 24px;
          }
          .icon_2{
            height:30px;
            background:url(../../assets/img/9_icon_order_blue.png) no-repeat center center;
            background-size:24px 24px;
          }
          .icon_3{
            height:30px;
            background:url(../../assets/img/10_icon_me_blue.png) no-repeat center center;
            background-size:24px 24px;
          }
        }
      }

    }
    .tab-wrapper {
      display: flex;
      padding-top: 3px;
      height: 11px;
      line-height: 11px;
      font-size: 0;
      .tab-item {
        flex: 1;
        text-align: center;
        font-size: 11px;
        color: @tab;
        font-family: PingFangSC-Regular;
        &>a {
          text-decoration: none;
          &.active {
            color: @tab1;
          }
        }
      }
    }
  }


</style>
