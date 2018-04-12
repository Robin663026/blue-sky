import * as types from './mutation-types'
const mutations={
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
  }
};
export default mutations
