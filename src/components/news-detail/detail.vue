<template>
  <div  class="news" >
    <header></header>
    <div class="back "><router-link to="/news" ><img src="../../assets/img/4_icon_back.png" alt=""width="16"height="16"></router-link></div>
    <div class="content border-1px" >
      <div class="title">{{article.title}}</div>
      <div class="some">
        <span class="left"><img src="../../assets/img/35_img_54X54.png" width="27" height="27"></span>
        <span class="middle">
          <div class="top">{{article.source}}</div>
          <div class="bot">

            <div class="time">{{article.time|dateFormat}}</div>
          </div>
        </span>
        <span  @click="addSubscribe"  :class="{ 'order':true,'active':subscribeflag}"><span class="text2" >订阅</span></span>
      </div>
      <div class="contents" >

        <ul>
          <li v-for="content in article.content">
            <div class="h1" v-if="content.type==='h1'">{{content.text}}</div>
            <div class="p" v-else-if="content.type==='p'">{{content.text}}</div>
            <div class="image" v-else="content.type==='image'">
              <img :src="content.text"width="345"height="235" >
            </div>
          </li>
        </ul>
      </div>

    </div>
    <div class="bottom">
      <div class="left">
        <span class="icon"><img src="../../assets/img/12_write_comment.png" alt=""width="20"height="20"></span>
        <span class="write" @click="writeComment">写评论</span>
      </div>
      <div class="right">
        <span class="comment"><img src="../../assets/img/13_comment.png" alt=""width="20"height="20"@click="seeComment"></span>
        <span class="collect" v-if="article.like==true"><img src="../../assets/img/14_collect.png" alt=""width="20"height="20"@click="collected"></span>
        <span class="nocollect" v-else><img src="../../assets/img/14_collect2.png" alt=""width="20"height="20"@click="collected"></span>
        <span class="share"><img src="../../assets/img/13_share.png" alt=""width="20"height="20" @click="shareIcon"></span>
        <div class="num">{{article.comment.length}}</div>
      </div>
    </div>
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
          <div class="detail1 border-1px "  >
            <ul>
              <li v-for="cmt in article.comment ">
                <div class="icon">
                  <img :src="cmt.icon" alt=""width="27"height="27">
                </div>
                <div class="content border-1px">
                  <div class="line1">
                    <span class="name">{{cmt.name}}</span>
                    <span class="num">{{cmt.thumbUp}}</span>
                    <span class="thum" @click="thum"><img src="../../assets/img/15_icon_26X26_good.png" alt=""width="13" height="13"></span>
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
    <div class="shareIcon" v-show="showIcon">
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
        <div class="del border-1px"@click="hideIcon"><p>取消</p></div>
      </div>
    </div>
    <div class="writeComment" v-show="showWrite">
      <div class="no"></div>
      <div class="content">
        <div class="text123">
          <input type="text" v-model="text" placeholder="写评论">
        </div>
        <div class="send" @click="closeComment"><button>发送</button></div>

      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapMutations,mapActions,mapState} from 'vuex';
  import store from '../../store'
  import moment from 'moment'

  let collects=[];
  export default {
    filters: {
      dateFormat (time) {
        return moment(time).startOf('mimute').fromNow()
      }
    },
    data() {
      return {
        detail:{
          type:Object
        },
        collectC:'collect',
        showComment:false,
        showIcon:false,
        showWrite:false,
        text:'',
        uid:this.$route.query.id,
        subscribeflag:true

      };
    },
    props: {
    },
    methods:{

      ...mapMutations(['ADD_SUBSCRIBE','REMOVE_SUBSCRIBE','ADD_COLLECTION','REMOVE_COLLECTION','ADD_THUM','REMOVE_THUM']),
      ...mapActions(['getArticle']),
      addSubscribe () {
        let id = this.article.id;
        let title=this.article.title;
        let source=this.article.source;
        let time=this.article.time;
        let img=this.article.content;
        let comment=this.article.comment;
        let lengthC=this.article.lengthC;
        let index = this.localSubscribe.findIndex(item => {
          return item.id === id
        })
        if (index === -1) {
          this.subscribeflag=!this.subscribeflag;
          this.ADD_SUBSCRIBE({
            id,
            title,
            img,
            time,
            source,
            comment,
            lengthC

          })

        } else {
          this.subscribeflag=!this.subscribeflag;
          this.REMOVE_SUBSCRIBE(id)

        }
        console.log(this.localSubscribe);
      },
      thum(){
//        let img=this.cmt.icon;
        let name=this.cmt.name;
        let text=this.cmt.text;
        let index=this.localThum.findIndex(item=>{
          return item.id ===id
        })
        if(index ===-1){
          this.ADD_THUM({
            img,
            name,
            text
          })
        }else{
          this.REMOVE_THUM(img,name,text)
        }
        console.log(thos.localThum);
      },
      collected(){
        let id = this.article.id;
        let title=this.article.title;
        let source=this.article.source;
        let time=this.article.time;
        let img=this.article.content;
        let lengthC=this.article.lengthC;
        let comment=this.article.comment;
        let like=this.article.like;
        let content=this.article.content;
        let index = this.localCollection.findIndex(item => {
          return item.id === id
        });
        if (index === -1) {
          this.article.like=!this.article.like;
          this.ADD_COLLECTION({
            id,
            title,
            img,
            time,
            source,
            like,
            lengthC,
            comment,
            content


          })

        } else {
          this.article.like=!this.article.like;
          this.REMOVE_COLLECTION(id)

        }
        console.log(this.localCollection);
      },
      seeComment(){
        this.showComment=true;
      },
      hideComment(){
        this.showComment=false;
      },

      shareIcon(){
        this.showIcon=true;
      },
      hideIcon(){
        this.showIcon=false;
      },
      writeComment(){
        this.showWrite=true;
      },
      closeComment(){
        this.showWrite=false;
      }
    },
    created(){
      let id = this.$route.params.id
      this.getArticle({id: id})
    },
    beforeRouteEnter(to,from,next){
      const id=to.params.id;
      if(!id)return false;
      next(vm=>{
        vm.getArticle({id})
      })
    },
    computed:{
      ...mapState(['localSubscribe','localCollection','article','ifReturnMsg','loading']),
      text(){
        let ex=/http/;
        let result=ex.exec(this.article.content.text);
        if(result.length===1){
          return article.content.type==image;
        }else {
          return article.content.type=h1;
        }
      }
    },
    watch:{
      currentNews(newVal,oldVal){
        console.log(this.currentNews);
        if (!newVal.id) {
          return
        }
        if (newVal.id === oldVal.id) {
          return
        }
      }
    },
    components:{
    },

  }
