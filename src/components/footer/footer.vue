<template>
  <div class="bottomB border-1px">
    <div class="tab-image">
      <div class="tab-item item1">
        <router-link class="" to="/news"><img  src="../../assets/img/8_icon_news_grey.png" width="24" height="24"></router-link>
      </div>
      <div class="tab-item item2">
        <router-link  to="/order"><img  src="../../assets/img/9_icon_order_grey.png" alt=""width="24" height="24"></router-link>
      </div>
      <div class="tab-item item3">
        <router-link  to="/me"><img  src="../../assets/img/10_icon_me_grey.png" alt=""width="24" height="24"></router-link>
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
        }
    }
</script>

<style lang="less">
  @import '../../assets/css/common';
  .bottomB {
    position:fixed;
    bottom:0px;
    left:0px;

    width: 100%;
    padding: 7px 39px 5px 39px;
    height: 50px;
    .border-1px(#E2E4E6);
    .tab-image {
      display: flex;
      height: 24px;
      line-height: 24px;
      .tab-item {
        flex: 1;
        text-align: center;



      }
      .item1{
        &>a{
          &.active{
            image: url("../../assets/img/8_icon_news_blue.png");
          }
        }
      }
      .item2{
        &>a{
          &.active{
            image: url("../../assets/img/9_icon_order_blue.png");
          }
        }
      }
      .item3{
        &>a{
          &.active{
            image: url("../../assets/img/10_icon_me_blue.png");
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
        color: #A5A5A5;
        font-family: PingFangSC-Regular;
        & > a {
          text-decoration: none;
          &.active {
            color: #333333
          }
        }
      }
    }
  }


</style>
