<template>
  <div class="editCollect" >
    <header></header>
    <div class="title">
      <span class="icon"><img src="../../assets/img/4_icon_back.png" alt=""width="16" height="16" @click="hide"></span>
      <span class="collects">收藏</span>
      <span class="history">历史</span>
      <span class="del"><router-link to="/me/collects">取消</router-link></span>
      <div class="line"></div>
    </div>
    <div class="content">
      <div  v-if="contents">
        <ul>
          <li v-for="news in contents" class="detail">
            <div v-if="news.image.position==='right'" class="title1 border-1px">
              <div class="left">
                <div class="row1">
                  <span>{{news.titile}}</span>
                </div>
                <div class="row2">
            <span v-if="news.top===true" class="top" >
              置顶
            </span>
                  <span class="datetme">123</span>
                  <span class="source">{{news.source}}</span>
                  <span class="comments_img"><img src="../../assets/img/5_icon_comment.png" alt=""width="11"height="11"></span>
                  <span class="comment" v-if="news.comments.count<=999">{{news.comments.count}}</span>
                  <span class="comment" v-else>999</span>
                  <span class="thumbUp"><img src="../../assets/img/6_icon_good.png" alt=""alt=""width="11"height="11"></span>
                  <span class="like" v-if="news.comments.thumbUp<=999">{{news.comments.thumbUp}}</span>
                  <span class="like" v-else>999</span>
                </div>
              </div>
              <div class="right">
                <img :src="news.image.url" width="100" height="75">
              </div>
            </div>
            <div v-else class="title2 ">
              <div class="top">
                <span>{{news.titile}}</span>
              </div>
              <div class="middle"><img :src="news.image.url"width="345"height="135"></div>
              <div class="bottom">
            <span v-if="news.top===true" class="top" >
              置顶
            </span>
                <span class="datetme">123</span>
                <span class="source">123</span>
                <span class="comments_img"><img src="../../assets/img/5_icon_comment.png" alt=""width="11"height="11"></span>
                <span class="comment" v-if="news.comments.count<=999">{{news.comments.count}}</span>
                <span class="comment" v-else>999</span>
                <span class="thumbUp"><img src="../../assets/img/6_icon_good.png" alt=""alt=""width="11"height="11"></span>
                <span class="like" v-if="news.comments.thumbUp<=999">{{news.comments.thumbUp}}</span>
                <span class="like" v-else>999</span>
              </div>
            </div>
          </li>
        </ul>
        <div class="mention"><p class="text">已显示全部内容</p></div>
      </div>
      <div v-else>
        <p>还没有收藏新闻，快去收藏吧</p>
      </div>
  </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
              contents:true
            }
        },
      methods:{

      }
    }
</script>

<style lang="less">
@import '../../assets/css/common';
  .editCollect{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:667px;
    background:#fff;
    .title{
      display:flex;
      height:45px;
      padding:15px 15px 14px 15px;
      .icon{
        flex:0 0 24px;
        display:inline-block;
        vertical-align: top;
        /*padding-right:113px;*/
      }
      .collects{
        flex:1;
        display:inline-block;
        vertical-align: top;
        padding-right:25px;
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: @blue;
      }
      .history{
        flex:1;
        /*display:inline-block;*/
        vertical-align: top;
        padding:1px 80px 1px 0px;
        font-family: PingFangSC-Semibold;
        font-size: 14px;
        color: @light;
      }
      .del{
        flex:0 0 25px;
        /*display:inline-block;*/
        vertical-align: top;
        padding:1px 0px ;
        font-family: PingFangSC-Semibold;
        font-size: 14px;
        color: @33;
      }
      .line{
        padding-right:151px;
        width:20px;
        height:4px;
        background: @blue;
      }
    }
  }
</style>