</script>
<style lang="less">
  @import '../../assets/css/common';
  .news{
    position:fixed;
    left:0;
    top:0;
    bottom:0;
    right:0;
    z-index:100;
    width:100%;
    height:667px;
    background-color:white;
    header{
      height:20px;
    }
    .back{
      position:relative;
      width: 100%;
      height:45px;
      img{
        position:absolute;
        left:15px;
        top:13px;
      }
    }
    .content{
      padding:15px 15px 0 15px;
      height:551px;
      overflow:auto;
      .border-1px(bc);
      .title{
        height:52px;
        font-family:PingFangSC-Semibold;
        font-size: 21px;
        color: #333333;
        line-height: 26px;
      }
      .some{
        position:relative;
        display: flex;
        height:50px;
        width:100%;
        padding:8px 0 15px 0;
        .left{
          flex:0 0 35px;
          width:35px;
          float:left;
          padding-right:8px;
        }
        .middle{
          flex:1;
          float:left;
          .top {
            font-family: PingFangSC-Semibold;
            font-size: 12px;
            color: #333333;
            padding-top: 1px;
            padding-bottom: 3px;
            width: 65px;
            overflow: hidden;
            height: 12px;
          }
          .bot{
            margin-bottom:15px;
            .red{
              display:inline-block;
              vertical-align: top;
              padding-right:2px;
              font-family:PingFangSC-Regular;
              font-size: 8px;
              color: #FF0000;
              background: #FFFFFF;
              border: 1px solid #FF0000;
            }
            .time{
              display:inline-block;
              vertical-align: top;
              padding:1px 0;
              font-family:PingFangSC-Regular;
              font-size: 11px;
              color: #A5A5A5;
            }
          }
        }
        .order{
          position:absolute;
          top:9px;
          right:15px;
          width:53px;
          height:26px;
          text-align:center;
          box-sizing:border-box;
          background:#008CFF;
          border:1px solid #fff;
          border-radius: 6px;
          color: #ffffff;
          &.active{
            background:#A5A5A5;
          }
          .text2{
            font-family:PingFangSC-Semibold;
            font-size: 12px;
          }
        }
        .active{
          position:absolute;
          top:9px;
          right:15px;
          width:53px;
          height:26px;
          text-align:center;
          box-sizing:border-box;
          background:orange;
          border:1px solid #fff;
          border-radius: 6px;
          color: #ffffff;
          &.active{
            background:#A5A5A5;
          }
          .text2{
            font-family:PingFangSC-Semibold;
            font-size: 12px;
          }

        }
      }
    }
    .contents{
      width:100%;
      .h1{
        padding-bottom:15px;
        font-family:PingFangSC-Regular;
        font-size: 16px;
        color: #333333;
        line-height: 24px;
        letter-spacing:0.5px;
      }
      .p{
        padding-bottom:15px;
        font-family:PingFangSC-Regular;
        font-size: 16px;
        color: #333333;
        letter-spacing: 0.3px;
        line-height: 24px;
      }
      .image{
        padding-bottom:15px;
      }
    }
    .bottom{
      display:flex;
      position:absolute;
      right:0px;
      bottom:0px;
      height:50px;
      padding:10px;
      width:100%;
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
          color: #A5A5A5;
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
        .collect{
          padding:0px 5px 0px 5px;
        }
        .nocollect{
          padding:0px 5px 0px 5px;

        }
        .share{
          padding:0px 5px 0px 5px;
        }
        .num{
          position:absolute;
          padding:1px 0;
          top:0;
          right:72px;
          width:16px;
          height:10px;
          background: #FF0000;
          border-radius: 5px;
          text-align:center;
          font-family:PingFangSC-Regular;
          font-size: 9px;
          color: #FFFFFF;
          letter-spacing: 0;
        }
      }
    }
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
        .border-1px(bc);
        .title{
          height:52px;
          font-family:PingFangSC-Semibold;
          font-size: 21px;
          color: #333333;
          line-height: 26px;
        }
        .wrapper{
          height:56px;
          padding:15px 0 30px 0;
          .time,.top{
            padding-right:5px;
            font-family: PingFangSC-Regular;
            font-size: 11px;
            color: #A5A5A5;
          }

        }
        .num{
          font-family: PingFangSC-Semibold;
          font-size: 13px;
          color: #333333;
        }
        .detail{
          height:410px;
          overflow:auto;
          .detail1{
            display:flex;
            width:100%;
            height:144px;
            .border-1px(bc);
            .icon{
              float:left;
              flex:0 0 49px;
              width:49px;
              padding:15px 7px 0 15px;
            }
            .content{
              float:left;
              flex:1;
              .border-1px(bc);
              padding:15px 0;
              height:144px;
              .line1{
                padding-bottom:5px;
                .name{
                  padding-right:180px;
                  font-family: PingFangSC-Semibold;
                  font-size: 13px;
                  color: #333333;
                }
                .num{
                  padding-right:3px;
                  font-family: PingFangSC-Regular;
                  font-size: 13px;
                  color: #6F7379;
                }
                .thum{
                  padding-right:15px;
                }
              }
              .text33{
                height:75px;
                font-family: PingFangSC-Regular;
                font-size: 16px;
                color: #333333;
                letter-spacing: 0.35px;
                line-height: 25px;
                overflow:hidden;
              }
              .time{
                padding-top:4px;
                font-family: PingFangSC-Regular;
                font-size: 11px;
                color: #A5A5A5;
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
            color: #A5A5A5;
          }
        }
        .bottom{
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
              color: #A5A5A5;
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
    .writeComment{
      position:fixed;
      top:0;
      left:0;
      width:100%;
      height:667px;
      z-index:100;
      background: rgba(0,0,0,0.50);
      .no{
        width:100%;
        height:267px;
      }
      .content{
        padding:15px 15px 7px 15px;
        width:100%;
        height:135px;
        background: #ffffff;
        .text123{
          height:60px;
          padding-bottom:15px;
          width:100%;
          input{
            font-family: PingFangSC-Regular;
            font-size: 16px;
            color: #A5A5A5;
            background:#F1F3F5;
            width:100%;
            height:100%;
          }
        }
        .send{
          background: #FFFFFF;
          border: 1px solid #A5A5A5;
          border-radius: 2px;
          padding:10px 0 11px 0;
          text-align:center;
          button{
            font-family: PingFangSC-Regular;
            font-size: 16px;
            color: #A5A5A5;
          }
        }
      }
    }
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
          .border-1px(bc);
          p{
            font-family: PingFangSC-Regular;
            font-size: 16px;
            color: #FF0000;
          }
        }
      }
    }
  }
</style>
