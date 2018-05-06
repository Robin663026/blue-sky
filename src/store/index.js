import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex);

const state={
  theme:'white',
  loading:false,//loading图片的切换
  ifReturnMsg:'',//是否返回数据
  loadmore:false,
  ifReturnMore:true,
  subscribes:[],//订阅列表
  thums:[],//点赞列表
  collection:[],//收藏列表
  search:[],//搜索列表
  newsLength:0,//刷新新闻数量
  article:{
    id:'',
    title:'',
    source:'',
    content:'',
    time:'',
    comment:'',
    like:'',
    lengthC:'',
    images:'',
    position:'',
    images:''
  },
  history:localStorage.getItem('chan_history')
    ?JSON.parse(localStorage.getItem('chan_history'))
    :{count:0,items:[]},
  localCollection: localStorage.getItem('chan_collection')
    ? JSON.parse(localStorage.getItem('chan_collection'))
    : [],
  localSubscribe:localStorage.getItem('sub_collection')
    ?JSON.parse(localStorage.getItem('sub_collection'))
    :[],
  localThum:localStorage.getItem('thu_collection')
    ?JSON.parse(localStorage.getItem('thu_collection'))
    :[],
  positions:{},
  type:'',
  ifReturnRefresh:false,
  theme:''
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions

})
