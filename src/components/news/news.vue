<template>
<div class="news" :id="theme">
  <header></header>
  <div class="tab">
    <span class="ntitle">新闻</span>
    <router-link :to="{path:'/news/search',query:{id:press}}"><span class="search" ></span></router-link>
  </div>
  <div class="news-list border-1px"  ref="newsColumn" >
    <div class="test">
       <ul >
      <router-link v-for="(news,index) in press"
      :key="index" :to="{path:'/detail/'+news.id}" tag="li" v-if="news.titile"
      >
        <newslist :news="news"></newslist>
      </router-link>
    </ul>
    </div>
   


  </div>
  <keep-alive >
    <router-view></router-view>
  </keep-alive>
  <v-footer ></v-footer>


</div>
</template>

<script>
  const ERR_OK=0;
  import { mapActions, mapState } from 'vuex'
  import footer from '../footer/footer.vue'
  import moment from 'moment'
  import axios from 'axios'
  import newsList from './newsList'
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
        let that = this
    // 向下滑动使得新闻刷新
        // document.body.addEventListener('touchstart', function (e) {
        //   if (document.body.scrollTop <= 0) {
        //     that.touchPosition = e.touches[0].pageY
        //     that.$refs.refresh.style.transition = ''
        //     document.body.addEventListener('touchmove', that.touchmove)
        //     document.body.addEventListener('touchend', that.touchend)
        //   }
        // })
    //向上滑动使得新闻更新
        // document.body.addEventListener('touchstart',function(e){
        //   if(document.body.scrollTop<=0){
        //     that.touchPosition
        //   }
        // })
        axios.get('http://localhost:8080/static/data/newsList.json').then((response)=>{
          this.press=response.data;
        },(response)=>{
          console.log('服务器请求失败');
        });
      },
      methods: {
        ...mapActions(['getNews','getMoreNews','refreshNews']),
        // touchmove (e) {
        //   if (!this.$route.params.type) return false
        //   const disY = e.touches[0].pageY - this.touchPosition
        //   const rotate = disY / 300 * 360
        //   if (disY < 30) return false
        //   this.$refs.refresh.style.transform = `translate(-50%, ${Math.min(disY, 200)}px) rotate(${rotate}deg)`
        // },
        selectNews(news, event) {
          if (!event._constructed) {
            return;
          };
          this.selectedNews = news;
          this.$refs.news.show();
        },
        // touchend (e) {
        //   document.body.removeEventListener('touchmove', this.touchmove)
        //   document.body.removeEventListener('touchend', this.touchend)
        //   const disY = e.changedTouches[0].pageY - this.touchPosition
        //   if (disY < 30) return false
        //   this.$refs.refresh.style.transform = ''
        //   this.$refs.refresh.style.transition = 'transform 0.5s linear'
        //   if (disY < 200) return false
        //   this.refreshNews({
        //     type: this.$route.params.type
        //   })
        // }

      },
      computed:{
        ...mapState([
            'ifReturnMsg',
            'ifReturnRefresh',
            'loading',
            'newsLength',
            'loadmore',
            'typePositions'
          ]),
        theme(){
        		return this.$store.state.theme
        	}
      },
      watch:{
        ifReturnRefresh (val, oldVal) {
          if (val && this.newsLength) {
            this.$Message.success(`为您刷新${this.newsLength}条信息`)
          }
        }
      },
      components:{
        'v-footer':footer,
        'newslist':newsList
      },
      filters: {
        dateFormat (time) {
          return moment(time).startOf('mimute').fromNow()
        }
      }
    }
</script>

<style lang="less">
  @import (reference)'../../assets/less/common';
