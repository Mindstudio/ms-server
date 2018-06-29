import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'

import Library from '@/views/Library'
import Articles from '@/views/Library/Articles'
import Books from '@/views/Library/Books'
import Courses from '@/views/Library/Courses'
import Guides from '@/views/Library/Guides'
import Podcasts from '@/views/Library/Podcasts'
import Software from '@/views/Library/Software'
import Videos from '@/views/Library/Videos'
import Websites from '@/views/Library/Websites'

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
          name: 'books',
          path: '/books',
          component: Books
        },
        {
          name: 'courses',
          path: '/courses',
          component: Courses
        },
        {
          name: 'guides',
          path: '/guides',
          component: Guides
        },
        {
          name: 'podcasts',
          path: '/podcasts',
          component: Podcasts
        },
        {
          name: 'software',
          path: '/software',
          component: Software
        },
        {
          name: 'videos',
          path: '/videos',
          component: Videos
        },
        {
          name: 'websites',
          path: '/websites',
          component: Websites
        }
      ]
    }
  ]
})
