import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import VueLazyLoad from 'vue-lazyload'

import vuePicturePreview from 'vue-picture-preview'
import FastClick from 'fastclick'
// FastClick.attach(document.body);



Vue.use(VueLazyLoad,{
  loading:require('./assets/img/gif_loading.gif')
})
Vue.use(vuePicturePreview)

new Vue({
  el:'#app',
  router,
  store,
  render:h=>h(App)
});

