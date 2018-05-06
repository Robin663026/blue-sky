<template>
<div >
	<div v-if="news.image.position==='right'" class="title1 border-1px" >
    <div class="left">
      <div class="row1">
        <span>{{news.titile}}</span>
      </div>
      <div class="row2">
        <span v-if="news.top===true" class="top" >置顶</span>
        <span class="datetme">{{news.dateTme|dateFormat}}</span>
        <span class="sour">{{news.source}}</span>
        <span class="comments_img"><img src="../../assets/img/5_icon_comment.png" alt=""width="11"height="11"></span>
        <span class="comment" v-if="news.comments[0].count<=999">{{news.comments[0].count}}</span>
        <span class="comment1 " v-else>999<span class="plus">+</span></span>
        <span class="thumbUp"><img src="../../assets/img/6_icon_good.png" alt=""alt=""width="11"height="11"></span>
        <span class="like" v-if="news.comments[0].thumbUP<=999">{{news.comments[0].thumbUP}}</span>
        <span class="like1" v-else>
          999
          <span class="plus">+</span>
        </span>
        
      </div>
    </div>
    <div class="right">
      <img v-lazy="news.image.url" width="100" height="75">
    </div>
  </div>
  <div v-else class="title2 border-1px">
    <div class="top">
      {{news.titile}}
    </div>
    <div class="middle"><img v-lazy="news.image.url"width="325"height="135"></div>
    <div class="bottom1">
      <span v-if="news.top===true" class="top" >置顶</span>
      <span class="datetme">{{news.dateTme|dateFormat}}</span>
      <span class="sour">{{news.source}}</span>
      <span class="comments_img"><img src="../../assets/img/5_icon_comment.png" alt=""width="11"height="11"></span>
      <span class="comment" v-if="news.comments[0].count<=999">{{news.comments[0].count}}</span>
      <span class="comment1" v-else>999<span class="plus">+</span></span>
      <span class="thumbUp"><img src="../../assets/img/6_icon_good.png" alt=""alt=""width="11"height="11"></span>
      <span class="like" v-if="news.comments[0].thumbUP<=999">{{news.comments[0].thumbUP}}</span>
      <span class="like1" v-else>999<span class="plus">+</span></span>
      
    </div>
  </div>
</div>
</template>

<script>
import moment from 'moment'
    export default {
        data() {
            return {}
        },
        props:["news"],
    	  filters: {
    	    dateFormat (time) {
    	      return moment(time).startOf('mimute').fromNow()
    	    }
    	  },
        computed:{
        
        }
        
    }
</script>

<style lang="less">
  @import (reference)'../../assets/css/common';
    .title1{
      height:115px;
      width:100%;
      display:flex;
      padding:20px 0;
      .border-1px(@line);
      border-bottom:1px solid @line;
      .left{
        float:left;
        flex:1;
        padding-right:18px;
        .row1{
          height:42px;
          overflow:hidden;
          font-family:PingFangSC-Semibold;
          font-size: 16px;
          color: @33;
          line-height: 21px;
        }
        .row2{
          margin-top:18px;
          height:11px;
          display:inline-block;
          vertical-align:top;
          .top{ 
            width:17px;
            padding-right:2px;
            font-family:PingFangSC-Regular;
            font-size: 8px;
            color: @red;
          }
          .datetme{
            width:45px;
            overflow:hidden;
            font-family:PingFangSC-Regular;
            font-size: 11px;
            color: @light;
          }
          .sour{
            width:45px;
            overflow: hidden;
            font-family:PingFangSC-Regular;
            font-size: 11px;
            color: @light;
          }
          .comments_img{
            padding-right:1px;
          }
          .comment{
            width:20px;
            font-family: PingFangSC-Regular;
            font-size: 11px;
            color: @light;
          }
          .comment1{
            width:20px;
            font-family: PingFangSC-Regular;
            font-size: 11px;
            color: @light;
          }

          .thumbUp{
            padding-right:1px;
          }
          .like{
            width:20px;
            font-family: PingFangSC-Regular;
            font-size: 11px;
            color: @light;
          }
          .like1{
            width:20px;
            font-family: PingFangSC-Regular;
            font-size: 11px;
            color: @light;
          }
          

        }
      }
      .right{
        float:left;
        flex:0 0 100px;
        padding-right:15px;
      }
    }

   .title2 {
      width:100%;
      height:220px;
      padding:20px 15px 20px 0;
      .border-1px(@line);
      border-bottom:1px solid @line;
      .top{
        height:16px;
        overflow:hidden;
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: @33;
        margin-bottom:10px;
      }
      .middle{
        height:135px;
        text-align:center;
        margin-bottom:14px;
      }
      .bottom1{
      
        height:11px;
        display:inline-block;
        vertical-align:top;
        font-size:0;
        
        .top{
     
          padding-right:2px;
          font-family:PingFangSC-Regular;
          font-size: 8px;
          color: @red;
        }
        .datetme{
         
    
          padding-right:5px;
          font-family:PingFangSC-Regular;
          font-size: 11px;
          color: @light;
        }
        .sour{
        
          display:inline-block;
          width:65px;
          padding-right:10px;
          height:11px;
          overflow: hidden;
          font-family:PingFangSC-Regular;
          font-size: 11px;
          color: @light;
        }
        .comments_img{
         
          padding-right:1px;
        }
        .comment{
         
          padding-right:12px;
          font-family: PingFangSC-Regular;
          font-size: 11px;
          color:@light;
        }
        .comment1{
         
          width:20px;
          font-family: PingFangSC-Regular;
          font-size: 11px;
          color: @light;
        }
        .thumbUp{
          
          padding-right:1px;
        }
        .like{
         
          padding-right:12px;
          font-family: PingFangSC-Regular;
          font-size: 11px;
          color: @light;
        }
        .like1{
         
          width:20px;
          font-family: PingFangSC-Regular;
          font-size: 11px;
          color: @light;
        }

      }


    }
  
</style>
