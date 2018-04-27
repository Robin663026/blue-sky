<template>
  <div class="me">
    <header></header>
    <div class="title">
      <span class="name">我的</span>
    </div>
    <div class="image border-1px">
      <img src="../../assets/img/23_img_login2.png" alt=""width="60"height="60">
    </div>
    <div class="collect">
      <div class="icon">
        <router-link to="/me/collects"><img src="../../assets/img/24_collection.png" alt=""width="55"height="55"></router-link>
      </div>
      <div class="history">收藏与历史</div>
    </div>
    <div class="white1"></div>
    <div class="model">
      <div class="message">
        <span class="message1" >消息通知</span>
        <span class="icon"><router-link to="/me/message"><img src="../../assets/img/4_icon_back.png" alt=""width="16"height="16"></router-link></span>

      </div>
      <div class="module border-1px" >
        <div  class="message">夜间模式</div>
        <div :class="{'white':true,'black':black}" @click="toggleModel">
          <span class="left"></span>
          <span class="right"></span>
        </div>
      </div>
    </div>
    <div class="white1"></div>
    <div class="about">
      <div class="about1">
        <span class="about2" >关于</span>

        <span class="icon" @click="judge" >

          <router-link to="/me/about" v-if="showflag" ><img src="../../assets/img/4_icon_back.png" alt=""width="16"height="16"></router-link>
          <router-link  v-else to="/me/about1"><img src="../../assets/img/4_icon_back.png" alt=""width="16"height="16"></router-link>
        </span>
      </div>
      <div class="thumb border-1px">
        <span class="thumb1">赞过的</span>
        <span class="icon"><router-link to="/me/comments"><img  src="../../assets/img/4_icon_back.png" alt=""width="16"height="16"></router-link></span>
      </div>
      <div class="now border-1px">
        <span class="now1">当前版本</span>
        <span class="now2">1.0</span>
      </div>
    </div>
    <div class="white2"></div>
    <v-footer></v-footer>

    <keep-alive >
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import footer from '../footer/footer.vue'

    export default {

        data() {
            return {
              showflag:false,
              black:false
            }
        },
      methods:{
        addDarkTheme(){
          var link = document.createElement('link');
          link.type = 'text/css';
          link.id = "theme-css-dark";  // 加上id方便后面好查找到进行删除
          link.rel = 'stylesheet';
          link.href = '/css/nutzbs_dark.css';
          document.getElementsByTagName("head")[0].appendChild(link);
        },
        judge(){
          if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))){
            this.showflag=true;
          }else{
            this.showflag=false;
          }
        },
        toggleModel(){
          this.black=!this.black;
        }
      },
//      created(){
//          this.judge();
//      },
      mounted(){
        this.judge();
      },
      components: {
        'v-footer': footer
      }

    }
</script>

<style lang="less">
  @import '../../assets/css/border-1px';
  @import '../../assets/css/common';
.me{
  position:absolute;
  top: 0;
  bottom:0px;
  left:0;
  width:100%;
  height:667px;
  background: @bg;
  header{
    height:20px;
    background:rgba(0,0,0,0.00);
  }
  .title{
    width:100%;
    height:45px;
    padding:15px 0px 14px 0;
    text-align:center;
    .name{
      font-family: PingFangSC-Semibold;
      font-size: 16px;
      color: @33;
    }

  }
  .image{
    padding:40px 0 105px 0;
    text-align:center;
    background-image:url('../../assets/img/22_img_login.png') ;
    .border-1px(@line);
  }
  .collect{
    padding:1px 0 20px 0;
    height:93px;
    width:100%;
    text-align:center;
    .icon{
      padding-bottom:5px;
    }
    .history{
      font-family:PingFangSC-Regular;
      font-size: 12px;
      color: @33;
    }
  }
  .model{
    height:91px;
    width: 100%;
    padding-left:51px;
    .message{
      padding:15px 0 16px 0;
      font-size:0;
      display:flex;
      .message1{
        flex:1;
        display:inline-block;
        vertical-align: top;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: @33;
      }
      .icon{
        flex:0 0 20px;
        display:inline-block;
        vertical-align: top;
        padding:0 236px 0 15px;
        transform: rotate(180deg);
        color:@light;
      }

    }
    .module{
      font-size:0;
      .border-1px(@line);
      display:flex;
      .message{
        flex:1;
        display:inline-block;
        vertical-align: top;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: @33;
      }
      .white{
        flex:0 0 20px;
        display:inline-block;
        vertical-align: top;
        padding:0 225px 0 15px;
        width:25px;
        background: @light;
        border-radius: 9px;
        .left{
          display:inline-block;
          vertical-align: top;
          width:13px;
        }
        .right{
          display:inline-block;
          vertical-align: top;
        }
      }
      .black{
        flex:0 0 20px;
        display:inline-block;
        vertical-align: top;
        padding:0 225px 0 15px;
        width:25px;
        background: #4FD262;
        border-radius: 9px;
        .left{
          display:inline-block;
          vertical-align: top;

        }
        .right{
          display:inline-block;
          vertical-align: top;
        }
      }
    }
  }
  .white1{
    height:5px;
    width:100%;
    background:@input;
  }
  .about{
    height:137px;
    width: 100%;
    padding-left:51px;
    
    .about1{
      display:flex;
      padding:15px 0 16px 0;
      font-size:0;
      .about2{
        flex:1;
        display:inline-block;
        vertical-align: top;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: @33;
      }
      .icon{
        flex:0 0 20px;
        display:inline-block;
        vertical-align: top;
        padding:0 265px 0 15px;
        transform: rotate(180deg);
        color:@light;
      }
    }
    .thumb{
      padding:15px 0 16px 0;
      width:100%;
      font-size:0;
      display:flex;
      .border-1px(@line);
      .thumb1{
        flex:1;
        display:inline-block;
        vertical-align: top;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: @33;
      }
      .icon{
        flex:0 0 20px;
        display:inline-block;
        vertical-align: top;
        padding:0 250px 0 15px;
        transform: rotate(180deg);
        color:@light;
      }
    }
    .now{
      font-size:0;
      padding:15px 0 16px 0;
      width:100%;
      .border-1px(@line);
      display:flex;
      .now1{
        flex:1;
        display:inline-block;
        vertical-align: top;
        padding:0 233px 15px 0;
        font-family: PingFangSC-Regular;
        font-size: 14px;

        color: @33;
      }
      .now2{
        flex: 0 0 20px;
        text-align:center;
        display:inline-block;
        vertical-align: top;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        padding-right:15px;
        color: @33;
      }
    }
  }

  .white2{
    height:16px;
    width:100%;
    background:@input;
  }
}
</style>
