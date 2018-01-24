<template>
  <div class="me"  >
    <time_display></time_display>
    <div class="heads">
我的
    </div>
    <div class="my_image">
      <img src="../../assets/img/23_img_login2.png" alt="">
    </div>

    <div class="collects">
      <img src="../../assets/img/24_collection.png" alt="">
      <div class="history">收藏与历史</div>
    </div>
    <div class="white"></div>
    <div class="news">
      <div class="message">
        <span class="message1">消息通知</span>
        <span class="icon1"><img src="../../assets/img/4_icon_back.png" alt=""></span>
      </div>
      <div class="module">
        <span class="message2">夜间模式</span>
        <span class="icon2"></span>
      </div>
    </div>
    <div class="white"></div>
    <div class="about">
      <div class="about1">
      <span class="about2">关于</span><span class="icon1"><img src="../../assets/img/4_icon_back.png" alt=""></span>
      </div>
      <div class="thumb">
        <span class="thumb1">赞过的</span><img class="icon1" src="../../assets/img/4_icon_back.png" alt="">
      </div>
      <div class="now">
        <span class="now1">当前版本</span><span class="now2">1.0</span>
      </div>
    </div>
    <div class="white1"></div>
  <foots>

  </foots>
  </div>
</template>
<script>

  import foots from '../foots'

  import time_display from '../time_display'
    export default {
        data() {
          return {

          }
        },
      components:{

          foots,
        time_display

      }
    }
</script>
<style scoped lang="less">
  @import '../../assets/css/main.less';
  .me{
    width:100%;
    top:0;
    right:0;
    left:0;
    bottom:0;

    .heads{
      .px2rem(height,90);
      .px2px(font-size,32);
      .px2rem(line-height,33);
      .px2rem(margin-left,343);
      .px2rem(margin-right,342);
      .px2rem(margin-top,35);
      .px2rem(margin-bottom,23);
      .px2rem(width,65);
      .px2rem(height,32);
      font-family:PingFangSC-Semibold;


    }
    .my_image{
      .px2rem(height,412);
      .border-top(white);
      .border-1px(white);
      background-image:url('../../assets/img/22_img_login.png');
      img{
        .px2rem(width,120);
        .px2rem(height,120);
      }

      .px2rem(padding-top,80);
      .px2rem(padding-left,315);
      .px2rem(padding-right,315);
      .px2rem(padding-bottom,210);
    }
    .collects{
      .px2rem(height,186);

      img{
        .px2rem(width,110);
        .px2rem(height,110);
        .px2rem(margin-top,1);
        .px2rem(margin-left,320);
        .px2rem(margin-right,320);
        .px2rem(margin-bottom,10);
      }
      .history{
        .px2rem(width,122);
        .px2rem(height,24);
        .px2rem(margin-left,314);
        .px2rem(margin-right,314);
        .px2rem(margin-bottom,51);
        .px2px(font-size,24);
        .px2rem(line-height,25);
        font-family:PingFang Regular;
      }
    }
    .white{
      background:#E2E4E6;
      .px2rem(height,10);
    }
    .news{
      .px2rem(height,181);
      .px2rem(margin-left,102);
      .message{
        .px2rem(height,91);
        .px2rem(width,648);
        .px2rem(padding-right,30);
        .border-1px(#E2E4E6);
        .message1{
          .px2rem(width,114);
          .px2rem(height,28);
          .px2rem(margin-top,31);
          .px2rem(margin-bottom,31);
          .px2rem(margin-right,472);
          .px2px(font-size,28);
          font-family:PingFang Regular
        }
        .icon1{
          .px2rem(width,32);
          .px2rem(height,32);
          .px2rem(margin-top,29);
          .px2rem(margin-bottom,29);

          transform: rotate(180deg);
        }
      }
      .module{
        .px2rem(height,90);
        .px2rem(width,648);
        .px2rem(padding-right,30);
        .message2{
          .px2rem(width,122);
          .px2rem(height,28);
          .px2rem(margin-top,31);
          .px2rem(margin-bottom,31);
          .px2px(font-size,28);
          font-family:PingFang Regular;
        }
        .icon{
          .px2rem(width,51);
          .px2rem(height,31);
          .px2rem(margin-top,30);
          .px2rem(margin-bottom,29);
          .px2rem(margin-left,453);
        }

      }

    }
    .about{
      .px2rem(height,273);
      .px2rem(margin-left,102);
      .about1{
        .px2rem(height,91);
        .border-1px(white);
        .about2{
          .px2rem(width,57);
          .px2rem(height,28);
          .px2rem(margin-top,31);
          .px2rem(margin-bottom,31);
          .px2rem(margin-right,529);
          .px2px(font-size,28);
          font-family:PingFang Regular;
        }
        .icon1{
          .px2rem(width,32);
          .px2rem(height,32);
          .px2rem(margin-top,29);
          .px2rem(margin-bottom,29);
        }
      }
      .thumb{
        .px2rem(height,91);
        .border-1px(white);
        .thumb1{
          .px2rem(width,86);
          .px2rem(height,28);
          .px2rem(margin-top,31);
          .px2rem(margin-bottom,31);
          .px2rem(margin-right,500);
          .px2px(font-size,28);
          font-family:PingFang Regular;
        }
        .icon1{
          .px2rem(width,32);
          .px2rem(height,32);
          .px2rem(margin-top,29);
          .px2rem(margin-bottom,29);
        }
      }
      .now{
        .px2rem(height,90);
        .now1{
          .px2rem(width,114);
          .px2rem(height,28);
          .px2rem(margin-top,34);
          .px2rem(margin-bottom,29);
          .px2rem(margin-right,467);
          .px2px(font-size,28);
          font-family:PingFang Regular;
        }
        .now2{
          .px2rem(width,37);
          .px2rem(height,28);
          .px2rem(margin-top,29);
          .px2rem(margin-bottom,29);
          color: #A5A5A5;
          .px2px(font-size,28);
          font-family:PingFang Regular;
        }
      }

    }
    .white1{
      background:#E2E4E6;
      .px2rem(height,32);
    }

  }
</style>
