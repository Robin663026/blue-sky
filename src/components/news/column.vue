<template>
<div class="main" ref="newsColumn">
  <ul>
    <li v-for="(item,index) in press">
      <div v-if="item.image.position==='right'" class="con1">
        <div class="left1">
          <div class="row1">
            <span>{{item.titile}}</span>
          </div>
          <div class="row2">
            <span v-if="item.top===true" class="top" >
              置顶
            </span>
            <span class="datetme">123</span>
            <span class="source">{{item.source}}</span>
            <span class="comments_img"><img src="../../assets/img/5_icon_comment.png" alt=""></span>
            <span class="comment" v-if="item.comments.count<=999">{{item.comments.count}}</span>
            <span class="comment" v-else>999</span>
            <span class="thumbUp"><img src="../../assets/img/6_icon_good.png" alt=""></span>
            <span class="like" v-if="item.comments.thumbUp<=999">{{item.comments.thumbUp}}</span>
            <span class="like" v-else>999</span>
          </div>
        </div>
        <div class="right1">
          <img :src="item.image.url">
        </div>
      </div>
      <div v-else class="con2">
        <div class="con2-top">
          <span>{{item.titile}}</span>
        </div>
        <div class="con2-middle"><img :src="item.image.url"></div>
        <div class="con2-bottom"></div>
      </div>
    </li>
  </ul>


  <!--<div class="con3">-->
    <!--<div class="con3-top"></div>-->
    <!--<div class="con3-bottom"></div>-->
  <!--</div>-->
  <!--&lt;!&ndash;<details :datails="selectedNews" ref="details"></details>&ndash;&gt;-->
</div>
</template>

<script>
  import BScroll from 'better-scroll';
  import details from './details.vue';
  const ERR_OK=0;
    export default {
      props:{
        news:{
          type:Object
        }
      },
      created(){
        this.$http.get('/api/news').then((response)=>{
          response=response.body;
          if(response.errno===ERR_OK){
            this.press=response.data;
            this.$nextTick(()=>{
              this._initScroll();
            });
          }
        });
      },
        data() {
            return {
              press:[],
              selectedNews:{}
            };
        },
      methods:{
          _initScroll(){
            this.menuScroll=new BScroll(this.$refs.newsColumn,{
              click:true
            });

          },
//          selectNews(details,event){
//            if(!event._constructed){
//              return;
//            }
//            this.selectedDetail=details;
//            this.$refs.details.show();
//          },

      },
      components:{
//          details
      }
    };
</script>

<style scoped lang="less">
  @import '../../assets/css/common.less';
  @import '../../assets/css/border-1px.less';
.main{

  width:100%;
  .px2rem(padding-left,30);



  .con1{

    .px2rem(padding-right,31);
    .px2rem(padding-bottom,40);
    .px2rem(padding-top,40);
    .px2rem(height,231);
    .border-1px(#E2E4E6);
    .left1{
      float:left;
      .px2rem(width,453);
      .px2rem(height,150);
      .px2rem(margin-right,36);
      .row1{
        .px2rem(height,84);
        .px2rem(margin-bottom,44);
        font-family:PingFangSC-Semibold;
      }
      .row2{
        .px2rem(height,22);
        .px2rem(margin-top,0);
        .px2rem(margin-left,0);
        .px2rem(margin-right,0);
        .px2rem(margin-bottom,0);
        .top{
          .px2rem(width,40);
          .px2rem(height,20);
          text-align:center;
          font-family:PingFang Regular;
          .px2rem(margin-right,6);
          .px2rem(margin-top,0);
          color: #FF0000;
          .px2px(font-size,16);
          .border-left(red);
          .border-1px(red);
          .border-right(red);
          .border-top(red);

        };
        .datetme{
          .px2rem(width,90);
          .px2rem(height,22);
          font-family:PingFang Regular;
          .px2rem(margin-right,10);
          .px2px(font-size,22);
          color: #A5A5A5;
        };
        .source{
          .px2rem(width,90);
          .px2rem(height,22);
          font-family:PingFang Regular;
          overflow: hidden;
          .px2rem(margin-right,20);
          .px2px(font-size,22);
          color:#A5A5A5;

        };
        .comments_img{
          img{
            .px2rem(width,22);
            .px2rem(height,22);
          }
        }
        .comment{
          .px2px(font-size,22);
          color:#A5A5A5;
          .px2rem(width,41);
          .px2rem(height,41);
        };
        .thumbUp{
          img{
            .px2rem(width,22);
            .px2rem(height,22);
          }
        }
        .like{
          .px2px(font-size,22);
          color:#A5A5A5;
          .px2rem(width,41);
          .px2rem(height,41);
        };
      }
    }
    .right1{
      float:left;
      .px2rem(width,200);
      .px2rem(height,150);
      img{
        .px2rem(width,200);
        .px2rem(height,150);
      }

    }
  }

  .con2{

    .border-1px(#E2E4E6);
    .px2rem(height,440);
    .px2rem(padding-top,40);
    .con2-top{
      .px2rem(height,32);
      .px2rem(margin-bottom,20);
      font-family:PingFangSC-Semibold;
    }
    .con2-middle{
      .px2rem(height,270);
      .px2rem(width,690);
      .px2rem(margin-right,30);
      .px2rem(margin-bottom,15);
      img{
        .px2rem(height,270);
        .px2rem(width,690);
      }
    }
    .con2-bottom{
      .px2rem(height,62);
      .px2rem(padding-bottom,40);
    }

  }
  .con3{

    .px2rem(height,200);
    .px2rem(padding-top,40);
    .px2rem(padding-bottom,30);
    .con3-top{
      .px2rem(height,42);
      .px2rem(margin-bottom,25);
    }
    .con3-bottom{
      .px2rem(height,62);
      .px2rem(padding-bottom,40);
      .border-1px(#E2E4E6);

    }
  }


}
</style>
