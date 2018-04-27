<template>
<div class="title1 ">
  <div class="left">
      <div class="row1">
          <span>{{news.title}}</span>
      </div>
      <div class="row2">
          <span class="datetme">{{news.time|dateFormat}}</span>
          <span class="sour">{{news.source}}</span>
          <span class="comments_img"><img src="../../assets/img/5_icon_comment.png" alt=""width="11"height="11"></span>
          <span class="comment" v-if="news.lengthC<=999">{{news.lengthC}}</span>
          <span class="comment1" v-else>999<span class="plus">+</span></span>
          <span class="thumbUp"><img src="../../assets/img/6_icon_good.png" alt=""alt=""width="11"height="11"></span>
          <span class="like" v-if="news.lengthC<=999">{{news.lengthC}}</span>
          <span class="like1" v-else>999<span class="plus">+</span></span>
      </div>
   </div>
   <div class="right" >

       <img v-lazy='news.images' width="100" height="75">
   </div>
</div>
</template>

<script>
import moment from 'moment'
    export default {
        data() {
            return {}
        },
        filters: {
	      dateFormat (time) {
	        return moment(time).startOf('mimute').fromNow()
	      }
	    },
	    props:["news"]
    }
</script>

<style lang="less">
 @import '../../assets/css/common';
    .title1{
      height:115px;
      width:100%;
      display:flex;
      padding:20px 0;
      
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
        
          .thumbUp{
            padding-right:1px;
          }
          .like{
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
</style>
