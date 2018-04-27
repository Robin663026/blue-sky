<template>
  <div  class="news" >
    <header></header>
    <div class="back "><router-link to="/news" ><img src="../../assets/img/4_icon_back.png" alt=""width="16"height="16"></router-link></div>
    <div class="content border-1px" >
      <div class="title">{{article.title}}</div>
      <div class="some">
        <span class="left"><img src="../../assets/img/35_img_54X54.png" width="27" height="27"></span>
        <span class="middle">
          <div class="top">{{article.source}}</div>
          <div class="bot">
            <div class="time">{{article.time|dateFormat}}</div>
          </div>
        </span>
        <span  @click.stop="addSubscribe"  :class="{ 'order':true,'active':subscribeflag}"><span class="text2" >订阅</span></span>
      </div>
      <div class="contents" >
        <ul>
          <li v-for="content in article.content">
            <div class="h1" v-if="content.type==='h1'">{{content.text}}</div>
            <div class="p" v-else>{{content.text}}</div>
          </li>
        </ul>
        <img v-for="(img,index) in article.images"
          v-preview='img.image'
          :src="img.image"
          :key="index"
          preview-title-enable="true"
          preview-nav-enable="true"
          height="135" width="345"
        >
      </div>
    </div>
    <div class="bottom">
      <div class="left">
        <span class="icon"><img src="../../assets/img/12_write_comment.png" alt=""width="20"height="20"></span>
        <span class="write" @click.stop="writeComment">写评论</span>
      </div>
      <div class="right">
        <span class="comment"><img src="../../assets/img/13_comment.png" alt=""width="20"height="20"@click.stop="seeComment"></span>
        <span class="collect" v-if="article.like==true"><img src="../../assets/img/14_collect.png" alt=""width="20"height="20"@click.stop="collected"></span>
        <span class="nocollect" v-else><img src="../../assets/img/14_collect2.png" alt=""width="20"height="20"@click.stop="collected"></span>
        <span class="share"><img src="../../assets/img/13_share.png" alt=""width="20"height="20" @click.stop="shareIcon"></span>
        <div class="num">{{article.comment.length}}</div>
      </div>
    </div>
    <div class="comseeComment" v-show="showComment">
      <div class="combacks "@click.stop="hideComment"><img src="../../assets/img/4_icon_back.png" alt=""width="16"height="16"></div>
      <div class="comcommentCon border-1px">
        <div class="comtitle">{{article.title}}</div>
        <div class="comwrapper">
          <span class="comtime">{{article.time|dateFormat}}</span>
          <span class="comtop">{{article.source}}</span>
        </div>
        <div class="comnum">全部评论（{{article.comment.length}}）</div>
        <div class="comdetail border-1px" v-if="article.comment.length>0">
            <ul>
              <li v-for="cmt in article.comment " class="comlist border-1px">
                <div class="comicon">
                  <img :src="cmt.icon" alt=""width="27"height="27">
                </div>
                <div class="comcontent33 border-1px">
                  <div class="comline1">
                    <span class="comname">{{cmt.name}}</span>
                    <span class="comnum">{{cmt.thumbUP}}</span>
                    <span class="comthumb" @click.stop="thum" v-if="thumb=true"><img src="../../assets/img/6_icon_good2.png" width="13" height="13"></span>
                    <span class="comthum" @click.stop="thum" v-else><img src="../../assets/img/6_icon_good.png"width="13" height="13" ></span>
                  </div>
                  <div class="comtext33">{{cmt.text}}</div>
                  <div class="comtime">{{cmt.dateTime|dateFormat}}</div>
                </div>
              </li>
            </ul>

          
        </div>
        <div class="comdetail2" v-else>
          <img src="../../assets/img/56_no_comment.png" alt=""width="150"height="145">
          <div class="comtext44">暂无评论</div>
        </div>
        <div class="combottom33">
          <div class="comleft">
            <span class="comicon"><img src="../../assets/img/12_write_comment.png" alt=""width="20"height="20"></span>
            <span class="comwrite" @click.stop="writeComment">写评论</span>
          </div>
          <div class="comright">
            <span class="comcomment"><img src="../../assets/img/17_backnews.png" alt=""width="20"height="20"@click.stop="hideComment"></span>
            <span class="comback" @click.stop="hideComment">正文</span>
            <span class="comshare"><img src="../../assets/img/13_share.png" alt=""width="20"height="20" @click.stop="shareIcon11"></span>

          </div>
        </div>
      </div>
    </div>
    <!-- <v-seeComment v-show="showComment" :showComment="showComment" :article="article" @on-comment="onComment"></v-seeComment> -->
    <v-share v-show="showIcon" :showIcon="showIcon" @on-change="onChange" ></v-share>
    <v-writeComment v-show="showWrite" :showWrite="showWrite" @on-write="onWrite"></v-writeComment>
  </div>
