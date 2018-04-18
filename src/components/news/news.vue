<template>
<div class="news">
  <header></header>
  <div class="tab">
    <span class="title">新闻</span>
    <span class="search" ><router-link :to="{path:'/news/search',query:{id:press}}"><img src="../../assets/img/3_icon_search.png" alt="" width="16"height="16"></router-link></span>
  </div>
  <div class="news-list border-1px"  ref="newsColumn" >
    <ul >
      <router-link v-for="(news,index) in press"
      :key="index" :to="{path:'/detail/'+news.id}" tag="li" v-if="news.titile"
      >
        <div v-if="news.image.position==='right'" class="title1 border-1px">
          <div class="left">
            <div class="row1">
              <span>{{news.titile}}</span>
            </div>
            <div class="row2">
            <span v-if="news.top===true" class="top" >
              置顶
            </span>
              <span class="datetme">{{news.dateTme|dateFormat}}</span>
              <span class="sour">{{news.source}}</span>
              <span class="comments_img"><img src="../../assets/img/5_icon_comment.png" alt=""width="11"height="11"></span>
              <span class="comment" v-if="news.comments[0].count<=999">{{news.comments[0].count}}</span>
              <span class="comment" v-else>999</span>
              <span class="thumbUp"><img src="../../assets/img/6_icon_good.png" alt=""alt=""width="11"height="11"></span>
              <span class="like" v-if="news.comments[0].thumbUp<=999">{{news.comments[0].thumbUp}}</span>
              <span class="like" v-else>999</span>
            </div>
          </div>
          <div class="right">
            <img v-lazy="news.image.url" width="100" height="75">
          </div>
        </div>
        <div v-else class="title2 ">
          <div class="top">
             <span>{{news.titile}}</span>
          </div>
          <div class="middle"><img v-lazy="news.image.url"width="345"height="135"></div>
          <div class="bottom">
            <span v-if="news.top===true" class="top" >
              置顶
            </span>
            <span class="datetme">{{news.dateTme|dateFormat}}</span>
            <span class="sour">{{news.source}}</span>
            <span class="comments_img"><img src="../../assets/img/5_icon_comment.png" alt=""width="11"height="11"></span>
            <span class="comment" v-if="news.comments[0].count<=999">{{news.comments[0].count}}</span>
            <span class="comment" v-else>999</span>
            <span class="thumbUp"><img src="../../assets/img/6_icon_good.png" alt=""alt=""width="11"height="11"></span>
            <span class="like" v-if="news.comments[0].thumbUp<=999">{{news.comments[0].thumbUp}}</span>
            <span class="like" v-else>999</span>
          </div>
        </div>
      </router-link>
    </ul>


  </div>
  <keep-alive >
    <router-view></router-view>
  </keep-alive>
  <v-footer></v-footer>


</div>
</template>

<script>
  const ERR_OK=0;
  import footer from '../footer/footer.vue'
  import moment from 'moment'
  import axios from 'axios'
    export default {
      data() {
        return {
          press:[],
          touchPosition:0

        }
      },
      props:{
        news:{
          type:Object
        }
      },
      created(){
        axios.get('../../../static/date/newsList.json').then((response)=>{
          this.press=response.data;
        },(response)=>{
          console.log('服务器请求失败');
        });
      },
      methods: {
        selectNews(news, event) {
          if (!event._constructed) {
            return;
          };
          this.selectedNews = news;
          this.$refs.news.show();
        },
      },
      computed:{

      },
      watch:{

      },
      components:{
        'v-footer':footer
      },
      filters: {
        dateFormat (time) {
          return moment(time).startOf('mimute').fromNow()
        }
      }
    }
</script>

<style lang="less">
  @import '../../assets/css/border-1px';
.news{
  position:absolute;
  top: 0px;
  bottom:50px;
  left:0;
  width:100%;
  header{
    height:20px;
  }
  .tab{
    position:relative;
    height:45px;
    padding:15px 0 14px 0;
    line-height:16px;
    text-align:center;

    .title{
      display:inline-block;
      vertical-align:top;
      font-family: PingFangSC-Semibold;
      font-size: 16px;
      color: #333333;
    }
    .search{
      display:inline-block;
      vertical-align:top;
      position:absolute;
      right:15px;
    }
  }
  .news-list{
    padding:0px 15px 0 15px ;
    width:100%;
    height:551px;
    overflow:auto;
    .border-1px(bc);
    .title1{
      height:115px;
      width:100%;
      display:flex;
      padding:20px 0;
      .border-1px(bc);

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
          color: #333333;
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
            color: #FF0000;
          }
          .datetme{
            padding-right:5px;
            width:45px;
            font-family:PingFangSC-Regular;
            font-size: 11px;
            color: #A5A5A5;
          }
          .sour{
            display:inline-block;
            width:65px;
            padding-right:10px;
            height:11px;
            overflow: hidden;

            font-family:PingFangSC-Regular;
            font-size: 11px;
            color: #A5A5A5;


          }
          .comments_img{
            padding-right:1px;
          }
          .comment{
            padding-right:12px;
            font-family: PingFangSC-Regular;
            font-size: 11px;
            color: #A5A5A5;
          }
          .thumbUp{
            padding-right:1px;
          }
          .like{
            padding-right:12px;
            font-family: PingFangSC-Regular;
            font-size: 11px;
            color: #A5A5A5;
          }

        }
      }
      .right{
        float:left;
        flex:0 0 100px;

      }
    }
    .title2 {
      .border-1px(bc);
      height:220px;
      padding:20px 15px 20px 0;

      .top{
        height:16px;
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: #333333;
        margin-bottom:5px;
      }
      .middle{
        text-align:center;
        margin-bottom:7px;
      }
      .bottom{

        height:11px;
        display:inline-block;
        vertical-align:top;
        font-size:0;
        .top{
          padding-right:2px;
          font-family:PingFangSC-Regular;
          font-size: 8px;
          color: #FF0000;
        }
        .datetme{
          padding-right:5px;
          font-family:PingFangSC-Regular;
          font-size: 11px;
          color: #A5A5A5;
        }
        .sour{
          display:inline-block;
          width:65px;
          padding-right:10px;
          height:11px;
          overflow: hidden;
          font-family:PingFangSC-Regular;
          font-size: 11px;
          color: #A5A5A5;
        }
        .comments_img{
          padding-right:1px;
        }
        .comment{
          padding-right:12px;
          font-family: PingFangSC-Regular;
          font-size: 11px;
          color: #A5A5A5;
        }
        .thumbUp{
          padding-right:1px;
        }
        .like{
          padding-right:12px;
          font-family: PingFangSC-Regular;
          font-size: 11px;
          color: #A5A5A5;
        }

      }


    }

  }

}
</style>
