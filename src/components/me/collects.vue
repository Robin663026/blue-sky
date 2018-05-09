<template>
  <div class="collectDetail" :id="theme"  >
    <header></header>
    <div class="cotitle1">
      <span class="icon"><router-link to="/me"><img src="../../assets/img/4_icon_back.png" alt=""width="16" height="16"></router-link></span>
      <span class=" collects "  @click.stop="collect">收藏</span>
      <span class=" history" @click.stop="hist">历史</span>
      <span class="edit" ><router-link to="/me/collects/eidtCollects">编辑</router-link></span>
      <span class="actives" ref="active"></span>
    </div>
    <div class="collect-list border-1px" v-if="collection_tag==='collect'">
      <ul class="collections" v-if="localCollection.length">
        <li v-for="item in localCollection" :key="item.id" class="collection_item" @click.stop="$router.push({path: '/detail/' + item.id})">
          <div class="title2 border-1px">
            <div class="left">
              <div class="row1">
                <span>{{item.title}}</span>
              </div>
              <div class="row2">
                <span class="datetme">{{item.time|dateFormat}}</span>
                <span class="sour">{{item.source}}</span>
              </div>
            </div>
            <div class="right">
              <img v-lazy="item.images[0].text" width="100" height="75">
            </div>
          </div>
        </li>
      </ul>
      <div v-else class="no-message">
        空空如也，快去收藏吧
      </div>
    </div>
    <div class="history-list" v-else>
      lalala
    </div>
    <keep-alive >
      <router-view></router-view>
    </keep-alive>
  </div>

</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  import moment from 'moment'

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
    created(){
      let that=this;
      this.$nextTick(()=>{
        that.getImage(that);
      });
      if(this.collection.length>0) return false;
    },
    methods:{
      getImage(){
        for(let i=0;i<this.localCollection.length;i++){
          for(let j=0;j<this.localCollection[i].images.length;j++){
            if(this.localCollection[i].images[j].type=='image'){
              if(j>0){
                let temp;
                temp=this.localCollection[i].images[0];
                this.localCollection[i].images[0]=this.localCollection[i].images[j];
                this.localCollection[i].images[j]=temp;
              }else{
                return
              }


            }
          }

        }
      },
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
      ]),
      theme(){
        return this.$store.state.theme
      }
    },
    filters: {
      dateFormat (time) {
        return moment(time).startOf('mimute').fromNow()
      }
    }
  }
</script>

<style lang="less">
  @import (reference)'../../assets/less/common';
  .collectDetail{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: @bg;
    .header{
      width:100%;
      height:20px;
      background:@bg1;
    }
    .cotitle1{
      height:45px;
      padding:15px 15px 14px 15px;

      .icon{
        display:inline-block;
        vertical-align: top;
        padding-right:113px;

      }
      .collects{
        display:inline-block;
        vertical-align: top;
        padding-right:20px;
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: @blue;
      }
      .history{
        display:inline-block;
        vertical-align: top;
        padding-right: 80px;
        font-family: PingFangSC-Semibold;
        font-size: 14px;
        color: @light;
      }
      .edit{
        display:inline-block;
        vertical-align: top;
        padding:1px 0px ;
        font-family: PingFangSC-Semibold;
        font-size: 14px;
        color: @light;
      }
      .actives{
        margin-left:135px;
        display:inline-block;
        width:25px;
        height:4px;
        background: @blue;
        left:0;
        bottom:0;
        transition:transform 0.8s ease;


      }
    }
    .collect-list{
      width:100%;
      
      .collections{
        padding:15px 0px 0 15px;

        .title2{
          height:115px;
          width:100%;
          display:flex;
          padding:20px 0;
          .border-1px(@line);

          .left{
            float:left;
            flex:1;
            padding-right:18px;
            width:230px;
            .row1{
              height:42px;
              overflow:hidden;
              font-family:PingFangSC-Semibold;
              font-size: 16px;
              color: @33;
              line-height: 21px;
            }
            .row2{
              padding-top:22px;
              height:11px;
              display:inline-block;
              vertical-align:top;
              .top{

                padding-right:2px;
                font-family:PingFangSC-Regular;
                font-size: 8px;
                color: @red;
              }
              .datetme{
                padding-right:5px;
                width:45px;
                font-family:PingFangSC-Regular;
                font-size: 11px;
                color: @light;
              }
              .sour{
                display:inline-block;
                width:65px;
                padding-right:10px;
                height:11px;
                overflow: hidden;

                font-family:PingFangSC-Regular;
                font-size: 11px;
                color: @light;
              }
              

            }
          }
          .right{
            float:left;
            flex:0 0 100px;
            padding-right:15px;

          }
        }

      }
      .no-message{
        vertical-align:center;
        width:100%;
        padding-top:40px;
      }
    }
    .history-list{
      margin-top:30px;
      width:100%;
      text-align:center;
    }



  }
</style>
