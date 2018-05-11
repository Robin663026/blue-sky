<template>
  <div class="searchNews" :id="theme">
    <header></header>
    <div class="search-line">
      <div class="textV">
        <input v-model='searchValue' type="search" placeholder="请输入关键字"  autofocus="autofocus">
      </div>
      <router-link to="/news"><div class="delete" >取消</div></router-link>
    </div>
  
      <div class="hot-key">
        <div class="titlez">热门搜索关键字</div>
        <div class="line1">
          <div class="name">招商仁和</div>
          <div class="name">科技时事</div>
          <div class="name">双十二纪念日</div>
        </div>
        <div class="line2">
          <div class="name">深圳时事</div>
          <div class="name">设计资讯</div>
          <div class="name">中国</div>
        </div>
      </div>
      
  

<!--     <div class="searchResult" v-if="searchList.length>0">
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
    </div> -->
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
    methods:{
      async searchTarget(historyValue){
        if (historyValue) {
          this.searchValue = historyValue;
        }else if (!this.searchValue) {
          return
        }
        //隐藏历史记录
        // this.showHistory = false;
        //获取搜索结果
        // this.searchList = await searchNews(this.news, this.searchValue);
        // this.emptyResult = !this.searchList.length;
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
      // this.news=this.$router.query.id;
    },
    computed:{
      theme(){
        return this.$store.state.theme
      }
    }
  }
</script>

