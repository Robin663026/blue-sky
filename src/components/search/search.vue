<template>
  <div class="searchNews" >
    <header></header>
    <div class="search-line">
      <div class="textV">
        <input v-model='searchValue'type="search" placeholder="请输入关键字"  autofocus="autofocus">
      </div>
      <div class="delete" @click.prevent="searchTarget('')">搜索</div>


    </div>
    <div>
      <div class="hot-key">
        <div class="title">热门搜索关键字</div>
        <ul>
          <li @click="addQuery(item.k)" class="item" v-for="item in hotKey">
            <span>{{item.k}}</span>
          </li>
        </ul>
      </div>
      <div class="search-history" v-show="searchHistory.length">
        <h1 class="title">
          <span class="text">搜索历史</span>
          <span @click="showConfirm" class="clear">
                <i class="icon-clear"></i>
              </span>
        </h1>
        <search-list @delete="deleteSearchHistory" @select="addQuery" :searches="searchHistory"></search-list>
      </div>
    </div>

    <div class="searchResult" v-if="searchList.length>0">
      <ul>
        <li v-for="list in searchList">
          <div v-if="list.image.position==='right'" class="title1 border-1px">
            <div class="left">
              <div class="row1">
                <span>{{list.titile}}</span>
              </div>
              <div class="row2">
            <span v-if="list.top===true" class="top" >
              置顶
            </span>
                <span class="datetme">123</span>
                <span class="source">{{list.source}}</span>
                <span class="comments_img"><img src="../../assets/img/5_icon_comment.png" alt=""width="11"height="11"></span>
                <span class="comment" v-if="list.comments[0].count<=999">{{news.comments.count}}</span>
                <span class="comment" v-else>999</span>
                <span class="thumbUp"><img src="../../assets/img/6_icon_good.png" alt=""alt=""width="11"height="11"></span>
                <span class="like" v-if="list.comments.length.thumbUp<=999">{{news.comments.thumbUp}}</span>
                <span class="like" v-else>999</span>
              </div>
            </div>
            <div class="right">
              <img :src="list.image.url" width="100" height="75">
            </div>
          </div>
          <div v-else class="title2 ">
            <div class="top">
              <span>{{list.titile}}</span>
            </div>
            <div class="middle"><img :src="list.image.url"width="345"height="135"></div>
            <div class="bottom">
            <span v-if="list.top===true" class="top" >
              置顶
            </span>
              <span class="datetme">123</span>
              <span class="source">123</span>
              <span class="comments_img"><img src="../../assets/img/5_icon_comment.png" alt=""width="11"height="11"></span>
              <span class="comment" v-if="list.comments.count<=999">{{news.comments.count}}</span>
              <span class="comment" v-else>999</span>
              <span class="thumbUp"><img src="../../assets/img/6_icon_good.png" alt=""alt=""width="11"height="11"></span>
              <span class="like" v-if="list.comments.thumbUp<=999">{{news.comments.thumbUp}}</span>
              <span class="like" v-else>999</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="noResult" v-if="emptyResult">
      <div class="icon"><img src="../../assets/img/55_load_fail.png" alt=""width="150" height="149"></div>
      <div class="text">无相关关键词文章</div>
    </div>

  </div>
</template>

<script>

  export default {
    data() {
      return {
        searchValue:'',
        emptyResult:false,
        searchList:[],//搜索内容
        news:[],
        searchHistory: [],
      }
    },
    method:{

    },
    methods:{
      async searchTarget(historyValue){
        if (historyValue) {
          this.searchValue = historyValue;
        }else if (!this.searchValue) {
          return
        }
        //隐藏历史记录
        this.showHistory = false;
        //获取搜索结果
        this.searchList = await searchNews(this.news, this.searchValue);
        this.emptyResult = !this.searchList.length;
        /**
         * 点击搜索结果进入下一页面时进行判断是否已经有一样的历史记录
         * 如果没有则新增，如果有则不做重复储存，判断完成后进入下一页
         */
        let history = getStore('searchHistory');
        if (history) {
          let checkrepeat = false;
          this.searchHistory = JSON.parse(history);
          this.searchHistory.forEach(item => {
            if (item == this.searchValue) {
              checkrepeat = true;
            }
          })
          if (!checkrepeat) {
            this.searchHistory.push(this.searchValue)
          }
        }else {
          this.searchHistory.push(this.searchValue)
        }
        setStore('searchHistory',this.searchHistory)
      }

    },
    mounted(){
      this.news=this.$router.query.id;
    }
  }
