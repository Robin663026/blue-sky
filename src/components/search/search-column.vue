<template>
  <scroll ref="searchColumn" class="searchColumn" :data="result":pullup="pullup" :beforeScroll="beforeScroll"@scrollToEnd="listScroll" ></scroll>
  <ul class="list">
    <li @click="searchItem(item)" class="list-item" v-for="item in result">
      <div v-if="list.image.position==='right'" class="title1 border-1px">
        <div class="left">
          <div class="row1">
            <span>{{list.titile}}</span>
          </div>
          <div class="row2">
            <span v-if="list.top===true" class="top" >
              置顶
            </span>
            <span class="datetme">123</span>
            <span class="source">{{list.source}}</span>
            <span class="comments_img"><img src="../../assets/img/5_icon_comment.png" alt=""width="11"height="11"></span>
            <span class="comment" v-if="list.comments[0].count<=999">{{news.comments.count}}</span>
            <span class="comment" v-else>999</span>
            <span class="thumbUp"><img src="../../assets/img/6_icon_good.png" alt=""alt=""width="11"height="11"></span>
            <span class="like" v-if="list.comments.length.thumbUp<=999">{{news.comments.thumbUp}}</span>
            <span class="like" v-else>999</span>
          </div>
        </div>
        <div class="right">
          <img :src="list.image.url" width="100" height="75">
        </div>
      </div>
      <div v-else class="title2 ">
        <div class="top">
          <span>{{list.titile}}</span>
        </div>
        <div class="middle"><img :src="list.image.url"width="345"height="135"></div>
        <div class="bottom">
            <span v-if="list.top===true" class="top" >
              置顶
            </span>
          <span class="datetme">123</span>
          <span class="source">123</span>
          <span class="comments_img"><img src="../../assets/img/5_icon_comment.png" alt=""width="11"height="11"></span>
          <span class="comment" v-if="list.comments.count<=999">{{news.comments.count}}</span>
          <span class="comment" v-else>999</span>
          <span class="thumbUp"><img src="../../assets/img/6_icon_good.png" alt=""alt=""width="11"height="11"></span>
          <span class="like" v-if="list.comments.thumbUp<=999">{{news.comments.thumbUp}}</span>
          <span class="like" v-else>999</span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style lang="less">

</style>
