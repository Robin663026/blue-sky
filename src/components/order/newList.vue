<template>
<div class="title1 " >
  <div class="left">
      <div class="row1">
          <span>{{news.title}}</span>
      </div>
      <div class="row2">
          <span class="datetme">{{news.time|dateFormat}}</span>
          <span class="sour">{{news.source}}</span>
          <span class='none'>{{news.images[0].text}}</span>
          
      </div>
   </div>
   <div class="right" >

       <img v-lazy='news.images[0].text' width="100" height="75">
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
	      props:["news"],
        methods:{
          getImg(){
            for(let i=0;i<this.news.images.length;i++){
              if(this.news.images[i].type=='image'){
                if(i>0){
                  let temp;
                  temp=this.news.images[0];
                  this.news.images[0]=this.news.images[i];
                  this.news.images[i]=temp;
                }else{
                  return
                }
              }
            }
          }
        },
        mounted(){
          this.getImg();
          
        }
    }
</script>

<style lang="less">
 @import (reference)'../../assets/less/common';
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
            display:inline-block;
            height:12px;
            width:52px;
            overflow: hidden;
            font-family:PingFangSC-Regular;
            font-size: 11px;
            color: @light;
          }
          .none{
            display:none;
          }
        }
      }
      .right{
        
        float:left;
        flex:0 0 100px;
        padding-right:0px;
      }
    }     
</style>
