<template>
  <div class="news">
    <header></header>
    <div class="tab">
      <span class="title">订阅</span>
      <span class="search" ><img src="../../assets/img/3_icon_search.png" alt="" width="16"height="16"></span>
    </div>
    <div class="news-list border-1px"  ref="newsColumn" >
      <ul  v-if="localSubscribe.length">
        <li   v-for="(news,index) in localSubscribe"  >
            <div class="title1 border-1px">
              <div class="left">
                <div class="row1">
                  {{news.name}}
                </div>
              </div>
            </div>


        </li>
      </ul>
      <div v-else>
        空空如也，快去收藏
      </div>

    </div>



    <v-footer></v-footer>


  </div>
</template>

<script>
  const ERR_OK=0;
  import footer from '../footer/footer.vue'
  import BScroll from 'better-scroll'
  import {mapState,mapMutations} from 'vuex'
  export default {
    data() {
      return {
        press:[]

      }
    },
    props:{
      news:{
        type:Object
      }
    },
    created(){
      this.$http.get('../../../static/date/newsList.json').then((response)=>{
        this.press=response.data;
      },(response)=>{
        console.log('服务器请求失败');
      });
    },
    methods: {
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
      time(){
        let date=new Date();
        let year=date.getFullYear();
        let month=date.getMonth()+1;
        let day=date.getDate();
        let hour=date.getHours();
        let minu=date.getMinutes();
        let get="2017-12-22 11:20:56";
        let year1=get.slice(0,4);
        let month1=get.slice(5,7);
        let day1=get.slice(8,10);
        let hour1=get.slice(11,13);
        let minu1=get.slice(14,16);
        if(year-year1>0){
          let a=year-year1;
          return  a+"年前";
        }else{
          if(month-month1>0){
            let b=month-month1;
            return  {b}+"月前";
          }else{
            if(day-day1>0){
              let c=day-day1;
              return  c+"天前 ";
            }else{
              if(hour-hour1>0){
                let d=hour-hour1;
                return  d+"小时前 ";
              }else{
                return  `刚刚 `;
              }
            }
          }
        }

      }
    },
    filters:{

    },
    components:{
      'v-footer':footer
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
      overflow:hidden;
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
              width:45px;
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
