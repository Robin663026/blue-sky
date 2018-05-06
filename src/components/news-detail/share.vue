<template>
    <div class="shareIcon" :id="theme">
      <div class="no"></div>
      <div class="iconWrapper">
        <div class="icon">
          <div class="line1">
            <span class="icon"><img src="../../assets/img/20_share_wechat2.png" alt=""width="40"height="40"></span>
            <span class="icon"><img src="../../assets/img/19_share_wechat.png" alt=""width="40"height="40"></span>
            <span class="icon"><img src="../../assets/img/21_share_sina.png" alt=""width="40"height="40"></span>
          </div>
          <div class="line2">
            <span class="text1">微信</span>
            <span class="text1">朋友圈</span>
            <span class="text1">新浪微博</span>
          </div>
          <div class="line1">
            <span class="icon"><img src="../../assets/img/18_share_qq.png" alt=""width="40"height="40"></span>
            <span class="icon"></span>
            <span class="icon"></span>
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
        }
      }
    </script>
    <style lang="less">
  @import (reference)'../../assets/css/common';
    .shareIcon{
	    position:fixed;
      top:0;
      left:0;
      z-index:100;
      width:100%;
      height:100%;
      background:rgba(0,0,0,0.50);
      padding:0 15px 14px 15px;
      .no{
        height:431px;
      }
      .iconWrapper{
        width:100%;
        height:221px;
        background: #FFFFFF;
        border-radius: 6px;
        padding:0 10px;
        .icon{
          width:100%;
          .line1{
            padding:20px 28px 8px 29px;
            display:flex;
            text-align: center;
            .icon{
              flex:1;
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
              color: #888888;
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
            color: #FF0000;
          }
        }
      }
    }
    </style>
