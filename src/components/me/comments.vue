<template>
  <div class="commentsDetail" :id="theme">
    <header></header>
    <div class="title border-1px">
      <router-link to="/me"><div class="icon1"></div></router-link>
      <span class="text"><p>赞过的评论</p></span>
    </div>
    <div class="ccontents ">
      <div class="list border-1px">
        <span class="icon"><img src="../../assets/img/16_img_54X54.png" alt=""width="27" height="27"></span>
        <span class="content">
          <div class="name">甲甲甲11</div>
          <div class="text">
              谷歌官方出品超轻量人工智能时代的创造造谷歌官方出品超轻量人工智能时代的创造造谷歌官方出品超轻量人工智能时代的创造造
          </div>
        </span>
      </div>
      <div class="mention">
        <p>已显示全部内容</p>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        data() {
            return {
              showC:false
            }
        },
      methods:{
          show(){
            this.showC=true
          },
          hide(){
            this.showC=false
        }
      },
      computed:{
      	theme(){
        	return this.$store.state.theme
        }
      }
    }
</script>

<style lang="less">
 @import (reference)'../../assets/less/common';
.commentsDetail{
  position:fixed;
  top:0;
  left:0;
  bottom:0;
  width:100%;
  height:667px;
  background: @bg;
  header{
    height:20px;
    background:rgba(0,0,0,0.00);
  }

  .title{
    border-bottom:1px solid @line;
    position:relative;
    height:45px;
    width:100%;
    padding:15px 0 14px 0;
    .icon1{
      position:absolute;
      left:15px;
      top:15px;
      width:16px;
      height:16px;
      background:url(../../assets/img/4_icon_back.png)no-repeat center center;
      background-size:16px 16px;

    }
    .text{
      text-align:center;
      vertical-align: top;
      display:inline-block;
      p{
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: @33;
      }
    }
  }
  .ccontents{
    position:fixed;
    top:65px;
    bottom:50px;
    width:100%;
    overflow:auto;
    background:@bbg;
    .list {
      width: 100%;
      display: inline-block;
      vertical-align: top;
      display:flex;
      .icon{
        float:left;
        flex: 0 0 50px;
        width:50px;
        padding:16px 7px 0 16px;
      }
      .content{
        flex:1;
        float:left;
        .name{
          height:38px;
          padding-top:15px;
          font-family: PingFangSC-Semibold;
          font-size: 13px;
          color: @33;
        }
        .text{
          padding-right:14px;
          font-family: PingFangSC-Regular;
          font-size: 16px;
          color: @33;
          letter-spacing: 0.35px;
          line-height: 25px;
        }
      }

    }
    .mention{
      background:@bbg;
      width:100%;
      padding-top:15px;
      text-align:center;
      p{
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: @light;
      }
    } 
  }



}
#black{
  position:fixed;
  top:0;
  left:0;
  bottom:0;
  width:100%;
  height:667px;
  background: @bbg;
  header{
    height:20px;
    background:@bg;
  }
  .title{
    border-bottom:1px solid @bline;
    position:relative;
    height:45px;
    width:100%;
    padding:15px 0 14px 0;
    .icon{
      position:absolute;
      left:15px;
      top:15px;
      width:16px;
      height:16px;
      background:url(../../assets/img/48_dark_back.png)no-repeat center center;
      background-size:16px 16px;
    }
    .text{
      text-align:center;
      vertical-align: top;
      display:inline-block;
      p{
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: @b33;
      }
    }
  }
  .list {
    width: 100%;
    display: inline-block;
    vertical-align: top;
    display:flex;
    .icon{
      float:left;
      flex: 0 0 50px;
      width:50px;
      padding:16px 7px 0 16px;
    }
    .content{
      flex:1;
      float:left;
      .name{
        height:38px;
        padding-top:15px;
        font-family: PingFangSC-Semibold;
        font-size: 13px;
        color: @b33;
      }
      .text{
        padding-right:14px;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: @b33;
        letter-spacing: 0.35px;
        line-height: 25px;
      }
    }

  }
  .mention{
    width:100%;
    padding-top:15px;
    text-align:center;
    p{
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: @blight;
    }
  }


}
</style>
