import Vue from 'vue'
import Router from 'vue-router'
import news from './../components/news/news.vue'
import order from './../components/order/order.vue'
import me from './../components/me/me.vue'
import comments from './../components/me/comments.vue'
import message from './../components/message/message.vue'
import collects from './../components/collects/collects.vue'
import about from './../components/about/about.vue'
import about1 from './../components/about/about1.vue'
import editC from './../components/collects/editC.vue'
import search from './../components/search/search.vue'
import detail from './../components/news-detail/detail.vue'
import store from '../store/index'
import * as type from '../store/mutation-types'

Vue.use(Router)
let router =new Router({
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
      }]
    },
    {
      path:'/me',
      component:me,
      children:[{
        path:'/me/about',
        component:about
      },{
        path:'/me/about1',
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
    },
    {
      path:'/detail/:id',
      name:'detail',
      component:detail
    }

  ]
})
// 滚动条控制的部分
router.afterEach((to, from) => {
  store.commit(type.SAVE_POSITION, {
    name: from.path,
    position: document.body.scrollTop || document.documentElement.scrollTop
  })
  if (store.state.positions[to.path]) {
    setTimeout(() => {
      window.scrollTo(0, store.state.positions[to.path])
    }, 80)
  } else {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 80)
  }
})
export default router
