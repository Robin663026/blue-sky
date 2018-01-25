<template>
<div class="about">
  <time_display></time_display>
  <div class="heads">
    <div class="header1"><img src="../../assets/img/3_icon_search.png" ></div>
    <div class="header2">关于蓝穹</div>
  </div>
  <div class="contents">
    <p class="line1">蓝穹新闻订阅APP是一款新闻定向推送及订阅类的APP。</p>
    <p class="line2"> &nbsp;&nbsp;2016年12月1日，中国保监会发文批准招商局仁和人寿保险股份有限公司筹建。注册资本人民币50亿元，注册地深圳市。拟任董事长李建红，拟任总经理彭伟。</p>
    <p class="line3">招商局仁和人寿保险股份有限公司筹备组：</p>
    <p class="line4">你筹备组关于筹建招商局仁和人寿保险股份有限公司的申请及相关补正材料收悉。经研究，现批复如下：</p>
    <p class="line5">一、同意深圳市招融投资控股有限公司、中国移动通信集团公司、中国民航信息网络股份有限公司、深圳市投资控股有限公司、深圳市卓越创业投资有限责任公司、深圳光汇石油集团股份有限公司、深圳市前海金融控股有限公司、亿赞普（北京）科技有限公司等8家公司共同发起筹建招商局仁和人寿保险股份有限公司，注册资本人民币50亿元，注册地深圳市。拟任董事长李建红，拟任总经理彭伟。</p>
    <p class="line6">二、你筹备组应当自收到批准筹建通知之日起1年内完成筹建工作，筹建期间不得从事保险经营活动，未经批准不得变更投资人、拟任董事长和拟任总经理。</p>
    <p class="line7">三、你筹备组应当严格依照有关法律法规办理筹建事宜，并将筹建过程中的有关情况及时报告我会。</p>
    <p class="line8">四、筹建完毕，你筹备组应当及时上报开业申请。在我会验收合格并下达开业批复后，再到工商部门注册登记。</p>
    <div class="image1">
      <img src="../../assets/img/29_img.png" alt="">
      <p class="line9">图片1</p>
      <p class="line10">招商局仁和人寿保险股份有限公司</p>
    </div>
    <div class="image1">
      <img src="../../assets/img/30_img.png" alt="">
      <p class="line9">图片1</p>
      <p class="line10">招商局仁和人寿保险股份有限公司</p>
    </div>
    <div class="image1">
      <img src="../../assets/img/31_img.png" alt="">
      <p class="line9">图片1</p>
      <p class="line10">招商局仁和人寿保险股份有限公司</p>
    </div>
    <div class="image1">
      <img src="../../assets/img/32_img.png" alt="">
      <p class="line9">图片1</p>
      <p class="line10">招商局仁和人寿保险股份有限公司</p>
    </div>
    <div class="bottom">
      <div class="tel">
        <div class="con">联系我们</div>
        <div class="nub">236687</div>
      </div>
      <div class="more">
        更多联系方式
      </div>
      <div class="comp">
        <div class="about_com">关于公司</div>
        <div class="job">工作机会</div>
        <div class="lawyer">法律声明</div>
        <div class="respos">企业责任</div>
        <div class="map">网站地图</div>
      </div>
      <div class="follow">
        <div class="us"></div>
        <div class="image2">
          <img class="image3" src="../../assets/img/20_share_wechat2.png" alt="">
          <img class="image4" src="../../assets/img/21_share_sina.png" alt="">
        </div>
      </div>
    </div>
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
  .about{
    width:100%;
    .px2rem(height,1334);
    overflow:hidden;
    heads{
      .px2rem(height,91);
      .px2rem(padding-top,35);
      .px2rem(padding-bottom,23);
      width:100%;
      .border-1px(#E2E4E6);
      .header1{
        float: left;
        .px2rem(width,32);
        .px2rem(height,32);
        .px2rem(margin-left,30);
        img{
          .px2rem(width,32);
          .px2rem(height,32);
        }
      }
      .header2{
        float: left;
        .px2rem(margin-left,248);
        .px2rem(margin-right,310);
        .px2rem(width,130);
        .px2rem(height,32);
        font-family: PingFangSC-Semibold;
        /*font-size: 32px;*/
        .px2px(font-size,32);
        color: #333333;
        .px2rem(line-height,32);
      }
    }
    .contents{
      .px2rem(height,1203);
      width:100%;
      .px2rem(marin-top,26);
      .px2rem(margin-left,30);
      .px2rem(margin-right,30);
      .line1{
        .px2px(font-size,24);
        .px2rem(line-height,33);
        font-family:PingFang Regular;
        .px2rem(margin-bottom,16);
      }
      .line2{
        .px2px(font-size,24);
        .px2rem(line-height,33);
        font-family:PingFang Regular;
        .px2rem(margin-bottom,20);
      }
      .line3{
        .px2px(font-size,24);
        .px2rem(line-height,33);
        font-family:PingFangSC-Semibold;
        .px2rem(margin-bottom,8);
      }
      .line4{
        .px2px(font-size,24);
        .px2rem(line-height,33);
        font-family:PingFang Regular;
        .px2rem(margin-bottom,10);
      }
      .line5{
        .px2px(font-size,24);
        .px2rem(line-height,33);
        font-family:PingFang Regular;
        .px2rem(margin-bottom,10);
      }
      .line6{
        .px2px(font-size,24);
        .px2rem(line-height,33);
        font-family:PingFang Regular;
        .px2rem(margin-bottom,10);
      }
      .line7{
        .px2px(font-size,24);
        .px2rem(line-height,33);
        font-family:PingFang Regular;
        .px2rem(margin-bottom,10);
      }
      .line8{
        .px2px(font-size,24);
        .px2rem(line-height,33);
        font-family:PingFang Regular;
        .px2rem(margin-bottom,40);
      }
      .image1{
        .px2rem(height,635);
        .px2rem(margin-bottom,60);
        img{
          .px2rem(height,436);
          .px2rem(width,690);
        }
        .line9{
          .px2rem(margin-top,30);
          .px2rem(margin-bottom,10);
          .px2rem(height,59);
          .px2rem(line-height,59);
          .px2px(font-size,42);
          left:0;
        }
        .line10{
          left:0;
          .px2rem(line-height,40);
          .px2rem(height,40);
          .px2px(font-size,28);
        }
      }
      .bottom{
        .px2rem(height,690);
        background: #F1F3F5;
        width:100%;
        .px2rem(padding,30);
        .tel{
          .px2rem(height,151);
          .border-1px(#E2E4E6);
          .con{
            font-family:PingFangSC-Semibold;
            .px2px(font-size,30);
            .px2rem(margin-top,40);
            .px2rem(margin-bottom,22);
          }
          .nub{
            font-family:PingFang Regular;
            .px2px(font-size,28);

            .px2rem(margin-bottom,30);
          }
        }
        .more{
          .px2rem(height,91);
          .border-1px(#E2E4E6);
          font-family:PingFangSC-Semibold;
          .px2px(font-size,30);
          .px2rem(margin-top,30);
          .px2rem(margin-bottom,30);
        }
        .comp{
          .px2rem(height,291);
          .border-1px(#E2E4E6);
          .about_com{
            font-family:PingFangSC-Semibold;
            .px2px(font-size,30);
            .px2rem(margin-top,30);
            .px2rem(margin-bottom,22);
          }
          .job{
            font-family:PingFang Regular;
            .px2px(font-size,28);
            .px2rem(margin-bottom,22);
          }
          .lawyer{
            font-family:PingFang Regular;
            .px2px(font-size,28);
            .px2rem(margin-bottom,22);
          }
          .respos{
            font-family:PingFang Regular;
            .px2px(font-size,28);
            .px2rem(margin-bottom,22);
          }
          .map{
            font-family:PingFang Regular;
            .px2px(font-size,28);
            .px2rem(margin-bottom,30);
          }
        }
        .follow{
          .px2rem(height,157);
          .border-1px(#E2E4E6);
          .us{
            font-family:PingFangSC-Semibold;
            .px2px(font-size,30);
            .px2rem(margin-top,30);
            .px2rem(margin-bottom,60);
          }
          .image2{
            .image3{
              .px2rem(height,40);
              .px2rem(width,40);
              .px2rem(margin-right,20);
            }
            .image4{
              .px2rem(height,40);
              .px2rem(width,40);
            }
          }
        }

      }
    }
  }
</style>
