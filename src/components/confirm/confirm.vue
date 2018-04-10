<template>
<div>
  <transition name="confirm-fade">
    <div class="confirm" v-show="showFlag"@click.stop>
      <div class="confirm-wrapper">
        <div class="confrim-content">
          <p class="text">{{text}}</p>
          <div class="operate">
            <div @click="cancle" class="operate-btnleft">
              {{cancleBtnText}}
            </div>
            <div class="operate-btn" @click="confirm" >
              {{confirmBtnText}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</div>
</template>

<script>
    export default {
      props:{
        text:{
          type:String,
          default:''
        },
        confirmBtnText:{
          type:String,
          default:'确定'
        },
        cancleBtnText:{
          type:String,
          default:'取消'
        }
      },
        data() {
            return {
              showFlag:false
            }
        },
      methods:{
        show(){
          this.showFlag=true
        },
        hide(){
          this.showFlag=false
        },
        cancle(){
          this.hide()
          this.$emit('cancle')
        },
        comfirm(){
          this.hide()
          this.$emit('confirm')
        }

      }
    }
</script>

<style lang="less">
.confirm{
  position:fixed;
  left:0;
  right:0;
  top:0;
  bottom:0;
  z-index:998;
  background-color:rgba(0, 0, 0, 0.3);
  &.comfirm-fade-enter-active{
    animation:confirm-fadein 0.3s;
    .confirm-content{
      animation:confirm-zoom 0.3s;
    }
    .comfirm-wrapper{
      position:absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      z-index: 999;
      .confirm-content{
        width:270px;
        border-radius:13px;
        background:#333;
        .text{
          padding:19px 15px ;
          line-height:22px;
          text-align:center;
          font-size:18px;
          color:rgba(255, 255, 255, 0.5);
          .operate{
            display:flex;
            align-items:center;
            text-align:center;
            font-size:18px;
            .operate-btn{
              flex:1;
              line-height:22px;
              padding:10px 0;
              border-top:1px solid rgba(0, 0, 0, 0.3);
              color:rgba(255, 255, 255, 0.3);
              &.left{
              border-right:1px solid rgba(0, 0, 0, 0.3);
            }
            }
          }
        }
      }
    }
  }
}
@keyframes confirm-fadein{
  0%{
    opacity: 0
  }

  100%{
    opacity: 1
  }


}

@keyframes confirm-zoom{
  0%{
    transform: scale(0)
  }

  50%{
    transform: scale(1.1)
  }

  100%{
    transform: scale(1)
}

}

</style>