<style lang="less">

   @import (reference)'../../assets/less/common';
  .searchNews{
    position:absolute;
    top:0;
    left: 0;
    width:100%;
    height:667px;
    background: @bg;
    .header{
      height:20px;
      background:@bg1;
    }
    .search-line{
      height:45px;
      width:100%;
      padding:5px 10px;
      .textV{
        display:inline-block;
        vertical-align:top;
        width:300px;
        background: @input;
        border-radius: 10px;
        padding:10px 0px 10px 9px;
        input{
          width:100%;
          height:100%;
          background:@input;
        }
      }
      .delete{
        display:inline-block;
        vertical-align:top;
        padding:10px 0 11px 16px;
        font-family:PingFangSC-Regular;
        font-size: 14px;
        color: @33;
      }
    }
    .hot-key{
      
      width:100%;
      .titlez{
        padding:15px 0px 10px 20px;
        ont-family:PingFangSC-Semibold;
        font-size: 14px;
        color: @33;
      }
      .line1{
        display:flex;
        padding:0 0px 15px 20px;
        height:30px;
        width:100%;
        .name{
          flex:1;
          height:30px;
          margin-right:20px;
          display:inline-block;
          padding-top:7px;
          background: @bg;
          border: 1px solid @light;
          border-radius: 100px;

          font-family:PingFangSC-Regular;
          font-size: 14px;
          text-align:center;
          color: @light;
        }
      }
      .line2{
        display:flex;
        margin-top:15px;
        padding:0 0px 15px 20px;
        height:30px;
        width:100%;
        .name{
          flex:1;
          height:30px;
          margin-right:20px;
          display:inline-block;
          padding-top:7px;
          background: @bg;
          border: 1px solid @light;
          border-radius: 100px;

          font-family:PingFangSC-Regular;
          font-size: 14px;
          text-align:center;
          color: @light;
        }
      }
    }
    .noResult{
      position:fixed;
      top:64px;
      left:0;
      bottom:45px;
      width:100%;
      background:@bg;
      text-align:center;
      .icon{
        padding:150px 0 10px 0;
      }
      .text{
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: @light;
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
        .border-1px(@line);

        .left{
          float:left;
          padding-right:18px;
          width:227px;
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
              font-family:PingFangSC-Regular;
              font-size: 11px;
              color: @light;
            }
            .source{
              padding-right:10px;
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
          padding-right:15px;
        }
      }
      .title2 {
        .border-1px(@line);
        height:220px;
        padding:20px 15px 20px 0;
        .top{
          height:16px;
          font-family: PingFangSC-Semibold;
          font-size: 16px;
          color: @33;
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
            color: @red;
          }
          .datetme{
            padding-right:5px;
            font-family:PingFangSC-Regular;
            font-size: 11px;
            color: @light;
          }
          .source{
            padding-right:10px;
            overflow: hidden;
            font-family:PingFangSC-Regular;
            font-size: 11px;
            color: @light;
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
    }
  }
  #black{
    position:absolute;
    top:0;
    left: 0;
    width:100%;
    height:667px;
    background: @bbg;
    .header{
      width:100%;
      height:20px;
      background:@bg1;
    }
    .search-line{
      height:45px;
      width:100%;
      padding:5px 10px;
      .textV{
        display:inline-block;
        vertical-align:top;
        width:300px;
        background: @binput;
        border-radius: 10px;
        padding:10px 0px 10px 9px;
        input{
          width:100%;
          height:100%;
          background:@binput;
        }
      }
      .delete{
        display:inline-block;
        vertical-align:top;
        padding:10px 0 11px 16px;
        font-family:PingFangSC-Regular;
        font-size: 14px;
        color: @b33;
      }
    }
    .hot-key{
      
      width:100%;
      .titlez{
        padding:15px 0px 10px 20px;
        ont-family:PingFangSC-Semibold;
        font-size: 14px;
        color: @b33;
      }
      .line1{
        display:flex;
        padding:0 0px 15px 20px;
        height:30px;
        width:100%;
        .name{
          flex:1;
          height:30px;
          margin-right:20px;
          display:inline-block;
          padding-top:7px;
          background: @bbg;
          border: 1px solid @blight;
          border-radius: 100px;

          font-family:PingFangSC-Regular;
          font-size: 14px;
          text-align:center;
          color: @blight;
        }
      }
      .line2{
        display:flex;
        margin-top:15px;
        padding:0 0px 15px 20px;
        height:30px;
        width:100%;
        .name{
          flex:1;
          height:30px;
          margin-right:20px;
          display:inline-block;
          padding-top:7px;
          background: @bbg;
          border: 1px solid @blight;
          border-radius: 100px;

          font-family:PingFangSC-Regular;
          font-size: 14px;
          text-align:center;
          color: @blight;
        }
      }
    }
    .noResult{
      position:fixed;
      top:64px;
      left:0;
      bottom:45px;
      width:100%;
      background:@bbg;
      text-align:center;
      .icon{
        padding:150px 0 10px 0;
      }
      .text{
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: @blight;
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
        .border-1px(@bline);

        .left{
          float:left;
          padding-right:18px;
          width:227px;
          .row1{
            height:42px;
            overflow:hidden;
            font-family:PingFangSC-Semibold;
            font-size: 16px;
            color: @b33;
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
              color: @bred;
            }
            .datetme{
              padding-right:5px;
              font-family:PingFangSC-Regular;
              font-size: 11px;
              color: @blight;
            }
            .source{
              padding-right:10px;
              width:45px;
              overflow: hidden;
              font-family:PingFangSC-Regular;
              font-size: 11px;
              color: @blight;


            }
            .comments_img{
              padding-right:1px;
            }
            .comment{
              padding-right:12px;
              font-family: PingFangSC-Regular;
              font-size: 11px;
              color: @blight;
            }
            .thumbUp{
              padding-right:1px;
            }
            .like{
              padding-right:12px;
              font-family: PingFangSC-Regular;
              font-size: 11px;
              color: @blight;
            }

          }
        }
        .right{
          float:left;
          padding-right:15px;
        }
      }
      .title2 {
        .border-1px(@bline);
        height:220px;
        padding:20px 15px 20px 0;
        .top{
          height:16px;
          font-family: PingFangSC-Semibold;
          font-size: 16px;
          color: @b33;
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
            color: @bred;
          }
          .datetme{
            padding-right:5px;
            font-family:PingFangSC-Regular;
            font-size: 11px;
            color: @blight;
          }
          .source{
            padding-right:10px;
            overflow: hidden;
            font-family:PingFangSC-Regular;
            font-size: 11px;
            color: @blight;
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
            color: @blight;
          }
          .thumbUp{
            padding-right:1px;
          }
          .like{
            padding-right:12px;
            font-family: PingFangSC-Regular;
            font-size: 11px;
            color: @blight;
          }

        }


      }
    }
  }
</style>
