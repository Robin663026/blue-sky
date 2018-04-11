import * as types from './mutation-type'
const mutations={
  [types.SET_FAVORITE_LIST](state, list) {
    state.favoriteList = list
  }
}
export default mutations
