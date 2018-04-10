<template>
  <div class="searchNews" >
    <header></header>
    <div class="search-line">
     <search-box ref="searchBox"@query="onQueryChange"></search-box>
    </div>
    <div ref="shortcutWrapper"class="shortcut-wrapper" v-show="!query">
      <scroll :refreshDelay="refreshDelay" ref="shortcut" class="shortcut" :dta="shortcut">
        <div>
          <div class="hot-key">
            <div class="title">热门搜索关键字</div>
            <ul>
              <li @click="addQuery(item.k)" class="item" v-for="item in hotKey">
                <span>{{item.k}}</span>
              </li>
            </ul>
          </div>
        </div>
      </scroll>
    </div>
    <div class="search-result" v-show="query" ref="searchResult">
      <search-column @listScroll="blurInput" @select="saveSearch" ref="suggest":query="query"></search-column>
    </div>


    <div class="noResult" v-if="emptyResult">
      <div class="icon"><img src="../../assets/img/55_load_fail.png" alt=""width="150" height="149"></div>
      <div class="text">无相关关键词文章</div>
    </div>

  </div>
</template>

<script>

import Scroll from '../scroll/scroll.vue'
    export default {
      data() {
        return {
          hotKey:[]
        }
      },
      computed:{
        shortcut(){
          return this.hotKey.concat(this.searchHistory)
        }
      },

      method:{

      },
      methods:{


      },
      mounted(){
        this.news=this.$router.query.id;
      },
      watch:{
        query(newQuery){
          if(!newQuery){
            setTimeout(()=>{
              this.$refs.shortcut.refresh()
            },20)
          }
        }
      },
      components:{
        SearchBox,
        SearchList,
        SearchColumn,
        Scroll
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
      margin:0px;
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
