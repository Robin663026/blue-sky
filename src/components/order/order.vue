<template>
  <div class="news">
    <header></header>
    <div class="tab">
      <span class="title">订阅</span>
      <span class="search" ><img src="../../assets/img/3_icon_search.png" alt="" width="16"height="16"></span>
    </div>
    <div class="news-list border-1px"  ref="newsColumn" >
      <ul  v-if="localSubscribe.length">
        <router-link   v-for="(news,index) in localSubscribe"  :key="index" :to="{path:'/detail/'+news.id}" tag="li">
          <div class="title1 border-1px">
            <div class="left">
              <div class="row1">
                <span>{{news.title}}</span>
              </div>
              <div class="row2">
                <span class="datetme">{{news.time|dateFormat}}</span>
                <span class="sour">{{news.source}}</span>
                <span class="comments_img"><img src="../../assets/img/5_icon_comment.png" alt=""width="11"height="11"></span>
                <span class="comment" v-if="news.lengthC<=999">{{news.lengthC}}</span>
                <span class="comment" v-else>999</span>
                <span class="thumbUp"><img src="../../assets/img/6_icon_good.png" alt=""alt=""width="11"height="11"></span>
                <span class="like" v-if="news.lengthC<=999">{{news.lengthC}}</span>
                <span class="like" v-else>999</span>
              </div>
            </div>
            <div class="right">
              <img v-lazy='news.img[0].text' width="100" height="75">
            </div>
          </div>



        </router-link>
      </ul>
      <div v-else>
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
  export default {

    data() {
      return {
        url:''

      }
    },
    props:{

    },
    created(){
      var that=this;
      this.$nextTick(()=>{
        that.getImage(that);
      })
    },
    methods: {
      getImage(){
        for(let i=0;i<this.localSubscribe.length;i++){
          for(let j=0;j<this.localSubscribe[i].img.length;j++){
            if(this.localSubscribe[i].img[j].type=='image'){
              if(j>0){
                let temp;
                temp=this.localSubscribe[i].img[0];
                this.localSubscribe[i].img[0]=this.localSubscribe[i].img[j];
                this.localSubscribe[i].img[j]=temp;
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
    height:667px;
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
            width:45px;
            padding-right:10px;

            height:11px;
            overflow: hidden;
            font-family:PingFangSC-Regular;
            font-size: 11px;
            color: #A5A5A5;
            overflow: hidden;

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
