<template>
<div class="collectDetail"  >
  <header></header>
  <div class="title">
    <span class="icon"><router-link to="/me"><img src="../../../assets/img/4_icon_back.png" alt=""width="16" height="16"></router-link></span>
    <span class="collects">收藏</span>
    <span class="history">历史</span>
    <span class="edit" ><router-link to="/me/collects/editC">编辑</router-link></span>
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
                <span class="comments_img"><img src="../../../assets/img/5_icon_comment.png" alt=""width="11"height="11"></span>
                <span class="comment" v-if="news.comments.count<=999">{{news.comments.count}}</span>
                <span class="comment" v-else>999</span>
                <span class="thumbUp"><img src="../../../assets/img/6_icon_good.png" alt=""alt=""width="11"height="11"></span>
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
              <span class="comments_img"><img src="../../../assets/img/5_icon_comment.png" alt=""width="11"height="11"></span>
              <span class="comment" v-if="news.comments.count<=999">{{news.comments.count}}</span>
              <span class="comment" v-else>999</span>
              <span class="thumbUp"><img src="../../../assets/img/6_icon_good.png" alt=""alt=""width="11"height="11"></span>
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
  <keep-alive >
    <router-view></router-view>
  </keep-alive>
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
  @import '../../../assets/css/common';
.collectDetail{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background: #ffffff;
  .title{
    height:45px;
    padding:15px 15px 14px 15px;
    .icon{
      display:inline-block;
      vertical-align: top;
      padding-right:113px;
    }
    .collects{
      display:inline-block;
      vertical-align: top;
      padding-right:25px;
      font-family: PingFangSC-Semibold;
      font-size: 16px;
      color: #A2A4A6;
    }
    .history{
      display:inline-block;
      vertical-align: top;
      padding:1px 80px 1px 0px;
      font-family: PingFangSC-Semibold;
      font-size: 14px;
      color: #6F7379;
    }
    .edit{
      display:inline-block;
      vertical-align: top;
      padding:1px 0px ;
      font-family: PingFangSC-Semibold;
      font-size: 14px;
      color: #6F7379;
    }
    .line{
      padding-right:151px;
      width:20px;
      height:4px;
      background: #A2A4A6;
    }
  }
  .contents{
    width:100%;
    .mention{
      text-align:center;
      padding-top:15px;
      height:29px;
      width:100%;
      .text{
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #A5A5A5;
      }

    }
  }
}
</style>