</script>

<style lang="less">
  @import '../../assets/css/border-1px';
  .searchNews{
    position:absolute;
    top:0;
    left: 0;
    width:100%;
    height:667px;
    background: #ffffff;
    .header{
      height:20px;
    }
    .search-line{
      height:45px;
      width:100%;
      padding:5px 10px;
      .textV{
        display:inline-block;
        vertical-align:top;
        width:300px;
        background: #F1F3F5;
        border-radius: 10px;
        padding:10px 0px 10px 9px;
        input{
          width:100%;
          height:100%;
          background:#F1F3F5;
        }
      }
      .delete{
        display:inline-block;
        vertical-align:top;
        padding:10px 0 11px 16px;
        font-family:PingFangSC-Regular;
        font-size: 14px;
        color: #333333;
      }
    }
    .hot-key{
      height:276px;
      width:100%;
      .title{
        padding:15px 0px 10px 20px;
        ont-family:PingFangSC-Semibold;
        font-size: 14px;
        color: #333333;
      }
      .place1{
        padding:0 0 15px 20px;
        height:30px;
        width:100%;
        .tip{
          display:inline-block;
          vertical-align:top;
          width:77px;
          padding:8px 0;
          background: #FFFFFF;
          border: 1px solid #A5A5A5;
          border-radius: 100px;

          font-family:PingFangSC-Regular;
          font-size: 14px;
          text-align:center;
          color: #A5A5A5;
        }
        .tip1{
          display:inline-block;
          vertical-align:top;
          width:105px;
          padding:8px 0;
          background: #FFFFFF;
          border: 1px solid #A5A5A5;
          border-radius: 100px;
          font-family:PingFangSC-Regular;
          font-size: 14px;
          text-align:center;
          color: #A5A5A5;
        }
      }
      .place2{
        padding:15px 0 15px 20px;
        height:30px;

        width:100%;
        .tip{
          display:inline-block;
          vertical-align:top;
          width:77px;
          padding:8px 0;
          background: #FFFFFF;
          border: 1px solid #A5A5A5;
          border-radius: 100px;
          font-family:PingFangSC-Regular;
          font-size: 14px;
          text-align:center;
          color: #A5A5A5;
        }
      }
    }
    .noResult{
      position:fixed;
      top:64px;
      left:0;
      bottom:45px;
      width:100%;
      background:#f7f7f7;
      text-align:center;
      .icon{
        padding:150px 0 10px 0;
      }
      .text{
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #A5A5A5;
      }
    }
    .searchResult{
      position:fixed;
      top:64px;
      left:0;
      width:100%;
      .title1{
        height:115px;
        width:100%;
        padding:20px 0;
        .border-1px(bc);

        .left{
          float:left;
          padding-right:18px;
          width:227px;
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
              font-family:PingFangSC-Regular;
              font-size: 11px;
              color: #A5A5A5;
            }
            .source{
              padding-right:10px;
              width:45px;
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
          padding-right:15px;
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
          margin-bottom:7px;
        }
        .bottom{
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
            font-family:PingFangSC-Regular;
            font-size: 11px;
            color: #A5A5A5;
          }
          .source{
            padding-right:10px;
            overflow: hidden;
            font-family:PingFangSC-Regular;
            font-size: 11px;
            color: #A5A5A5;
            overflow: hidden;
            width:45px;
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
