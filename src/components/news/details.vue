<template>
<div v-show="showFlag" class="details">
  1111
</div>
</template>

<script>
    export default {
      props:{
        details:{
          type:Object
        }
      },
      data() {
        return {
          showFlag:false
        };
      },
      methods:{
          show(){
            this.showFlag=true;

          }
      }

    }
</script>

<style scoped lang="less">
 @import '../../assets/css/common.less';
  .details{
    position:fixed;
    left:0;
    top:0;
    .px2rem(bottom,100);
    z-index:30;
    width:100%;
    background-color:white;
  }
</style>
