import * as types from './mutation-types'
const mutations={
  //获取文章
  [types.GET_ARTICLE] (state, payload) {
    for (let key in payload) {
      state.article[key] = payload[key]
    }
  },
  //获取收藏
  [types.GET_COLLECTION](state,data){
    state.collection=data
  },
  //添加收藏
  [types.ADD_COLLECTION](state,data){
    state.localCollection.unshift(data)
    localStorage.setItem('chan_collection',JSON.stringify(state.localCollection))
  },
  //删除收藏
  [types.REMOVE_COLLECTION] (state, id) {
    const index = state.localCollection.findIndex(item => {
      return item.id === id
    })
    state.localCollection.splice(index, 1);
    localStorage.setItem('chan_collection', JSON.stringify(state.localCollection))
  },
  //获取订阅
  [types.GET_SUBSCRIBE](state,data){
    state.subscribes=data
  },

  //添加订阅
  [types.ADD_SUBSCRIBE](state,data){
    state.localSubscribe.unshift(data)
    localStorage.setItem('sub_collection',JSON.stringify(state.localSubscribe))
  },
  //删除订阅
  [types.REMOVE_SUBSCRIBE](state,id) {
    const index1 = state.localSubscribe.findIndex(item => {
      return item.id === id
    })
    state.localSubscribe.splice(index1, 1);
    localStorage.setItem('sub_collection', JSON.stringify(state.localSubscribe))
  },
  //获取点赞
  [types.GET_THUM](state,data){
    state.thums=data
  },
  //添加点赞
  [types.ADD_THUM](state,data){
    state.localThum.unshift(data)
    localStorage.setItem('thu_collection',JSON.stringify(state.localThum))
  },
  //删除点赞
  [types.REMOVE_THUM](state,data){
    const index2=state.localThum.findIndex(item=>{
      return item.id===id
    })
    state.localThum.splice(index2,1);
    localStorage.setItem('thu_collection',JSON.stringify(state.localThum))
  },
  // 记录从主页离开时的新闻类型
  [types.LOG_TYPE] (state, type) {
    state.type = type
  },
  // 保存网页离开时的位置
  [types.SAVE_POSITION] (state, {name, position}) {
    state.positions[name] = position
  },
  // 添加历史
  [types.ADD_HISTORY] (state, content) {
    const item = {
      id: state.history.count++,
      content
    }
    state.history.items.unshift(item)
    localStorage.setItem('chan_history', JSON.stringify(state.history))
  },
  // 删除历史
  [types.REMOVE_HISTORY] (state, id) {
    let index = state.history.items.findIndex(item => {
      return item.id === id
    })
    state.history.items.splice(index, 1)
    localStorage.setItem('chan_history', JSON.stringify(state.history))
  },
  // 清空历史
  [types.CLEAR_HISTORY] (state) {
    state.history.items = []
    localStorage.setItem('chan_history', JSON.stringify(state.history))
  }
};
export default mutations
