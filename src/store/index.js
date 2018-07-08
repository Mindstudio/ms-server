import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: {},
    books: {},
    courses: {},
    guides: {},
    podcasts: {},
    apps: {},
    videos: {},
    websites: {}
  },

  getters: {
    getArticleById: (state) => (id) => {
      return state.articles.find(article => article._id === id)
    },
    getBookById: (state) => (id) => {
      return state.books.find(book => book._id === id)
    },
    getCourseById: (state) => (id) => {
      return state.courses.find(course => course._id === id)
    },
    getGuideById: (state) => (id) => {
      return state.guides.find(guide => guide._id === id)
    },
    getPodcastById: (state) => (id) => {
      return state.podcasts.find(podcast => podcast._id === id)
    },
    getAppById: (state) => (id) => {
      return state.apps.find(app => app._id === id)
    },
    getVideoById: (state) => (id) => {
      return state.videos.find(video => video._id === id)
    },
    getWebsiteById: (state) => (id) => {
      return state.websites.find(website => website._id === id)
    }
  },

  actions: {
    // load_items: function ({ commit }) {
    //   axios.get('/items').then((res) => {
    //     commit('set_items', { payload: res.data })
    //   }, (err) => {
    //     console.log(err)
    //   })
    // },
    load_articles: function ({ commit }) {
      axios.get('/articles').then((res) => {
        commit('set_articles', { payload: res.data.articles })
      }, (err) => {
        console.log(err)
      })
    },
    load_books: function ({ commit }) {
      axios.get('/books').then((res) => {
        commit('set_books', { payload: res.data.books })
      }, (err) => {
        console.log(err)
      })
    },
    load_courses: function ({ commit }) {
      axios.get('/courses').then((res) => {
        commit('set_courses', { payload: res.data.courses })
      }, (err) => {
        console.log(err)
      })
    },
    load_guides: function ({ commit }) {
      axios.get('/guides').then((res) => {
        commit('set_guides', { payload: res.data.guides })
      }, (err) => {
        console.log(err)
      })
    },
    load_podcasts: function ({ commit }) {
      axios.get('/podcasts').then((res) => {
        commit('set_podcasts', { payload: res.data.podcasts })
      }, (err) => {
        console.log(err)
      })
    },
    load_apps: function ({ commit }) {
      axios.get('/apps').then((res) => {
        commit('set_apps', { payload: res.data.apps })
      }, (err) => {
        console.log(err)
      })
    },
    load_videos: function ({ commit }) {
      axios.get('/videos').then((res) => {
        commit('set_videos', { payload: res.data.videos })
      }, (err) => {
        console.log(err)
      })
    },
    load_websites: function ({ commit }) {
      axios.get('/websites').then((res) => {
        commit('set_websites', { payload: res.data.websites })
      }, (err) => {
        console.log(err)
      })
    }
  },

  mutations: {
    // set_items: (state, { payload }) => {
    //   state.data.items = payload
    // },
    set_articles: (state, { payload }) => {
      state.articles = payload
    },
    set_books: (state, { payload }) => {
      state.books = payload
    },
    set_courses: (state, { payload }) => {
      state.courses = payload
    },
    set_guides: (state, { payload }) => {
      state.guides = payload
    },
    set_podcasts: (state, { payload }) => {
      state.podcasts = payload
    },
    set_apps: (state, { payload }) => {
      state.apps = payload
    },
    set_videos: (state, { payload }) => {
      state.videos = payload
    },
    set_websites: (state, { payload }) => {
      state.websites = payload
    }
  },

  modules: {}

})
