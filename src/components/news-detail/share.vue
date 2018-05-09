<template>
    <div class="shareIcon" :id="theme">
      <div class="no"></div>
      <div class="iconWrapper">
        <div class="icon">
          <div class="line1">
            <span class="icon1"></span>
            <span class="icon2"></span>
            <span class="icon3"></span>
          </div>
          <div class="line2">
            <span class="text1">微信</span>
            <span class="text1">朋友圈</span>
            <span class="text1">新浪微博</span>
          </div>
          <div class="line1">
            <span class="icon4"></span>
            <span class="icon5"></span>
            <span class="icon6"></span>
          </div>
          <div class="line2">
            <span class="text1">QQ</span>
            <span class="text1">敬请期待</span>
            <span class="text1">敬请期待</span>
          </div>
          <div class="white"></div>
        </div>
        <div class="del border-1px" @click="hideIcon"><p>取消</p></div>
      </div>
    </div>
</template>
    <script>
    	export default{
        data(){
          return{
            myShow:this.showIcon
          }
        },
        props:["showIcon"],
        methods:{
          hideIcon(){
            this.showIcon=!this.showIcon;
     
          }
        },
        watch:{
          showIcon(val){
            this.myShow=val;
          },
          myShow(val){
            this.$emit("on-change",val)
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
    .shareIcon{
	    position:fixed;
      top:0;
      left:0;
      z-index:100;
      width:100%;
      height:100%;
      background:@bg2;
      padding:0 15px 14px 15px;
      .no{
        height:431px;
      }
      .iconWrapper{
        width:100%;
        height:221px;
        background: @bg;
        border-radius: 6px;
        padding:0 10px;
        .icon{
          width:100%;
          .line1{
            padding:20px 28px 8px 29px;
            display:flex;
            text-align: center;
            .icon1{
              flex:1;
              height:40px;
              background:url(../../assets/img/20_share_wechat2.png)no-repeat center center;
              background-size:40px 40px;
            }
            .icon2{
              flex:1;
              background:url(../../assets/img/19_share_wechat.png)no-repeat center center;
              background-size:40px 40px;
            }
            .icon3{
              flex:1;
              background:url(../../assets/img/21_share_sina.png)no-repeat center center;
              background-size:40px 40px;
            }
            .icon4{
              flex:1;
              height:40px;
              background:url(../../assets/img/18_share_qq.png)no-repeat center center;
              background-size:40px 40px;
            }
            .icon5{
              flex:1;
              height:40px;
              width:40px;
              background:red;
              border-radius:20px;
              background:url()no-repeat center center;
              background-size:40px 40px;
            }
            .icon6{
              flex:1;
              background:url()no-repeat center center;
              background-size:40px 40px;
            }
          }
          .line2{
            padding:0 28px 0 29px ;
            display:flex;
            text-align:center;
            .text1{
              flex:1;
              font-family: PingFangSC-Regular;
              font-size: 12px;
              color: @88;
              letter-spacing: 0;
            }
          }
          .white{
            height:15px;
            width:100%;
          }
        }
        .del{
          width:100%;
          padding:15px 0 14px 0;
          text-align:center;
          .border-1px(@line);
          p{
            font-family: PingFangSC-Regular;
            font-size: 16px;
            color: @red;
          }
        }
      }
    }
#black{
  background:@bg2;
  .iconWrapper{
    background:@bg;
    .icon{
      .line1{
        .icon1{
          background:url(../../assets/img/49_dark_share_wechat.png)no-repeat center center;
              background-size:40px 40px;
        }
        .icon2{
          background:url(../../assets/img/50_dark_share_wechat.png)no-repeat center center;
              background-size:40px 40px;
        }
        .icon3{
          background:url(../../assets/img/51_dark_share_sina.png)no-repeat center center;
              background-size:40px 40px;
        }
        .icon4{
          background:url(../../assets/img/52_dark_share_qq.png)no-repeat center center;
              background-size:40px 40px;
        }
      }
      .line2{
        .text1{
          color:@b88;
        }
      }
    }
    .del{
      .border-1px(@bline);
      p{
        color:@red;
      }
    }
  }
}    
    </style>
