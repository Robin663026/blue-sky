<template>
<div class="order">
<header>

</header>
  lalala
  <v-footer></v-footer>
</div>
</template>

<script>
  import footer from '../footer/footer.vue'
  export default {
    data() {
      return {

      }
    },
    props:{


    },
    components:{
      'v-footer':footer
    }
  }
</script>

<style lang="less">
  .order{
    position:absolute;
    top: 20px;
    bottom:50px;
    left:0;
    width:100%;

  }
</style>