</template>

<script>
  import {mapGetters,mapMutations,mapActions,mapState} from 'vuex';
  import store from '../../store'
  import moment from 'moment'
  import share from './share'

  import writeComment from './writeComment'
  export default {
    filters: {
      dateFormat (time) {
        return moment(time).startOf('mimute').fromNow()
      }
    },
    data() {
      return {
        detail:{
          type:Object
        },
        collectC:'collect',
        showComment:false,
        showIcon:false,
        showIcon11:false,
        showWrite:false,
        text:'',
        uid:this.$route.query.id,
        subscribeflag:true,
        thumb:true,
        list:[]

      };
    },
    props: {
    },
    methods:{

      ...mapMutations(['ADD_SUBSCRIBE','REMOVE_SUBSCRIBE','ADD_COLLECTION','REMOVE_COLLECTION','ADD_THUM','REMOVE_THUM']),
      ...mapActions(['getArticle']),
      addSubscribe () {
        let id = this.article.id;
        let title=this.article.title;
        let source=this.article.source;
        let time=this.article.time;
        let comment=this.article.comment;
        let lengthC=this.article.lengthC;
        let images=this.article.images[0].image;
        let index = this.localSubscribe.findIndex(item => {
          return item.id === id
        })
        if (index === -1) {
          this.subscribeflag=!this.subscribeflag;
          this.ADD_SUBSCRIBE({
            id,
            title,
            time,
            source,
            comment,
            lengthC,
            images
          })
        } else {
          this.subscribeflag=!this.subscribeflag;
          this.REMOVE_SUBSCRIBE(id)

        }
        console.log(this.localSubscribe);
      },
      thum(){
        this.thumb=!this.thumb;

      },
      collected(){
        let id = this.article.id;
        let title=this.article.title;
        let source=this.article.source;
        let time=this.article.time;
        let images=this.article.images[0].image;
        let lengthC=this.article.lengthC;
        let comment=this.article.comment;
        let like=this.article.like;
        let content=this.article.content;
        let index = this.localCollection.findIndex(item => {
          return item.id === id
        });
        if (index === -1) {
          this.article.like=!this.article.like;
          this.ADD_COLLECTION({
            id,
            title,
            images,
            time,
            source,
            like,
            lengthC,
            comment,
            content
          })

        } else {
          this.article.like=!this.article.like;
          this.REMOVE_COLLECTION(id)
        }
        console.log(this.localCollection);
      },
      seeComment(){
        this.showComment=!this.showComment;
      },
      hideComment(){
        this.showComment=!this.showComment;
      },
      shareIcon(){
        this.showIcon=!this.showIcon;
      },
      onChange(val){
        this.showIcon=val;
      },
      onWrite(val){
        this.showWrite=val;
      },
      onComment(val){
        this.showComment=val;
      },
      writeComment(){
        this.showWrite=!this.showWrite;
      },
      closeComment(){
        this.showWrite=!this.showWrite;
      }
    },
    created(){
      let id = this.$route.params.id
      this.getArticle({id: id})
    },
    beforeRouteEnter(to,from,next){
      const id=to.params.id;
      if(!id)return false;
      next(vm=>{
        vm.getArticle({id})
      })
    },
    computed:{
      ...mapState(['localSubscribe','localCollection','article','ifReturnMsg','loading']),
     
    },
    watch:{
      currentNews(newVal,oldVal){
        console.log(this.currentNews);
        if (!newVal.id) {
          return
        }
        if (newVal.id === oldVal.id) {
          return
        }
      }
    },
    components:{
      'v-share':share,
      'v-writeComment':writeComment

    },

  }
</script>
<style lang="less">
  @import '../../assets/css/detail';
</style>
