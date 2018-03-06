<template>
  <div class="cmessage" >
    <header></header>
    <div class="wrapper">
      <div class="icon"><router-link to="/me"><img src="../../../assets/img/4_icon_back.png" alt=""width="16"height="16"></router-link></div>
      <div class="text">消息通知</div>
    </div>
    <div class="content">
      <div class="list">
        <span class="icon"><img src="../../../assets/img/27-女头像.png" alt=""width="32" height="32"></span>
        <span class="middle">
            <div class="name">蓝小穹</div>
            <div class="message">欢迎使用蓝穹APP阅读时事金融新闻，一手掌握最新金融资讯</div>
            <div class="time">11-20</div>
          </span>

      </div>

    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import footer from '../../footer/footer.vue'
    export default {
        data() {
            return {}
        },
      components:{
          'v-footer':footer
      }
    }
</script>

<style lang="less">
  .cmessage{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:667px;
    z-index:100;
    background:#fff;
    header{
      height:20px;

    }
    .wrapper{
      position:relative;
      height:45px;
      width:100%;
      padding:15px 0;
      text-align: center;
      .text{
        font-family:PingFangSC-Semibold;
        font-size: 16px;
        color: #333333;
      }
      .icon{
        position:absolute;
        top:15px;
        left:15px;
      }
    }
    .content{
      height:600px;
      width:100%;
      .list{
        position:relative;
        height:71px;
        width:100%;
        padding:10px 15px;
        .icon{
          display:inline-block;
          vertical-align: top;
          padding:0 0px 17px 0;
          width:47px;
        }
        .middle{
          display:inline-block;
          vertical-align: top;
          width:285px;
          .name{
            font-family:PingFangSC-Regular;
            font-size: 14px;
            color: #333333;
          }
          .text{
            font-family:PingFangSC-Regular;
            font-size: 11px;
            color: #888888;
          }
          .time{
            position:absolute;
            top:10px;
            right:15px;
            font-family: PingFangSC-Regular;
            font-size: 11px;
            color: #A5A5A5;
          }
        }
      }


    }

  }
</style>
