// import storage from 'good-storage'
// const COLLECT_KEY='__collect__';
// const COLLECT_MAX_LEN=200;
// function insertArray(arr,val,compare,maxLen){
//   const index=arr.findIndex(compare);
//   if(index ===0){
//     return
//   }
//   if(index>0){
//     arr.splice(index,1)
//   }
//   arr.unshift(val);
//   if(maxLen&& arr.length>maxLen){
//     arr.pop()
//   }
// }
// function deleteFromArray(arr,compare){
//   const index = arr.findIndex(compare);
//   if(index>-1){
//     arr.splice(index,1)
//   }
// }
//  export function saveCollect(news){
//   let newss = storage.get(COLLECT_KEY, []);
//   insertArray(newss,news,(item) => {
//     return item.id === news.id
//   },COLLECT_MAX_LEN);
//   storage.set(COLLECT_KEY, newss);
//   return newss
// }
//
// export function deleteCollect(news) {
//   let newss = storage.get(COLLECT_KEY, []);
//   deleteFromArray(newss, (item) => {
//     return item.id === news.id
//   })
//   storage.set(FAVORITE_KEY, newss);
//   return nwess
// }
//
// export function loadCollect() {
//   return storage.get(COLLECT_KEY, [])
// }
//
