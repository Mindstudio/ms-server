
import libContainer from '@/containers/Library'

import libMain from '../_views/libMain'
import itemsView from '../_views/itemsView'
import itemView from '../_views/itemView'

// lib/_objects/articles
import articlesBanner from '../_objects/articles/Banner'
import Articles from '../_objects/articles/List'
import Article from '../_models/article'

// lib/_objects/books
import booksBanner from '../_objects/books/Banner'
import Books from '../_objects/books/List'
import Book from '../_models/book'

// lib/_objects/courses
import coursesBanner from '../_objects/courses/Banner'
import Courses from '../_objects/courses/List'
import Course from '../_models/course'

// lib/_objects/guides
import guidesBanner from '../_objects/guides/Banner'
import Guides from '../_objects/podcasts/List'
import Guide from '../_models/podcast'

// lib/_objects/podcasts
import podcastsBanner from '../_objects/podcasts/Banner'
import Podcasts from '../_objects/guides/List'
import Podcast from '../_models/guide'

// lib/_objects/tech
import techBanner from '../_objects/tech/Banner'
import Tech from '../_objects/tech/List'
import Software from '../_models/tech/software'

// lib/_objects/videos
import videosBanner from '../_objects/videos/Banner'
import Videos from '../_objects/videos/List'
import Video from '../_models/video'

// lib/_objects/websites
import websitesBanner from '../_objects/websites/Banner'
import Websites from '../_objects/websites/List'
import Website from '../_models/website'

export default [
  {
    path: '/',
    component: libContainer,
    children: [
      {
        path: '/',
        component: libMain,
        children: [
          {
            path: '/',
            component: itemsView,
            children: [
              { name: 'articles', path: 'articles', components: { default: Articles, banner: articlesBanner } },
              { name: 'books', path: 'books', components: { default: Books, banner: booksBanner } },
              { name: 'courses', path: 'courses', components: { default: Courses, banner: coursesBanner } },
              { name: 'guides', path: 'guides', components: { default: Guides, banner: guidesBanner } },
              { name: 'podcasts', path: 'podcasts', components: { default: Podcasts, banner: podcastsBanner } },
              { name: 'tech', path: 'tech', components: { default: Tech, banner: techBanner } },
              { name: 'videos', path: 'videos', components: { default: Videos, banner: videosBanner } },
              { name: 'websites', path: 'websites', components: { default: Websites, banner: websitesBanner } }
            ]
          },
          {
            path: '/',
            component: itemView,
            children: [
              { name: 'article', path: 'article/:id', component: Article },
              { name: 'book', path: 'book/:id', component: Book },
              { name: 'course', path: 'course/:id', component: Course },
              { name: 'guide', path: 'guide/:id', component: Guide },
              { name: 'podcast', path: 'podcast/:id', component: Podcast },
              { name: 'software', path: 'software/:id', component: Software },
              { name: 'video', path: 'video/:id', component: Video },
              { name: 'website', path: 'website/:id', component: Website }
            ]
          }
        ]
      }
    ]
  }
]
