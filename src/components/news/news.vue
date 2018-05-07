<template>
<div class="news" :id="theme">
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
        <newslist :news="news"></newslist>
      </router-link>
    </ul>


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
        axios.get('http://rap2api.taobao.org/app/mock/3894/data/newsList').then((response)=>{
          this.press=response.data.newsList;
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
  position:absolute;
  top: 0px;
  bottom:50px;
  left:0;
  width:100%;
  header{
    width:100%;
    height:20px;
    background:rgba(0,0,0,0.00);
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
      color: @33;
    }
    .search{
      display:inline-block;
      vertical-align:top;
      position:absolute;
      right:15px;
    }
  }
  .news-list{
    padding:0px 0px 0 15px ;
    width:100%;
    height:551px;
    overflow:auto;
    .border-1px(@line);
  }

}
#black{
  header{ 
    background:@bg1;
  }
  .tab{
    .title{   
      color: @b33;
    } 
  }
  .news-list{
    .border-1px(@bline);
    .title1{
      height:115px;
      width:100%;
      display:flex;
      padding:20px 0;
      .border-1px(@bline);
      border-bottom:1px solid @bline;
      .left{
        float:left;
        flex:1;
        padding-right:18px;
        .row1{
          height:42px;
          overflow:hidden;
          font-family:PingFangSC-Semibold;
          font-size: 16px;
          color: @b33;
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
            color: @bred;
          }
          .datetme{
            width:45px;
            overflow:hidden;
            font-family:PingFangSC-Regular;
            font-size: 11px;
            color: @blight;
          }
          .sour{
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
            width:20px;
            font-family: PingFangSC-Regular;
            font-size: 11px;
            color: @blight;
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
            width:20px;
            font-family: PingFangSC-Regular;
            font-size: 11px;
            color: @blight;
          }
          .like1{
            width:20px;
            font-family: PingFangSC-Regular;
            font-size: 11px;
            color: @blight;
          }
          

        }
      }
      .right{
        float:left;
        flex:0 0 100px;
        padding-right:15px;
      }
    }

   .title2 {
      width:100%;
      height:220px;
      padding:20px 15px 20px 0;
      .border-1px(@bline);
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
          height:11px;
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
         
          width:20px;
          font-family: PingFangSC-Regular;
          font-size: 11px;
          color: @blight;
        }

      }


    }
  
  }
  .bottomB {
    position:fixed;
    bottom:0px;
    left:0px;
    width: 100%;
    padding: 7px 39px 5px 39px;
    height: 50px;
    z-index:200;
    .border-1px(bc);
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
