import * as types from './mutation-type'
import {saveFavorite,deleteFavorite} from "../assets/js/cache";
function findIndex(list, song) {
  return list.findIndex((item) => {
    return item.id === song.id
  })
}
export const saveFavoriteList = function ({commit}, song) {
  commit(types.SET_FAVORITE_LIST, saveFavorite(song))
}

export const deleteFavoriteList = function ({commit}, song) {
  commit(types.SET_FAVORITE_LIST, deleteFavorite(song))
}
