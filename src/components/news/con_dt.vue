<template>
<div class="main">
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
</div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style scoped lang="less">
  @font-face{
    font-family:PingFangSC-Semibold;
    src:url('../../assets/fonts/pfs.ttf');
  }
  @baseFontSize: 75;
  .px2rem(@name, @px){
      @{name}: @px / @baseFontSize * 1rem;
  }
.main{
  .px2rem(height,1071);
  .px2rem(width,750);
  .px2rem(padding-left,30);


  .con1{
    .px2rem(padding-right,30);
    .px2rem(padding-bottom,40);
    .px2rem(padding-top,40);
    .px2rem(height,230);
    border-bottom:1px solid #E2E4E6;
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
    border-bottom:1px solid #E2E4E6;
    .px2rem(height,439);
    .con2-top{
      .px2rem(height,32);
      .px2rem(margin-top,40);
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
      .px2rem(height,22);
      .px2rem(margin-bottom,40);
    }

  }
  .con3{
    border-bottom:1px solid #E2E4E6;
    .px2rem(height,169);
    .px2rem(padding-top,40);
    .px2rem(padding-bottom,40);
    .con3-top{
      .px2rem(height,42);
      .px2rem(margin-bottom,25);
    }
    .con3-bottom{
      .px2rem(height,22);

    }
  }

}
</style>
