<template>
	 <div class="seeComment" v-show="showComment">
      <div class="backs "@click="hideComment"><img src="../../assets/img/4_icon_back.png" alt=""width="16"height="16"></div>
      <div class="commentCon border-1px">
        <div class="title">{{article.title}}</div>
        <div class="wrapper">
          <span class="time">{{article.time|dateFormat}}</span>
          <span class="top">{{article.source}}</span>
        </div>
        <div class="num">全部评论（{{article.comment.length}}）</div>
        <div class="detail" v-if="article.comment.length>0">
          <div class="one border-1px "  >
            <ul>
              <li v-for="cmt in article.comment ">
                <div class="icon">
                  <img :src="cmt.icon" alt=""width="27"height="27">
                </div>
                <div class="content33 border-1px">
                  <div class="line1">
                    <span class="name">{{cmt.name}}</span>
                    <span class="num">{{cmt.thumbUp}}</span>
                    <span class="thum" @click="thum" v-if="thumb=true"><img src="../../assets/img/6_icon_good2.png" width="13" height="13"></span>
                    <span class="thum" @click="thum" v-else><img src="../../assets/img/6_icon_good.png"width="13" height="13" ></span>
                  </div>
                  <div class="text33">{{cmt.text}}</div>
                  <div class="time">{{cmt.dateTime|dateFormat}}</div>
                </div>
              </li>
            </ul>

          </div>
        </div>
        <div class="detail2" v-else>
          <img src="../../assets/img/56_no_comment.png" alt=""width="150"height="145">
          <div class="text44">暂无评论</div>
        </div>
        <div class="bottom">
          <div class="left">
            <span class="icon"><img src="../../assets/img/12_write_comment.png" alt=""width="20"height="20"></span>
            <span class="write" @click="writeComment">写评论</span>
          </div>
          <div class="right">
            <span class="comment"><img src="../../assets/img/17_backnews.png" alt=""width="20"height="20"@click="hideComment"></span>
            <span class="back" @click="hideComment">正文</span>
            <span class="share"><img src="../../assets/img/13_share.png" alt=""width="20"height="20" @click="shareIcon"></span>

          </div>
        </div>
      </div>
    </div>
</template>
<script>
import moment from 'moment'
	export default{
		filters: {
	      dateFormat (time) {
	        return moment(time).startOf('mimute').fromNow()
	      }
	    },
	    data(){
	    	return{
	    		myComment:this.showComment
	    	}
	    },
	    props:["showComment",'article'],
	    methods:{
	    	hideComment(){
	    		this.showComment=!this.showComment
	    	},
	    	thum(){
	        	this.thumb=!this.thumb;
	      	},
	      	writeComment(){
	      		this.showWrite=true;
	      	}
	    },
	    watch:{
	    	showComment(val){
	    		this.myComment=val;
	    	},
	    	myComment(val){
	    		this.$emit("on-comment",val)
	    	}
	    }
	}
</script>
<style lang="less">
	@import '../../assets/css/common';
	 .seeComment{
      position:fixed;
      width:100%;
      top:20px;
      bottom:0px;
      z-index:200;
      background: #ffffff;
      .backs{
        position:relative;
        width: 100%;
        height:45px;
        img{
          position:absolute;
          left:15px;
          top:13px;
        }
      }
      .commentCon{
        padding:15px 15px 0 15px;
        height:551px;
        overflow:hidden;
        .border-1px(@line);
        .title{
          height:52px;
          font-family:PingFangSC-Semibold;
          font-size: 21px;
          color: @33;
          line-height: 26px;
        }
        .wrapper{
          height:56px;
          padding:15px 0 30px 0;
          .time,.top{
            padding-right:5px;
            font-family: PingFangSC-Regular;
            font-size: 11px;
            color: @light;
          }

        }
        .num{
          font-family: PingFangSC-Semibold;
          font-size: 13px;
          color: @33;
        }
        .detail{
          height:410px;
          overflow:auto;
          .one{
            width:100%;
            height:144px;
            .icon{
              float:left;
              width:34px;
              padding:15px 7px 0 0px;
            }
            .content33{
              float:left;
              .border-1px(@line);
              padding:15px 0;
              height:144px;
              .line1{
                background:red;
                padding-bottom:5px;
                .name{
                  padding-right:180px;
                  font-family: PingFangSC-Semibold;
                  font-size: 13px;
                  color: @33;
                }
                .num{
                  padding-right:3px;
                  font-family: PingFangSC-Regular;
                  font-size: 13px;
                  color: @num;
                }
                .thum{
                  padding-left:0px;
                }
              }
              .text33{
                height:75px;
                font-family: PingFangSC-Regular;
                font-size: 16px;
                color: @33;
                letter-spacing: 0.35px;
                line-height: 25px;
                overflow:hidden;
              }
              .time{
                padding-top:4px;
                font-family: PingFangSC-Regular;
                font-size: 11px;
                color: @light;
              }
            }
          }
        }

        .detail2{
          height:410px;
          overflow:auto;
          padding-top:74px;
          text-align:center;
          text44{
            padding-top:16px;
            font-family: PingFangSC-Regular;
            font-size: 16px;
            color: @light;
          }
        }
        .bottom33{
          display:flex;
          position:fixed;
          right:0px;
          bottom:0px;
          height:50px;
          padding:10px;
          width:100%;
          background:white;
          .left{
            flex:0 0 150px;
            float:left;
            background: #F1F3F5;
            border-radius: 50px;
            width:150px;
            height:30px;
            .icon{
              display:inline-block;
              vertical-align:top;
              padding:5px 5px 5px 15px;
            }
            .write{
              display:inline-block;
              vertical-align:top;
              padding:7px 0px 5px 0px;
              font-family: PingFangSC-Regular;
              font-size: 14px;
              color: @light;
            }
            .comment{
              display:inline-block;
              vertical-align:top;
              padding:7px 0px 9px 5px;
            }
          }
          .right{
            flex:1;
            position:relative;
            float:left;
            height:30px;
            width:205px;
            padding:5px 0px;
            .comment{
              padding:0px 5px 0px 100px;
            }
            .back{
              padding:0 5px 0px 5px;
              font-family: PingFangSC-Semibold;
              font-size: 14px;
              color: #008BFF;
            }
            .share{
              padding:0px 5px 0px 5px;
            }

          }
        }
      }
    }
</style>