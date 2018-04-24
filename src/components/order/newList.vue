<template>
<div class="title1 border-1px">
  <div class="left">
      <div class="row1">
          <span>{{news.title}}</span>
      </div>
      <div class="row2">
          <span class="datetme">{{news.time|dateFormat}}</span>
          <span class="sour">{{news.source}}</span>
          <span class="comments_img"><img src="../../assets/img/5_icon_comment.png" alt=""width="11"height="11"></span>
          <span class="comment" v-if="news.lengthC<=999">{{news.lengthC}}</span>
          <span class="comment" v-else>999</span>
          <span class="thumbUp"><img src="../../assets/img/6_icon_good.png" alt=""alt=""width="11"height="11"></span>
          <span class="like" v-if="news.lengthC<=999">{{news.lengthC}}</span>
          <span class="like" v-else>999</span>
      </div>
   </div>
   <!-- <div class="right">
       <img v-lazy='news.img[0].text' width="100" height="75">
   </div> -->
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
        .border-1px(@line);

        .left{
          float:left;
          flex:1;
          padding-right:18px;
          width:230px;
          .row1{
            height:42px;
            overflow:hidden;
            font-family:PingFangSC-Semibold;
            font-size: 16px;
            color: @33;
            line-height: 21px;
          }
          .row2{

            padding-top:22px;
            height:11px;
            display:inline-block;
            vertical-align:top;
            .top{

              padding-right:2px;
              font-family:PingFangSC-Regular;
              font-size: 8px;
              color: @red;
            }
            .datetme{
              padding-right:5px;
              width:45px;
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

          }
        }
        .right{
          float:left;
          flex:0 0 100px;

        }
      }
</style>
