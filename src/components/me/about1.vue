<template>
  <div class="pc-about"  >
    <div class="heads">
      <span class="title">关于蓝穹</span>
      <router-link to="/me"><img class="icon" src="../../assets/img/4_icon_back.png" width="16" height="16"></router-link>

    </div>
    <div class="contents border-1px">
      <p class="line1">蓝穹新闻订阅APP是一款新闻定向推送及订阅类的APP。</p>
      <p class="line2">2016年12月1日，中国保监会发文批准招商局仁和人寿保险股份有限公司筹建。注册资本人民币50亿元，注册地深圳市。拟任董事长李建红，拟任总经理彭伟。</p>
      <p class="line3">招商局仁和人寿保险股份有限公司筹备组：</p>
      <p class="line4">你筹备组关于筹建招商局仁和人寿保险股份有限公司的申请及相关补正材料收悉。经研究，现批复如下：</p>
      <p class="line5">一、同意深圳市招融投资控股有限公司、中国移动通信集团公司、中国民航信息网络股份有限公司、深圳市投资控股有限公司、深圳市卓越创业投资有限责任公司、深圳光汇石油集团股份有限公司、深圳市前海金融控股有限公司、亿赞普（北京）科技有限公司等8家公司共同发起筹建招商局仁和人寿保险股份有限公司，注册资本人民币50亿元，注册地深圳市。拟任董事长李建红，拟任总经理彭伟。</p>
      <p class="line6">二、你筹备组应当自收到批准筹建通知之日起1年内完成筹建工作，筹建期间不得从事保险经营活动，未经批准不得变更投资人、拟任董事长和拟任总经理。</p>
      <p class="line7">三、你筹备组应当严格依照有关法律法规办理筹建事宜，并将筹建过程中的有关情况及时报告我会。</p>
      <p class="line8">四、筹建完毕，你筹备组应当及时上报开业申请。在我会验收合格并下达开业批复后，再到工商部门注册登记。</p>
      <div class="image1">
        <div class="image2">
          <img src="../../assets/img/29_img.png" width="285" height="180">
          <p class="line9">图片1</p>
          <p class="line10">招商局仁和人寿保险股份有限公司</p>
        </div>
        <div class="image3">
          <img src="../../assets/img/30_img.png"width="285" height="180">
          <p class="line9">图片2</p>
          <p class="line10">招商局仁和人寿保险股份有限公司</p>
        </div>
      </div>
      <div class="image4">
        <div class="image5">
          <img src="../../assets/img/31_img.png" width="285" height="180">
          <p class="line9">图片3</p>
          <p class="line10">招商局仁和人寿保险股份有限公司</p>
        </div>
        <div class="image6">
          <img src="../../assets/img/32_img.png"width="285" height="180">
          <p class="line9">图片4</p>
          <p class="line10">招商局仁和人寿保险股份有限公司</p>
        </div>
      </div>


      <div class="bottom">
        <div class="tel">
          <div class="con">联系我们</div>
          <div class="nub">236687</div>
          <div class="more">更多联系方式</div>
        </div>
        <!--<div class="more border-1px">-->
        <!--更多联系方式-->
        <!--</div>-->
        <div class="comp border-1px">
          <div class="about22">关于公司</div>
          <div class="job">工作机会</div>
          <div class="lawyer">法律声明</div>
          <div class="response">企业责任</div>
          <div class="map">网站地图</div>
        </div>
        <div class="follow border-1px">
          <div class="us">关注我们</div>
          <div class="icon">
            <span class="wechat"><img  src="../../assets/img/20_share_wechat2.png" alt=""width="20" height="20"></span>
            <span class="sina"><img src="../../assets/img/21_share_sina.png" alt=""width="20" height="20"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>

<style lang="less">
  @import (reference)'../../assets/css/common';
  .pc-about{
    position:fixed;
    bottom:0;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:white;
    overflow:auto;
    z-index:200;
    .heads{
      height:45px;
      width:100%;
      position:relative;
      text-align:center;
      padding:0 0;
      line-height:16px;
      .title{
        display:inline-block;
        vertical-align:top;
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: @33;
      }
      .icon{
        display:inline-block;
        vertical-align:top;
        position:absolute;
        top:15px;
        left:15px;
      }
    }
    .contents{

      .border-1px(@line);
      width:100%;
      padding:20px 220px 40px 220px;
      .line1,.line2{
        text-indent: 2em;
        padding-bottom:20px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: @33;
      }
      .line3{
        padding-bottom:5px;
        font-family: PingFangSC-Semibold;
        font-size: 12px;
        color: @33;
      }
      .line4,.line5,.line6,.line7{
        padding-bottom:3px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: @33;

      }
      .line8{
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: @33;
      }
      .image1{
        padding-top:40px;
        padding-bottom:15px;
        .image2{
          display:inline-block;
          vertical-align:top;
          img{
            margin-right:15px;
          }
          .line9{
            padding:15px 0 5px 0;
            font-family:PingFangSC-Regular;
            font-size: 21px;
            color: @33;
          }
          .line10{
            font-family:PingFangSC-Regular;
            font-size: 14px;
            color: @33;
          }
        }
        .image3{
          display:inline-block;
          vertical-align:top;
          img{

          }
          .line9{
            padding:15px 0 5px 0;
            font-family:PingFangSC-Regular;
            font-size: 21px;
            color: @33;
          }
          .line10{
            font-family:PingFangSC-Regular;
            font-size: 14px;
            color: @33;
          }
        }
      }
      .image4{
        padding-top:15px;
        padding-bottom:58px;
        .image5{
          display:inline-block;
          vertical-align:top;
          img{
            margin-right:15px;
          }
          .line9{
            padding:15px 0 5px 0;
            font-family:PingFangSC-Regular;
            font-size: 21px;
            color: @33;
          }
          .line10{
            font-family:PingFangSC-Regular;
            font-size: 14px;
            color: @33;
          }
        }
        .image6{
          display:inline-block;
          vertical-align:top;
          img{
          }
          .line9{
            padding:15px 0 5px 0;
            font-family:PingFangSC-Regular;
            font-size: 21px;
            color: @33;
          }
          .line10{
            font-family:PingFangSC-Regular;
            font-size: 14px;
            color: @33;
          }
        }
      }
    }
    .bottom{
      position:absolute;
      left:0;
      height:174px;
      background: #F1F3F5;
      width:100%;
      padding:30px 126px 0 126px;
      display:flex;
      .tel{
        flex:1;
        text-align:center;
        height:75px;
        .con{
          padding-bottom:11px;
          font-family:PingFangSC-Semibold;
          font-size: 15px;
          color: @33;
        }
        .num{
          font-family:PingFangSC-Regular;
          font-size: 14px;
          color: @88;
        }
        .more{
          padding-top:40px;
          font-family: PingFangSC-Semibold;
          font-size: 15px;
          color: @33;
        }
      }
      .comp{
        flex:1;
        text-align:center;
        .about22{
          padding-bottom:11px;
          font-family: PingFangSC-Semibold;
          font-size: 15px;
          color: @33;
        }
        .lawyer,.job,.response,.map{
          padding-bottom:11px;
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: @88;
        }

      }
      .follow{
        flex:1;
        text-align:center;
        height:79px;
        .us{
          padding-bottom:11px;
          height:15px;
          font-family:PingFangSC-Semibold;
          font-size: 15px;
          color: @33;
        }
        .icon{
          height:20px;
          .wechat{
            display:inline-block;
            vertical-align: top;
            padding-right:10px;
          }
          .sina{
            display:inline-block;
            vertical-align: top;
          }
        }
      }
    }
  }
</style>
