<template>
  <div class="mobile-about">
   <header></header>
    <div class="heads">
      <span class="title">关于蓝穹</span>
      <router-link to="/me"><img class="icon" src="../../../assets/img/4_icon_back.png" width="16" height="16" ></router-link>

    </div>
    <div class="contents border-1px">
      <p class="line1">蓝穹新闻订阅APP是一款新闻定向推送及订阅类的APP。</p>
      <p class="line2"> &nbsp;&nbsp;2016年12月1日，中国保监会发文批准招商局仁和人寿保险股份有限公司筹建。注册资本人民币50亿元，注册地深圳市。拟任董事长李建红，拟任总经理彭伟。</p>
      <p class="line3">招商局仁和人寿保险股份有限公司筹备组：</p>
      <p class="line4">你筹备组关于筹建招商局仁和人寿保险股份有限公司的申请及相关补正材料收悉。经研究，现批复如下：</p>
      <p class="line5">一、同意深圳市招融投资控股有限公司、中国移动通信集团公司、中国民航信息网络股份有限公司、深圳市投资控股有限公司、深圳市卓越创业投资有限责任公司、深圳光汇石油集团股份有限公司、深圳市前海金融控股有限公司、亿赞普（北京）科技有限公司等8家公司共同发起筹建招商局仁和人寿保险股份有限公司，注册资本人民币50亿元，注册地深圳市。拟任董事长李建红，拟任总经理彭伟。</p>
      <p class="line6">二、你筹备组应当自收到批准筹建通知之日起1年内完成筹建工作，筹建期间不得从事保险经营活动，未经批准不得变更投资人、拟任董事长和拟任总经理。</p>
      <p class="line7">三、你筹备组应当严格依照有关法律法规办理筹建事宜，并将筹建过程中的有关情况及时报告我会。</p>
      <p class="line8">四、筹建完毕，你筹备组应当及时上报开业申请。在我会验收合格并下达开业批复后，再到工商部门注册登记。</p>
      <div class="image1">
        <img src="../../../assets/img/29_img.png" alt=""width="345" height="218">
        <p class="line9">图片1</p>
        <p class="line10">招商局仁和人寿保险股份有限公司</p>
      </div>
      <div class="image1">
        <img src="../../../assets/img/30_img.png" alt=""width="345" height="218">
        <p class="line9">图片2</p>
        <p class="line10">招商局仁和人寿保险股份有限公司</p>
      </div>
      <div class="image1">
        <img src="../../../assets/img/31_img.png" alt=""width="345" height="218">
        <p class="line9">图片3</p>
        <p class="line10">招商局仁和人寿保险股份有限公司</p>
      </div>
      <div class="image1">
        <img src="../../../assets/img/32_img.png" alt=""width="345" height="218">
        <p class="line9">图片4</p>
        <p class="line10">招商局仁和人寿保险股份有限公司</p>
      </div>
      <div class="bottom">
        <div class="tel">
          <div class="con">联系我们</div>
          <div class="nub">236687</div>
        </div>
        <div class="more border-1px">
          更多联系方式
        </div>
        <div class="comp border-1px">
          <div class="about">关于公司</div>
          <div class="job">工作机会</div>
          <div class="lawyer">法律声明</div>
          <div class="response">企业责任</div>
          <div class="map">网站地图</div>
        </div>
        <div class="follow border-1px">
          <div class="us"></div>
          <div class="icon">
            <span class="wechat"><img  src="../../../assets/img/20_share_wechat2.png" alt=""width="20" height="20"></span>
            <span class="sina"><img src="../../../assets/img/21_share_sina.png" alt=""width="20" height="20"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
    export default {
        data() {
            return {

            }
        },
      methods:{

        _initScroll (){
//          this.newsScroll = new BScroll(this.$refs.about, {
//            click:true
//          })
        },
        created(){
          this.$nextTick(() => {
          this._initScroll()
        });
        }
      }
    }
</script>

<style lang="less">
  @import '../../../assets/css/common';
.mobile-about{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:white;
  /*overflow:hidden;*/
  header{
    height:20px;
  }
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
      color: #333333;
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
    .border-1px(bc);
    width:100%;
    padding:13px 15px 40px 15px;
    .line1,.line2{
      padding-bottom:8px;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #333333;
    }
    .line3{
      padding:2px 0 4px 0;
      font-family: PingFangSC-Semibold;
      font-size: 12px;
      color: #333333;
    }
    .line4,.line5,.line6,.line7{
      padding-bottom:5px;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #333333;

    }
    .line8{
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #333333;
    }
    .image1{
      img{
        padding:20px 0 15px 0;
      }
      .line9{
        padding-bottom:10px;
        font-family: PingFangSC-Regular;
        font-size: 21px;
        color: #333333;
      }
      .line10{
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #333333;
      }
    }
  }
  .bottom{
    background: #F1F3F5;
    width:100%;
    padding-left:15px;
    .tel{
      height:75px;
      padding:20px 0 15px 0;
      .con{
        padding-bottom:11px;
        font-family: PingFangSC-Semibold;
        font-size: 15px;
        color: #333333;
      }
      .num{
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #888888;
      }
    }
    .more{
      height:45px;
      .border-1px(bc);
      padding:15px 0;
      font-family: PingFangSC-Semibold;
      font-size: 15px;
      color: #333333;
    }
    .comp{
      height:145px;
      padding:15px 0 4px 0;
      .about{
        padding-bottom:11px;
        font-family: PingFangSC-Semibold;
        font-size: 15px;
        color: #333333;
      }
      .lawyer,.job,.response,.map{
        padding-bottom:11px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #888888;
      }

    }
    .follow{
      height:79px;
      padding:15px 0 18px 0;
      .us{
        padding-bottom:11px;
        height:15px;
        font-family: PingFangSC-Semibold;
        font-size: 15px;
        color: #333333;
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
