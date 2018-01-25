<template>
<div v-show="showFlag" class="news" >
  <time_display></time_display>
  <div class="shows">
    <div class="back"><img src="../../assets/img/4_icon_back.png" alt=""></div>
  </div>
  <div class="content">
    <div class="title"></div>
    <div class="some">
      <div class="some_left"><img src="../../assets/img/35_img_54X54.png"></div>
      <div class="some_middle">
        <div class="top">UC新闻</div>
        <div class="bottom">
          <div class="red">置顶</div>
          <div class="time"></div>
        </div>
      </div>
      <div class="some_right" >
        <div class="order">订阅</div>
      </div>

    </div>
    <div class="contents">
      <div class="con"></div>
    </div>

  </div>
  <div class="bottom">
    <div class="left">
      <span class="write_comment"><img src="../../assets/img/12_write_comment.png" alt=""></span>
      <span class="write">写评论</span>
    </div>
    <div class="right">
      <span class="comment"><img src="../../assets/img/13_comment.png" alt=""></span>
      <span class="collect"><img src="../../assets/img/14_collect.png" alt=""></span>
      <span class="share"><img src="../../assets/img/13_share.png" alt=""></span>
    </div>
  </div>

</div>
</template>

<script>
  import time_display from "../time_display.vue";

    export default {
      data() {
        return {
          showFlag:false
        };
      },
      props: {
        news: {
          type: Object
        }
      },
      methods:{
          show(){
            this.showFlag=true;

          },
        hide(){
            this.showFlag=false;
        }
      },
      components:{
        time_display
      }

    }
</script>

<style scoped lang="less">
@import '../../assets/css/main.less';
  .news{

    position:fixed;
    left:0;
    top:0;
    bottom:0;
    right:0;
    z-index:30;
    width:100%;
    background-color:white;

    .shows{
      .px2rem(height,91);
      width:100%;
      background:white;
      .px2rem(padding-left,30);
      .px2rem(padding-top,27);
      .px2rem(padding-bottom,31);
      .back{
        .px2rem(width,32);
        .px2rem(height,32);
        .border-1px(#E2E4E6);
      }

    }
    .content{
      .px2rem(height,1102);
      width:100%;
      background:white;
      .px2px(margin-left,30);
      .px2px(margin-right,30);
      .px2px(margin-top,30);
      .title{
        .px2rem(width,677);
        .px2rem(height,104);
        .px2rem(margin-right,13);
        .px2rem(line-height,52);
        font-family:PingFangSC-Semibold;
        .px2px(font-size,42);
      }
      .some{
        .some_left{
          float:left;
          .px2rem(width,54);
          .px2rem(height,54);
          .px2rem(margin-top,16);
          .px2rem(margin-left,29);
          .px2rem(margin-right,17);
          .px2rem(margin-bottom,31);

        }
        .some_middle{
          float:left;
          .px2rem(width,130);
          .px2rem(height,53);
          .px2rem(margin-top,18);
          .px2rem(margin-bottom,30);

          .top{
            font-family:PingFangSC-Semibold;
            .px2px(font-size,24);
            .px2rem(line-height,25);
            .px2rem(width,85);
            .px2rem(height,24);
            .px2rem(margin-bottom,7);
          }
          .bottom{
            .red{
              .px2rem(width,34);
              .px2rem(height,19);
              .px2rem(margin-right,6);
              color:red;
              .border-1px(red);
              .border-top(red);
              .border-left(red);
              .border-right(red);
              font-family:PingFang Regular;
              .px2px(font-size,16);
              .px2rem(line-height,19);
            }
            .time{
              .px2rem(width,90);
              .px2rem(height,22);
              .px2rem(line-height,23);
              .px2px(font-size,22);
              font-family:PingFang Regular;
              color:#A5A5A5;
            }
          }
        }
        .some_right{
          float:left;
          .px2rem(width,106);
          .px2rem(height,52);
          .px2rem(border-radius,6);
          .px2rem(margin-left,380);
          .px2rem(margin-right,30);
          .px2rem(margin-top,18);
          .px2rem(margin-bottom,31);
          background:#008CFF;
          .order{
            font-family:PingFangSC-Semibold;
            .px2px(fong-size,24);
            .px2rem(line-height,25);
            color:#FFFFFF;
            .px2rem(width,49);
            .px2rem(height,24);
            .px2rem(margin-top,14);
            .px2rem(margin-left,29);
            .px2rem(margin-right,28);
            .px2rem(margin-bottom,14);
          }
        }
      }
      .contents{

        width:100%;
        .px2rem(padding-left,30);
        .px2rem(padding-right,30);

        .con{
          .px2px(font-size,32);
          .px2rem(letter-spacing,1);
          .px2rem(margin-top,30);
          font-family:PingFang Regular;
          .px2rem(line-height,48);
          background:red;
        }
      }

    }
    .bottom{
      background:white;
      .px2rem(height,101);
      width:100%;
      .px2rem(padding-left,20);
      .px2rem(padding-right,30);
      .left{
        float:left;
        .px2rem(width,300);
        .px2rem(height,60);
        .px2rem(margin-top,20);
        .px2rem(margin-bottom,20);
        .px2rem(border-radius,100);
        background: #F1F3F5;
        .write_comment{
          .px2rem(width,40);
          .px2rem(height,40);
          .px2rem(margin-left,30);
          .px2rem(margin-right,10);
          .px2rem(margin-top,10);
          .px2rem(margin-bottom,10);

        }
        .write{
          .px2rem(width,86);
          .px2rem(height,28);
          .px2rem(margin-top,14);
          .px2rem(margin-bottom,18);
          font-family:PingFang Regular;
          .px2px(font-size,28);
          color: #A5A5A5;
        }
      }
      .right{
        float:left;
        .px2rem(margin-top,30);
        .px2rem(margin-bottom,30);
        .px2rem(margin-left,200);
        .comment,collect{
          .px2rem(width,40);
          .px2rem(height,40);
          .px2rem(margin-right,40);
        }

        .share{
          .px2rem(width,40);
          .px2rem(height,40);
        }


      }

    }
  }

</style>
