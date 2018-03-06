<template>
  <div class="commentsDetail" >
    <header></header>
    <div class="title">
      <span class="icon"><router-link to="/me"><img src="../../assets/img/4_icon_back.png" alt=""width="16"height="16"></router-link></span>
      <span class="text"><p>赞过的评论</p></span>
    </div>
    <div class="contents ">
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
      }
    }
</script>

<style lang="less">
.commentsDetail{

  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:667px;
  background: #ffffff;
  header{
    height:20px;
    background:white;
  }
  .title{
    position:relative;
    height:45px;
    width:100%;
    padding:15px 0 14px 0;
    .icon{
      position:absolute;
      top:15px;
      left:15px;
    }
    .text{
      text-align:center;
      vertical-align: top;
      display:inline-block;
      p{
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: #333333;
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
        color: #333333;
      }
      .text{
        padding-right:14px;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #333333;
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
      color: #A5A5A5;
    }
  }


}
</style>
