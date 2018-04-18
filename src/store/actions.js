import * as type from './mutation-types.js'
import axios from 'axios'



export default {
  getArticle({commit,state},payload){
    state.loading=true;
    let url='../../../static/date/'+payload.id+'.json';
    axios.get(url).then((response)=>{
      let data=response.data;
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
        // thumbUP:data.comments.thumbUP,
        lengthC:data.comments.length,
        // image:data.image.url,
        // position:data.image.position
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
  }
}

