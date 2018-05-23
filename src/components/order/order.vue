<template>
  <div class="onews" :id="theme">
    <header></header>
    <div class="otab">
      <span class="otitle">订阅</span>
      <span class="search" ></span>
    </div>
    <div class="onews-list border-1px"  ref="newsColumn" >
      
        <ul  v-if="localSubscribe.length">
        <router-link   v-for="(news,index) in localSubscribe"  :key="index" :to="{path:'/detail/'+news.id}" tag="li">
          <v-newlist :news="news"></v-newlist>
        </router-link>
      </ul>
        <div class="ononono"v-else>
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
.onews{
  position:relative;
  top: 0px;
  left:0;
  width:100%;
  header{
    width:100%;
    height:20px;
    background:@bg1;
  }
  .otab{
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
  .onews-list{
    
    width:100%;
    padding:0px 15px 0px 15px ;
    .border-1px(@line);
    width:100%;
    position:fixed !important;
    bottom:50px;
    top:65px;
    overflow:auto;
    .ononono{
      width:100%;
      padding-top:20px;
      text-align:center;
    }
    
    
  }
  .bottomB{
    position:fixed;
    left:0;
    bottom:0;
    height:50px;
  }
}
#black{
  header{ 
    background:@bg1;
  }
  .otab{
    .otitle{   
      color: @b33;
    } 
    .search{
      background:url(../../assets/img/40_dark_search.png)no-repeat center center;
      background-size:16px 16px;
    }
  }
  .onews-list{
    background:@bbg;
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
            border:1px solid @bred;
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
            display:inline-block;
            width:53px;
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
         
          width:20px;
          font-family: PingFangSC-Regular;
          font-size: 11px;
          color: @blight;
        }

      }


    }
  
  }
  .bottomB {
    
    padding: 7px 39px 5px 39px;
    height: 50px;
    z-index:200;
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
