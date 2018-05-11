<template>
	<div>
		<div class="writeComment" :id="theme">
      <div class="no"></div>
      <div class="content">
        <div class="text123">
          <input type="text" v-model="text" placeholder="写评论">
        </div>
        <div class="send" @click="closeComment"><button>发送</button></div>
      </div>
    </div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				myWrite:this.showWrite,
        text:''
			}
		},
		props:["showWrite"],
		methods:{
			closeComment(){
				this.showWrite=!this.showWrite
			}
		},
		watch:{
			showWrite(val){
				this.myWrite=val;
			},
			myWrite(val){
				this.$emit('on-write',val)
			}
		},
    computed:{
      theme(){
          return this.$store.state.theme
        }
    }
	}
</script>
<style lang="less">
@import (reference)'../../assets/less/common';
	.writeComment{
      position:fixed;
      top:0;
      left:0;
      width:100%;
      height:667px;
      z-index:100;
      background: @bg2;
      .no{
        width:100%;
        height:267px;
      }
      .content{
        padding:15px 15px 7px 15px;
        width:100%;
        height:135px;
        background: @bg;
        .text123{
          height:60px;
          padding-bottom:15px;
          width:100%;
          input{
            font-family: PingFangSC-Regular;
            font-size: 16px;
            color: @light;
            background:@input;
            width:100%;
            height:100%;
          }
        }
        .send{
          background: @bg;
          border: 1px solid @light;
          border-radius: 2px;
          padding:10px 0 11px 0;
          text-align:center;
          button{
            font-family: PingFangSC-Regular;
            font-size: 16px;
            color: @light;
          }
        }
      }
    }
   #black{
    background:@bg1;
    .content{
      background:@bbg;
      .text123{
        input{
          color:@blight;
          background:@binput;
        }
      }
      .send{
        background:@bbg;
        border:1px solid @blight;
        button{
          color:@blight;
        }
      }
    }
   }
</style>