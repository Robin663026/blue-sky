<template>
  <div class="editCollects" :id="theme">
    <header></header>
    <div class="wrapper">
      <span class="icon"><router-link to="/me"><img src="../../assets/img/4_icon_back.png" alt=""width="16" height="16"></router-link></span>
      <span class=" collects "  >收藏</span>
      <span class=" history" >历史</span>
      <span class="edit" ><router-link to="/me/collects">取消</router-link></span>
      <span class="actives" ref="active"></span>
    </div>
    <div class="editList border-1px">
      <ul  v-if="localCollection.length">
        <li v-for="(item,index) in localCollection" :key="item.id" class="editItem border-1px">
            <input class="left" type="checkbox" v-model="item.checked">
              <!-- <span v-if="choose" ><img src="../../assets/img/7_choose.png" alt="" width="23" height="23"></span>
              <span class="circle" v-else></span> -->
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
              <img v-lazy="item.images" width="100" height="75">
            </div>
        </li>
      </ul>
      <div class="none"v-else>
        空空如也，快去收藏吧
      </div>
    </div>
    <div class="bottom233">
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
            console.log(index.checked);
          }
        }
      },
      dele(){
        let that=this;
        let len=this.localCollection.length;
        console.log(this.localCollection);
        for(let i=len-1;i>=0;i--){
          let index=this.localCollection[i];
          console.log(index)
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
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:300;
    background:@bg;
    .header{
      width:100%;
      height:20px;
      background:@bg1;
    }
    .wrapper{
      
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
        margin-left:145px;
        display:inline-block;
        width:20px;
        height:4px;
        background: @blue;
        left:0;
        bottom:0;
        transition:transform 0.6s ease;

      }
    }
    .editList{
      padding:0px 15px;
      width:100%;
      .border-1px(@line);
      
      .editItem{
        width:100%;
        display:flex;
        height:115px;
        padding:20px 0;
        .border-1px(@line);
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
    .bottom233{
      position:absolute;
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
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:400;
    background:@bbg;
    .header{
      width:100%;
      height:20px;
      background:@bg1;
    }
    .wrapper{
      
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
        color: @bblue;
      }
      .history{
        display:inline-block;
        vertical-align: top;
        padding-right: 80px;
        font-family: PingFangSC-Semibold;
        font-size: 14px;
        color: @blight;
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
        margin-left:145px;
        display:inline-block;
        width:20px;
        height:4px;
        background: @bblue;
        left:0;
        bottom:0;
        transition:transform 0.6s ease;

      }
    }
    .editList{
      padding:0px 15px;
      width:100%;
      .border-1px(@bline);
      
      .editItem{
        width:100%;
        display:flex;
        height:115px;
        padding:20px 0;
        .border-1px(@bline);
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
    .bottom233{
      position:absolute;
      left:0;
      bottom:0;
      width:100%;
      height:45px;
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
