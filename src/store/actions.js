import * as type from './mutation-types.js'
import axios from 'axios'

export default {
  getNews({commit,state}){
    state.loading=true
    state.ifReturnMsg=true
    axios.get('http://rap2api.taobao.org/app/mock/3894/data/newsList').then((response)=>{
      state.loading=false
      if(err||response.data.length===0){
        state.ifReturnMsg=false
        return false
      }
      state.ifReturnMsg=true
      commit(type.GET_NEWSLIST),{
        data:response.data.newsList
      }
    })
  },
  getArticle({commit,state},payload){
    state.loading=true;
    let id=payload.id;
    let url='http://rap2api.taobao.org/app/mock/3894/data/detailList';
    axios.get(url).then((response)=>{
      let data=response.data.detailList[payload.id-1];
      console.log(data);
      state.ifReturnMsg=true;
      commit(type.GET_ARTICLE, {
        id:data.id,
        title:data.titile,
        source:data.source,
        content:data.content,
        time:data.dateTme,
        comment:data.comments,
        like:data.like,
        lengthC:data.comments.length,
        
      })
    },(response)=>{
      console.log('服务器请求失败');
    });

  },
  getSearch({commit},{offset,keyword}){
    commit('IF_LOADING',true)
    commit('RETURN_SEARCH',false)
    let url='';
    axios.get(url).then((response)=>{
      commit('IF_LOADING',false)
      commit('RETURN_SEARCH',true)
      commit('GET_SEARCH',{
        data:response.data,
        keyword
      })
    })
  },
    // 获取更多新闻
  getMoreNews ({commit, state}) {
    state.loadmore = true
    axios.get().then((response)=>{
      if(err){
        console.log(err)
          state.ifReturnMore = false
          return false
      }
      state.ifReturnMore = true
        commit(type.GET_NEWSLIST, {
          data: res.data
        })
    })
   
  }
}

