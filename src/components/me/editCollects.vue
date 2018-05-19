<template>
  <div class="editCollects" :id="theme">
    <header></header>
    <div class="wrapper">
      <router-link to="/me"><span class="icon"></span></router-link>
      <span class=" collects "  >收藏</span>
      <span class=" history" >历史</span>
      <span class="edit" ><router-link to="/me/collects">取消</router-link></span>
      <span class="actives" ref="active"></span>
    </div>
    <div class="editList ">
      <ul  v-if="localCollection.length">
        <li v-for="(item,index) in localCollection" :key="item.id" class="editItem ">
            <input class="left" type="checkbox" v-model="item.checked">
              
            </input>
            <div class="middle">
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
        </li>
      </ul>
      <div class="none"v-else>
        空空如也，快去收藏吧
      </div>
    </div>
    <div class="delete">
      <span class="left"  @click.stop="checkall">全选</span>
      <span class="right" @click.stop="dele">删除</span>
    </div>
  </div>

</template>

<script>
   import {mapState,mapMutations} from 'vuex'
  import moment from 'moment'
  export default{
    data(){
      return{
        choose:false,
        isCheckedAll:false,
        checkData:[]
      }
    },
    mounted(){
      this.getImage();

    },
    created(){
      // let that=this;
      // this.$nextTick(()=>{
      //   that.getImage(that);
      // });
      // if(this.collection.length>0) return false;
    },
    methods:{
      ...mapMutations(['REMOVE_COLLECTION']),
      checkall(){
        this.choose=!this.choose;
      
        let len=this.localCollection.length;
        if(this.choose){
          for(let i=len-1;i>=0;i--){
            let index=this.localCollection[i];
            index.checked=true;
            
          }
        }
      },
      dele(){
        let that=this;
        let len=this.localCollection.length;
        
        for(let i=len-1;i>=0;i--){
          let index=this.localCollection[i];
        
          if(index.checked){
            that.localCollection.splice(i,1)
          }
        }
      },
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
      }
    },
    watch:{
      // checkData:{
      //   handler(){
      //     let len=this.localCollection.length;
      //     if(this.checkData.length==len){
      //       document.getElementByClass().checked
      //     }
      //   }
      // }
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
        return moment(time).format("YYYY-MM-DD")
      }
    }
  }
</script>

<style lang="less">
  @import (reference)'../../assets/less/common';
  .editCollects{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:400;
    background:@bg;
    .header{
      width:100%;
      height:20px;
      background:@bg1;
    }
    .wrapper{
      
      height:45px;
      border-bottom:1px solid @line;
      padding:15px 15px 14px 0px;
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
        position:fixed;
        top:35px;
        right:15px;
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
    .editList{
      padding:0px 15px;
      width:100%;
      height:551px;
      overflow:auto;
      
      .editItem{
        width:100%;
        display:flex;
        height:115px;
        padding:20px 0;
        border-bottom:1px solid @line;
        .left{
          flex:0 0 38px;
          float:left;
          margin-top:27px;
          .circle{
            display:inline-block;
        
            width:23px;
            height:23px;
            background:black;
            border-radius:50%;
            background: @bg;
            border: 1px solid @97;
          }
        }
        .middle{
          flex:1;
          float:left;
          padding-right:18px;
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
          flex:0 0 100px;
          float:left;
        }
      }
      .none{
        text-align:center;
        padding-top:50px;
      }

    }
    .delete{
      position:fixed;
      left:0;
      bottom:0;
      width:100%;
      height:45px;
      background:@blue;
      display:inline-block;
      vertical-align:center;
      padding:15px 15px 14px 15px;
      .left{
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: @bg;
      }
      .right{
        float:right;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: @bg;
      }

    }

  }
  #black{
    
    background:@bbg;
    .header{
      width:100%;
      height:20px;
      background:@bg1;
    }
    .wrapper{
      
      height:45px;
      border-bottom:1px solid @bline;
      padding:15px 15px 14px 0px;
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
        
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: @blue;
      }
      .history{
        display:inline-block;
        vertical-align: top;
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
    .editList{
      padding:0px 15px;
      width:100%;
      height:551px;
      overflow:scroll;
      border-bottom:1px solid @bline;
      
      .editItem{
        width:100%;
        display:flex;
        height:115px;
        padding:20px 0;
        border-bottom:1px solid @bline;
        .left{
          flex:0 0 38px;
          float:left;
          margin-top:27px;
          .circle{
            display:inline-block;
        
            width:23px;
            height:23px;
            background:black;
            border-radius:50%;
            background: @bbg;
            border: 1px solid @97;
          }
        }
        .middle{
          flex:1;
          float:left;
          padding-right:18px;
          .row1{
            height:42px;
            overflow:hidden;
            font-family:PingFangSC-Semibold;
            font-size: 16px;
            color: @b33;
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
          flex:0 0 100px;
          float:left;
        }
      }
      .none{
        text-align:center;
        padding-top:50px;
        color:@blight;
      }

    }
    .delete{
      position:fixed;
      left:0;
      bottom:0;
      width:100%;
      height:45px;
      z-index:600;
      background:@bline;
      display:inline-block;
      vertical-align:center;
      padding:15px 15px 14px 15px;
      .left{
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: @b33;
      }
      .right{
        float:right;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: @b33;
      }

    }

  }
</style>
