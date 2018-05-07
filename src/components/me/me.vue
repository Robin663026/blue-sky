<template>
  <div class="me" :id="theme">
    <header></header>
    <div class="title">
      <span class="name">我的</span>
    </div>
    <div class="image border-1px">
      <img src="../../assets/img/23_img_login2.png" alt=""width="60"height="60">
    </div>
    <div class="collect">
      <div class="icon">
        <router-link to="/me/collects"><img src="../../assets/img/24_collection.png" alt=""width="55"height="55"></router-link>
      </div>
      <div class="history">收藏与历史</div>
    </div>
    <div class="white1"></div>
    <div class="model">
      <div class="message">
        <span class="message1" >消息通知</span>
        <span class="icon"><router-link to="/me/message"><img src="../../assets/img/4_icon_back.png" alt=""width="16"height="16"></router-link></span>

      </div>
      <div class="module border-1px"@click="toggleModel" >
        <div  class="message">夜间模式</div>
        <div class="white" v-if="module" @click="$store.commit('setTheme', 'black')">
          <span class="left"></span>
          <span class="right"></span>
        </div>
        <div class="white2" v-else @click="$store.commit('setTheme', 'white')">
          <span class="left"></span>
          <span class="right"></span>
        </div>
      </div>
    </div>
    <div class="white1"></div>
    <div class="about">
      <div class="about1">
        <span class="about2" >关于</span>

        <span class="icon" @click="judge" >

          <router-link to="/me/about" v-if="showflag" ><img src="../../assets/img/4_icon_back.png" alt=""width="16"height="16"></router-link>
          <router-link  v-else to="/me/about1"><img src="../../assets/img/4_icon_back.png" alt=""width="16"height="16"></router-link>
        </span>
      </div>
      <div class="thumb border-1px">
        <span class="thumb1">赞过的</span>
        <span class="icon"><router-link to="/me/comments"><img  src="../../assets/img/4_icon_back.png" alt=""width="16"height="16"></router-link></span>
      </div>
      <div class="now border-1px">
        <span class="now1">当前版本</span>
        <span class="now2">1.0</span>
      </div>
    </div>
    <div class="blank"></div>
    <v-footer></v-footer>

    <keep-alive >
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import footer from '../footer/footer.vue'

    export default {

        data() {
            return {
              showflag:false,
              module:true
            }
        },
      	methods:{
	        judge(){
	          if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))){
	            this.showflag=true;
	          }else{
	            this.showflag=false;
	          }
        	},
	        toggleModel(){
	          if(module){
	            this.module=!this.module;
	          }else{
	            this.module=!this.module;
	          }
	          
	        }
	    },
        computed:{
        	theme(){
        		return this.$store.state.theme
        	}
        },
      	mounted(){
        	this.judge();

        },
      	components: {
        	'v-footer': footer
      	}

    }
</script>

<style lang="less">

  @import '../../assets/less/me.less';

</style>
