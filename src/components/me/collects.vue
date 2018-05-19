<template>
  <div class="collectDetail" :id="theme"  >
    <header></header>
    <div class="cotitle1">
      <router-link to="/me"><span class="icon"></span></router-link>
      <span class=" collects "  @click.stop="collect">收藏</span>
      <span class=" history" @click.stop="hist">历史</span>
      <span class="edit" ><router-link to="/me/collects/eidtCollects">编辑</router-link></span>
      <span class="actives" ></span>
    </div>
    <div class="collect-list " v-if="collection_tag==='collect'">
      <ul class="collections" v-if="localCollection.length">
        <li v-for="item in localCollection" :key="item.id" class="collection_item" @click.stop="$router.push({path: '/detail/' + item.id})">
          <div class="titled ">
            <div class="left">
              <div class="row1">
                <span>{{item.title}}</span>
                <span class="none">{{item.images[0].text}}</span>
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
        collection_tag:'collect',
        direction:'',
        ifModel:false,
        id:'',
        contents:true
      
      }
    },
    mounted(){
      this.getImage();

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
        this.direction = 'collection-left'
        this.$refs.active.style.transform = 'translateX(0)'
      },
      // 显示历史标签
      hist () {
        this.collection_tag = 'hist'
        this.direction = 'collection-right'
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
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    z-index:300;
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
      border-bottom:1px solid @line;

      .icon{
        display:inline-block;
        vertical-align: top;
        position:fixed;
        left:15px;
        top:35px;
        width:16px;
        height:16px;
        background:url(../../assets/img/4_icon_back.png)no-repeat center center;
        background-size:16px 16px;
      }
      .collects{
        display:inline-block;
        vertical-align: top;
        position:fixed;
        top:35px;
        left:38%;
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: @blue;
      }
      .history{
        display:inline-block;
        vertical-align: top;
        position:fixed;
        top:35px;
        left:53%;
        font-family: PingFangSC-Semibold;
        font-size: 14px;
        color: @light;
      }
      .edit{
        display:inline-block;
        vertical-align: top;
        position:absolute;
        right:15px;
        top:35px;
        padding:1px 0px ;
        font-family: PingFangSC-Semibold;
        font-size: 14px;
        color: @light;
      }
      .actives{
        position:fixed;
        left:39%;
        top:64px;
        display:inline-block;
        width:20px;
        height:2px;
        background: @blue;
      }
    }
    .collect-list{
      width:100%;
      position:fixed !important;
      top:65px;
      bottom:50px;
      overflow:auto;
      .collections{
        padding:0px 0px 0 15px;
        
        .titled{
          border-bottom:1px solid @line;
          height:115px;
          width:100%;
          display:flex;
          padding:20px 0;
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
              .none{
                display:none;
              }
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
  #black{
    
    background: @bbg;
    .header{
      width:100%;
      height:20px;
      background:@bg1;
    }
    .cotitle1{
      height:45px;
      border-bottom:1px solid @bline;
      
      .icon{
        display:inline-block;
        vertical-align: top;
        position:fixed;
        left:15px;
        top:35px;
        width:16px;
        height:16px;
        background:url(../../assets/img/48_dark_back.png)no-repeat center center;
        background-size:16px 16px;
      }
      .collects{
        display:inline-block;
        vertical-align: top;
        position:fixed;
        top:35px;
        left:38%;
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: @blue;
      }
      .history{
        display:inline-block;
        vertical-align: top;
        position:fixed;
        top:35px;
        left:53%;
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
        color: @blight;
      }
      .actives{
        position:fixed;
        left:39%;
        top:64px;
        display:inline-block;
        width:20px;
        height:2px;
        background: @bblue;
      }
    }
    .collect-list{
      width:100%;
      
      .collections{
        padding:0px 0px 0 15px;

        .titled{
          height:115px;
          width:100%;
          display:flex;
          padding:20px 0;
          border-bottom:1px solid @bline;
         
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
              color: @b33;
              line-height: 21px;
              .none{
                display:none;
              }
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
                color: @bred;
              }
              .datetme{
                padding-right:5px;
                width:45px;
                font-family:PingFangSC-Regular;
                font-size: 11px;
                color: @blight;
              }
              .sour{
                display:inline-block;
                width:65px;
                padding-right:10px;
                height:11px;
                overflow: hidden;

                font-family:PingFangSC-Regular;
                font-size: 11px;
                color: @blight;
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
        color:@blight;
      }
    }
    .history-list{
      margin-top:30px;
      width:100%;
      text-align:center;
      color:@blight;
    }



  }
</style>
