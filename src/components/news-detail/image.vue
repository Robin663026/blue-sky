<template>
  <div class="main">
  照片
    <!-- <div class="image" v-if="article.content.type==='image'">
      <img :src='article.content.text'  width="375" height="175">
    </div>
    <div v-else>
      没有照片
    </div>
    <div class="down">
      <span class="num"></span>
      <span class="icon"><img src="../../assets/img/33_save.png" alt=""width="21" height="21"></span>
    </div> -->

  </div>
</template>

<script>
    export default {
      data() {
        return {
          list:[]
        }
      },
      // props:{
      //   ["article"]
      // }
      // computed:{
      //   getimgList(){
      //     console.log(1);
      //     for(let i=0;i<this.article.content.length;i++){
      //       if(this.article.content.type==='image'){
      //         list.push(this.article.content.text);
      //       }
      //     }
      //   }
      // }
    }
</script>

<style lang="less">
.main{
  position:fixed;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  z-index:300;

  padding:492px 0;
  .down{
    position:absolute;
    left:15px;
    bottom:25px;
    height:21px;
    padding-right:15px;
    .num{
      display:inline-block;
      vertical-align: top;
    }
    .icon{
      display:inline-block;
      vertical-align: top;
      padding-left:299px;
    }
  }
}
</style>
