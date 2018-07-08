import Vue from 'vue'
import Router from 'vue-router'

import adminRoutes from '@/modules/admin/_routes/admin.routes.js'
import focusRoutes from '@/modules/focus/_routes/focus.routes.js'
import libraryRoutes from '@/modules/lib/_routes/library.routes.js'

Vue.use(Router)

const baseRoutes = []

const routes = baseRoutes.concat(
  adminRoutes,
  focusRoutes,
  libraryRoutes
)

export default new Router({
  mode: 'history',
  path: '/',
  routes
})
