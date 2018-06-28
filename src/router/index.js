import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'

import Library from '@/views/Library'
import Articles from '@/views/Library/Articles'
import Guides from '@/views/Library/Guides'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'library',
      path: 'library',
      component: Library,
      children: [
        {
          name: 'articles',
          path: '/articles',
          component: Articles
        },
        {
          name: 'guides',
          path: '/guides',
          component: Guides
        }
      ]
    }
  ]
})
