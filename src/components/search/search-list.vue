<template>
<div class="search-list" v-show="searches.length">
  <ul>
    <li v-for="list in searches">

    </li>
  </ul>
</div>
</template>

<script>
    export default {
      props:{
        type:Array,
        default:[]
      }

    }
</script>

<style lang="less">
.search-list{

}
</style>
