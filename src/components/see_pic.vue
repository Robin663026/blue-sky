<template>
<div class="pic">
  <div class="big"><img src="" alt=""></div>
  <div class="down">
    <div class="page"></div>
    <div class="downs"><img src="../assets/img/33_save.png" alt=""></div>
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
    @import '../assets/css/main';
  .pic{
    width:100%;
    .px2rem(height,1334);
    .px2rem(padding-top,492.6);
    .px2rem(padding-bottom,50);
    .big{
      width:100%;
      .px2rem(height,350);
      .px2rem(margin-bottom,399.4);
    }
    .down{
      .px2rem(height,42);
      width:100%;
      .page{

      }
      .downs{
        .px2rem(width,42);
        .px2rem(height,42);
        .px2rem(margin-right,30);
      }
    }
  }
</style>
