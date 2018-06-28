import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'

import Articles from '@/views/Articles'
import Index from '@/views/Index'
import Library from '@/views/Library'
import Framework from '@/views/Framework'

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
      name: 'articles',
      path: '/articles',
      component: Articles
    },
    {
      name: 'index',
      path: '/index',
      component: Index
    },
    {
      name: 'library',
      path: '/library',
      component: Library
    },
    {
      name: 'framework',
      path: '/framework',
      component: Framework
    }
  ]
})
