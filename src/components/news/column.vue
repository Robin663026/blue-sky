<template>
<div class="main">
  <div  @click="selectNews(detail,$event)" class="con1">
    <div class="left1">
      <div class="row1">
      </div>
      <div class="row2">

      </div>
    </div>
    <div class="right1">
      <img src="../../assets/img/1_img_200X150.png" alt="">
    </div>
  </div>
  <div class="con1">
    <div class="left1">
      <div class="row1">
      </div>
      <div class="row2">
      </div>
    </div>
    <div class="right1">
      <img src="../../assets/img/1_img_200X150.png" alt="">
    </div>
  </div>
  <div class="con2">
    <div class="con2-top"></div>
    <div class="con2-middle"><img src="../../assets/img/2_img_690X270.png" alt=""></div>
    <div class="con2-bottom"></div>
  </div>
  <div class="con3">
    <div class="con3-top"></div>
    <div class="con3-bottom"></div>
  </div>
  <!--<details :datails="selectedNews" ref="details"></details>-->
</div>
</template>

<script>
  import BScroll from 'better-scroll';
  import details from './details.vue';
    export default {
        data() {
            return {
              selectedNews:{}
            };
        },
      methods:{
          _initScroll(){
            this.menuScroll=new BScroll()
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

  .px2rem(width,750);
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
      }
      .row2{
        .px2rem(height,22);
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
