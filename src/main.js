
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import news from './components/news/news.vue'
import order from './components/order/order.vue'
import me from './components/me/me.vue'
import './assets/css/main.less'
import './assets/css/border-1px.less'
import comments from './components/me/comments.vue'
import message from './components/me/message/message.vue'
import collects from './components/me/collects/collects.vue'
import about from './components/me/about/about.vue'
import about from './components/me/about/about1.vue'
import editC from './components/me/collects/editC.vue'
import search from './components/search/search.vue'
import detail from './components/news-detail/detail.vue'
import de from './components/news-detail/de.vue'



Vue.use(VueRouter)
Vue.use(VueResource)
let router =new VueRouter({
  linkActiveClass:'active',
  mode:'history',
  routes:[
    {
      path:'/',
      redirect:'/news'
    },
    {
      path:'/news',
      component:news,
      children:[{
        path:'/news/search',
        component:search
      },{
        path:'/news/detail',
        component:detail
      },{
        path:'/news/de',
        component:de
      }]
    },
    {
      path:'/me',
      component:me,
      children:[{
        path:'/me/about',
        component:about
     },{
        path:'me/about1',
        component:about1
      },
        {
        path:'/me/comments',
        component:comments
      },{
        path:'/me/collects',
        component:collects,
        children:[{
          path:'/me/collects/eidtC',
          component:editC
        }]
      },{
        path:'/me/message',
        component:message
      }
      ]
    },
    {
      path:'/order',
      component:order
    }

  ]
})

new Vue({
  el:'#app',
  router,
  render:h=>h(App)
});