.news{
  position:relative;
  top: 0px;
  left:0;
  width:100%;
  header{
    width:100%;
    height:20px;
    background:@bg1;
  }
  .tab{
    height:45px;
    padding:15px 0 14px 0;
    line-height:16px;
    text-align:center;
    .ntitle{
      display:inline-block;
      vertical-align:top;
      font-family: PingFangSC-Semibold;
      font-size: 16px;
      color: @33;
    }
    .search{
      display:inline-block;
      vertical-align:top;
      position:absolute;
      right:15px;
      width:16px;
      height:16px;
      background:url(../../assets/img/3_icon_search.png)no-repeat center center;
      background-size:16px 16px;
    }
  }
  .news-list{

    width:100%;
    padding:0px 0px 0px 15px ;
    .border-1px(@line);
    width:100%;
    padding-right:15px;
    position:fixed ! important;
    bottom:50px;
    top:65px;
    overflow:auto;
    
  }
  .bottomB{
    position:fixed;
    left:0;
    bottom:0;
  }


}
#black{
  header{ 
    background:@bg1 !important;
  }
  .tab{
    .ntitle{   
      color: @b33 !important;
    } 
    .search{
      background:url(../../assets/img/40_dark_search.png)no-repeat center center;
      background-size:16px 16px;
    }
  }
  .news-list{
    background:@bbg;
    position:fixed !important;
    .border-1px(@bline );
    .title1{
      height:115px;
      width:100%;
      display:flex;
      padding:20px 0;
      .border-1px(@bline );
      border-bottom:1px solid @bline !important;
      .left{
        float:left;
        flex:1;
        padding-right:18px;
        .row1{
          height:42px;
          overflow:hidden;
          font-family:PingFangSC-Semibold;
          font-size: 16px;
          color: @b33 !important;
          line-height: 21px;
        }
        .row2{
          margin-top:18px;
          height:11px;
          display:inline-block;
          vertical-align:top;
          .top{ 
            border:1px solid @bred !important;
            width:17px;
            padding-right:2px;
            font-family:PingFangSC-Regular;
            font-size: 8px;
            color: @bred !important;
          }
          .datetme{
            width:45px;
            overflow:hidden;
            font-family:PingFangSC-Regular;
            font-size: 11px;
            color: @blight !important;
          }
          .sour{
            display:inline-block;
            width:53px;
            height:12px;
            overflow: hidden;
            font-family:PingFangSC-Regular;
            font-size: 11px;
            color: @blight !important;
          }
          .comments_img{
            padding-right:1px;
          }
          .comment{
            width:20px;
            font-family: PingFangSC-Regular;
            font-size: 11px;
            color: @blight !important;
          }
          .comment1{
            width:20px;
            font-family: PingFangSC-Regular;
            font-size: 11px;
            color: @blight !important;
          }

          .thumbUp{
            padding-right:1px;
          }
          .like{
            width:20px;
            font-family: PingFangSC-Regular;
            font-size: 11px;
            color: @blight !important;
          }
          .like1{
            position:relative;
            width:20px;
            font-family: PingFangSC-Regular;
            font-size: 11px;
            color: @blight !important;
            .plus{
              position:absolute;
              top:-3px;
              left:22px;
              font-size:10px;
              color: @blight;
            }
          }
          

        }
      }
      .right{
        float:left;
        flex:0 0 100px;
        padding-right:0px;
      }
    }

   .title2 {
      width:100%;
      height:220px;
      padding:20px 15px 20px 0;
      .border-1px(@bline );
      border-bottom:1px solid @bline;
      .top{
        height:16px;
        overflow:hidden;
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: @b33;
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
          border:1px solid @bred;
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
        .sour{
        
          display:inline-block;
          width:65px;
          padding-right:10px;
          height:12px;
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
          color:@blight;
        }
        .comment1{
         
          width:20px;
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
        .like1{
          position:relative;
          width:20px;
          font-family: PingFangSC-Regular;
          font-size: 11px;
          color: @blight;
          .plus{
              position:absolute;
              top:-3px;
              left:22px;
              font-size:10px;
              color: @light;
            }
        }

      }


    }
  
  }
  .bottomB {
    position:fixed;
    left:0;
    bottom:0;
    background:@bbg;
    .border-1px(@bline);
    .tab-image {
      display: flex;
      height: 24px;
      line-height: 24px;
      .tab-item {
        flex: 1;

        text-align: center;
        .tab-item1{
          display:inline-block;

          width:90px;
          height:30px;
          .icon_1{
            height:30px;
            background:url(../../assets/img/41_dark_news2.png) no-repeat center center;

            background-size:24px 24px;
          }
          .icon_2{
            height:30px;
            background:url(../../assets/img/42_dark_order2.png) no-repeat center center;
            background-size:24px 24px;
          }
          .icon_3{
            height:30px;
            background:url(../../assets/img/43_dark_me2.png) no-repeat center center;
            background-size:24px 24px;
          }

        }

        .router-link-exact-active{

          .icon_1{
            height:30px;
            background:url(../../assets/img/41_dark_news1.png) no-repeat center center;

            background-size:24px 24px;
          }
          .icon_2{
            height:30px;
            background:url(../../assets/img/42_dark_order1.png) no-repeat center center;
            background-size:24px 24px;
          }
          .icon_3{
            height:30px;
            background:url(../../assets/img/43_dark_me1.png) no-repeat center center;
            background-size:24px 24px;
          }
        }
      }

    }
    .tab-wrapper {
      display: flex;
      padding-top: 3px;
      height: 11px;
      line-height: 11px;
      font-size: 0;
      .tab-item {
        flex: 1;
        text-align: center;
        font-size: 11px;
        color: @btab;
        font-family: PingFangSC-Regular;
        &>a {
          text-decoration: none;
          &.active {
            color: @btab1;
          }
        }
      }
    }
  }


}
</style>
