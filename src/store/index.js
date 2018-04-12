import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import {loadCollect} from "../assets/js/cache";

Vue.use(Vuex);

const state={
  subscribes:[],//订阅列表
  thums:[],//点赞列表
  collection:[],//收藏列表
  searchList:[],//搜索列表
  newsLength:0,//刷新新闻数量
  localCollection: localStorage.getItem('chan_collection')
    ? JSON.parse(localStorage.getItem('chan_collection'))
    : [],
  localSubscribe:localStorage.getItem('sub_collection')
    ?JSON.parse(localStorage.getItem('sub_collection'))
    :[],
  localThum:localStorage.getItem('thu_collection')
    ?JSON.parse(localStorage.getItem('thu_collection'))
    :[],
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,

})
