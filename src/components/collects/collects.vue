<template>
<div class="collectDetail"  >
  <header></header>
  <div class="title1">
    <span class="icon"><router-link to="/me"><img src="../../assets/img/4_icon_back.png" alt=""width="16" height="16"></router-link></span>
    <span class=" collects "  @click="collect">收藏</span>
    <span class=" history" @click="hist">历史</span>
    <span class="edit " ><router-link to="/me/collects/editC">编辑</router-link></span>
    <span class="actives" ref="active"></span>
  </div>
  <!--<div class="collect" v-if="collection_tag==='collect'">-->
    <!--<ul class="collections" v-if="localCollection.length">-->
      <!--<li v-for="item in localCollection" :key="item.id" class="collection_item" @click="$router.push({path: '/detail/' + item.id})">-->
        <!--<div class="title1 border-1px">-->
          <!--<div class="left">-->
            <!--<div class="row1">-->
              <!--<span>{{item.title}}</span>-->
            <!--</div>-->
            <!--<div class="row2">-->
              <!--<span class="datetme">{{item.time|dateFormat}}</span>-->
              <!--<span class="sour">{{item.source}}</span>-->
              <!--<span class="comments_img"><img src="../../assets/img/5_icon_comment.png" alt=""width="11"height="11"></span>-->
              <!--<span class="comment" v-if="item.lengthC<=999">{{item.lengthC}}</span>-->
              <!--<span class="comment" v-else>999</span>-->
              <!--<span class="thumbUp"><img src="../../assets/img/6_icon_good.png" alt=""alt=""width="11"height="11"></span>-->
              <!--<span class="like" v-if="item.lengthC<=999">{{item.lengthC}}</span>-->
              <!--<span class="like" v-else>999</span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="right">-->
            <!--&lt;!&ndash;<img v-lazy="news.content.text" width="100" height="75">&ndash;&gt;-->
          <!--</div>-->
        <!--</div>-->
      <!--</li>-->
    <!--</ul>-->
    <!--<div v-else>-->
      <!--空空如也，快去收藏吧-->
    <!--</div>-->
  <!--</div>-->
  <!--<div class="history" v-else></div>-->

</div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
    export default {
        data() {
            return {
              collection_tag:'initial',
              direction:'',
              ifModel:false,
              id:'',
              contents:true
            }
        },
        methods:{
          ...mapMutations(['REMOVE_COLLECTION']),
          //显示默认收藏标签
          collect(){
            this.collection_tag = 'collect'
            this.direction = 'collection-right'
            this.$refs.active.style.transform = 'translateX(0)'
          },
          // 显示历史标签
          hist () {
            this.collection_tag = 'hist'
            this.direction = 'collection-left'
            this.$refs.active.style.transform = 'translateX(2rem)'
          },
          // 弹出对话框选择是否删除收藏
          removeCollection (id) {
            this.ifModal = true
            this.id = id
          },
          // 删除收藏
          del () {
            this.REMOVE_COLLECTION(this.id)
            this.ifModal = false
            this.$Message.success('删除成功')
            this.id = ''
          }
        },
      computed:{
        ...mapState([
          'collection',
          'localCollection',
          'positions'
        ])
      },
      created(){
          if(this.collection.length>0) return false
      }
    }
</script>

<style lang="less">
  @import '../../assets/css/common';
.collectDetail{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background: #ffffff;
  .title1{
    position:fixed;
    top:0;
    height:45px;
    padding:15px 15px 14px 15px;
    .icon{
      background:red;
      display:inline-block;
      vertical-align: top;
      padding-right:0px;
    }
    .collects{
      background:yellow;
      display:inline-block;
      vertical-align: top;
      padding-right:25px;
      font-family: PingFangSC-Semibold;
      font-size: 16px;
      color: #A2A4A6;
    }
    .history{
      background:green;
      display:inline-block;
      vertical-align: top;
      padding-right: 80px;
      font-family: PingFangSC-Semibold;
      font-size: 14px;
      color: #6F7379;
    }
    .edit{
      background:#f0ad4e;
      display:inline-block;
      vertical-align: top;
      padding:1px 0px ;
      font-family: PingFangSC-Semibold;
      font-size: 14px;
      color: #6F7379;
    }
    .actives{
      display:inline-block;
      width:20px;
      height:4px;
      background: #A2A4A6;
      left:0;
      bottom:0;
      transition:transform 0.6s ease;
    }
  }
  .collect{
    width:100%;
    .collections{

    }
  }



}
</style>
