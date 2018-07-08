import focusContainer from '@/containers/Focus'

import focusMain from '../_views/focusMain'
import itemsView from '../_views/itemsView'

import One from '../_components/One'
import Two from '../_components/Two'

export default [
  {
    path: '/',
    component: focusContainer,
    children: [
      {
        path: '/',
        component: focusMain,
        children: [
          {
            path: '/',
            component: itemsView,
            children: [
              {
                name: 'one',
                path: '/one',
                component: One
              },
              {
                name: 'two',
                path: '/two',
                component: Two
              }
            ]
          }
        ]
      }
    ]
  }
]
