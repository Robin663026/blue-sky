<template>
<div class="main">
  <time_display></time_display>
  <div class="search">
    <div class="input"></div>
    <div class="cancel">取消</div>
  </div>
  <div class="content">
    <ul >
      <li>
        <div  class="con1">
          <div class="left1">
            <div class="row1">
              <span></span>
            </div>
            <div class="row2">
            <span class="top" >
              置顶
            </span>
              <span class="datetme">123</span>
              <span class="source"></span>
              <span class="comments_img"><img src="../../assets/img/5_icon_comment.png" ></span>
              <span class="comment" ></span>
              <span class="comment" >999</span>
              <span class="thumbUp"><img src="../../assets/img/6_icon_good.png" ></span>
              <span class="like" ></span>
              <span class="like">999</span>
            </div>
          </div>
          <div class="right1">
            <img src="">
          </div>
        </div>
        <div  class="con2">
          <div class="con2-top">
            <span></span>
          </div>
          <div class="con2-middle"><img src=""></div>
          <div class="con2-bottom"></div>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
  import time_display from '../time_display.vue';
    export default {
        data() {
            return {}
        },
      components:{
        time_display
      }
    }
</script>

<style scoped lang="less">
  @import '../../assets/css/main.less';
  .main {
    width:100%;
    .px2rem(height,1334);
    .search {
      .px2rem(height, 90);
      width: 100%;
      .input {
        .px2rem(width, 600);
        .px2rem(height, 70);
        .px2rem(border-radius, 10);
        background: #F1F3F5;
        .px2rem(margin-left, 30);
        .px2rem(margin-top, 8.8);
        .px2rem(margin-right, 33);
        .px2rem(margin-bottom, 11.2);
      }
    }
    .content{
      .px2rem(height,1203);
      width:100%;
      overflow:hidden;
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
    }

  }
</style>
