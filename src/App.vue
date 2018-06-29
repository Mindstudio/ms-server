<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
    <main-footer></main-footer>
  </div>
</template>

<script>
import '@/assets/css/master.css'

import NavBar from '@/components/NavBar'
import MainFooter from '@/components/MainFooter'

export default {
  name: 'App',
  components: {
    NavBar,
    MainFooter
  }
}
</script>

<style>
</style>
