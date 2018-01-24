<template>
<div v-show="showFlag" class="news" >
  <time_display></time_display>
  <div class="show">
    <div class="back"><img src="../../assets/img/4_icon_back.png" alt=""></div>
  </div>
  <div class="content">
    <div class="title"></div>
    <div class="some">

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
  import time_display from '../time_display.vue';

    export default {
      data() {
        return {
          showFlag:false
        };
      },
      props:{
        news:{
          type:Object
        }
      },
      methods:{
          show(){
            this.showFlag=true;

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

    .show{
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
        background:red;

      }
      .some{

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
