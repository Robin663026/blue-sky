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
  @import (reference)'../../assets/css/common';
.news{
  position:absolute;
  top: 0px;
  bottom:50px;
  left:0;
  width:100%;
  header{
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
  }

}
</style>
