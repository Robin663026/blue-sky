<template>
  <div  class="dnews" :id="theme">
    <header></header>
    <div class="backed"><router-link to="/news" ><div class="backs "></div></router-link></div>
    
    <div class="dcontent border-1px" >
      <div class="dtitle">{{article.title}}</div>
      <div class="dsome">
        <span class="left"><img src="../../assets/img/35_img_54X54.png" width="27" height="27"></span>
        <span class="middle">
          <div class="top">{{article.source}}</div>
          <div class="bot">
            <div class="time">{{article.time|dateFormat}}</div>
          </div>
        </span>
        <span  @click.stop="addSubscribe"  :class="{ 'order':true,'active':subscribeflag}"><span class="text2" >订阅</span></span>
      </div>
      <div class="dcontents" >
        <ul>
          <li v-for="content in article.content">
            <div class="h1" v-if="content.type==='h1'">{{content.text}}</div>
            <div class="p" v-else-if="content.type==='p'">{{content.text}}</div>
            <div class="image" v-else="content.type==='image'">
              <img :src="content.text"width="345"height="235" v-preview='content.text'preview-title-enable="true" preview-nav-enable="true">
            </div>
          </li>
        </ul>
        
      </div>
    </div>
    <div class="dbottom">
      <div class="left">
        <span class="icon"><img src="../../assets/img/12_write_comment.png" alt=""width="20"height="20"></span>
        <span class="write" @click.stop="writeComment">写评论</span>
      </div>
      <div class="right">
        <span class="comment" @click.stop="seeComment"></span>
        <span class="collect" v-if="article.like==true"@click.stop="collected"></span>
        <span class="nocollect" v-else @click.stop="collected"></span>
        <span class="share"@click.stop="shareIcon"></span>
        <div class="num">{{article.comment.length}}</div>
      </div>
    </div>
    <div class="comseeComment" v-show="showComment">
      <div class="chead"></div>
      <div class="combacks "@click.stop="hideComment"></div>
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
                    <span class="comnum">{{cmt.thumbUp}}</span>
                    <span class="comthumb" @click.stop="thum" v-if="thumb=true"><img src="../../assets/img/6_icon_good.png" width="13" height="13"></span>
                    <span class="comthum" @click.stop="thum" v-else><img src="../../assets/img/6_icon_good2.png"width="13" height="13" ></span>
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
            <span class="comshare"@click.stop="shareIcon11"></span>

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
        thumb:false,
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
     
        let images=this.article.content;
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
            
            images
          })
        } else {
          this.subscribeflag=!this.subscribeflag;
          this.REMOVE_SUBSCRIBE(id)

        }
        
      },
      thum(){
        this.thumb=!this.thumb;

      },
      collected(){
        let id = this.article.id;
        let title=this.article.title;
        let source=this.article.source;
        let time=this.article.time;
        let images=this.article.content;
   
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
            content
          })

        } else {
          this.article.like=!this.article.like;
          this.REMOVE_COLLECTION(id)
        }
        
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
     theme(){
            return this.$store.state.theme
          }
    },
    watch:{
      currentNews(newVal,oldVal){
        
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
  @import '../../assets/less/detail';
</style>
