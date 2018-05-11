<template>
  <div class="news" :id="theme">
    <header></header>
    <div class="tab">
      <span class="otitle">订阅</span>
      <span class="search" ></span>
    </div>
    <div class="news-list border-1px"  ref="newsColumn" >
      <ul  v-if="localSubscribe.length">
        <router-link   v-for="(news,index) in localSubscribe"  :key="index" :to="{path:'/detail/'+news.id}" tag="li">
          <v-newlist :news="news"></v-newlist>
        </router-link>
      </ul>
      <div class="nonono"v-else>
        空空如也，快去收藏
      </div>

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
  import BScroll from 'better-scroll'
  import {mapState,mapMutations} from 'vuex'
  import moment from 'moment'
  import newlist from './newlist'
  export default {

    data() {
      return {
        url:''

      }
    },
    props:{

    },
    methods: {
      getImage(){
        
        for(let i=0;i<this.localSubscribe.length;i++){
          for(let j=0;j<this.localSubscribe[i].images.length;j++){
            if(this.localSubscribe[i].images[j].type=='image'){
              if(j>0){
                let temp;
                temp=this.localSubscribe[i].images[0];
                this.localSubscribe[i].images[0]=this.localSubscribe[i].images[j];
                this.localSubscribe[i].images[j]=temp;
              }else{
                return
              }


            }
          }

        }
      },
      ...mapMutations([
        'REMOVE_SUBSCRIBE'
      ]),
      // 显示本地收藏标签
      local () {
        this.subscribes_tag = 'local'
        this.direction = 'subscribes-left'
        this.$refs.active.style.transform = 'translateX(2rem)'
      },
      selectNews(news, event) {
        if (!event._constructed) {
          return;
        };
        this.selectedNews = news;
        this.$refs.news.show();
      },
      _initScroll (){
        this.newsScroll = new BScroll(this.$refs.newsColumn, {
          click:true
        })
      },


    },
    computed:{
      ...mapState(['subscribes','localSubscribe']),
      theme(){
            return this.$store.state.theme
          }

    },
    components:{
      'v-footer':footer,
      'v-newlist':newlist
    },
    filters: {
      dateFormat (time) {
        return moment(time).startOf('mimute').fromNow()
      }
    },
    mounted(){
      let that=this;
      this.$nextTick(()=>{
        that.getImage(that);
      });
    }
  }
</script>

<style lang="less">
   @import (reference)'../../assets/less/common';
  .news{
    position:absolute;
    top: 0px;
 
    left:0;
    width:100%;
    height:667px;
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

      .otitle{
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
      padding:0px 15px 0 15px ;
      width:100%;
      height:551px;
      overflow:auto;
      .border-1px(@line);
      

    }
    .nonono{
      padding-top:20px;
      text-align:center;

    }
    .bottomB{
      position:fixed;
      left:0;
      bottom:0;
    }
}
#black{
    position:absolute;
    top: 0px;
   
    left:0;
    width:100%;
    height:667px;
    header{
      height:20px;
      background:@bg;
    }
    .tab{
      position:relative;
      height:45px;
      padding:15px 0 14px 0;
      line-height:16px;
      text-align:center;

      .otitle{
        display:inline-block;
        vertical-align:top;
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: @b33;
      }
      .search{
        display:inline-block;
        vertical-align:top;
        position:absolute;
        right:15px;
        width:16px;
        height:16px;
        background:url(../../assets/img/40_dark_search.png)no-repeat center center;
        background-size:16px 16px;
      }
    }
    .news-list{
      padding:0px 15px 0 15px ;
      width:100%;
      height:551px;
      overflow:auto;
      .border-1px(@bline);
      

    }
    .nonono{
      padding-top:20px;
      text-align:center;

    }
    .bottomB{
      position:fixed;
      left:0;
      bottom:0;
    }
}
</style>
