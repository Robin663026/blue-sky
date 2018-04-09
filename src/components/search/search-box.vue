<template>
  <div class="search-box">
    <input ref="query" v-model="query" class="box" placeholder="请输入关键字"autofocus="autofocus"/>
    <div  @click="clear" v-show="query" class="delete" > 删除</div>
  </div>
</template>

<script>
  import {debounce} from '../../assets/js/util'

    export default {

      data() {
        return {
          query:''
        }
      },
      methods:{
        clear(){
          this.query=''
        },
        setQuery(query){
          this.query=query
        },
        blur(){
          this.$refs.query.blur()
        }

      },
      created(){
        this.$watch('query',debounce((newQuery)=>{
          this.$emit('query',newQuery)
        },200))
      }
    }
</script>

<style lang="less">
  @import '../../assets/css/border-1px';
  .search-box{
    display:flex;
    align-items:center;
    box-sizing:border-box;
    width:100%;
    height:45px;
    padding:5px 10px;
    .box{
      display:inline-block;
      vertical-align:top;
      width:300px;
      background: #F1F3F5;
      border-radius: 10px;

      .delete{
        display:inline-block;
        vertical-align:top;
        padding:10px 0 11px 16px;
        font-family:PingFangSC-Regular;
        font-size: 14px;
        color: #333333;
      }
    }
  }
</style>
