<template>
  <div id="app">
    <nav-bar class="z-50"></nav-bar>
    <router-view class="z-20"/>
  </div>
</template>

<script>
import '@/assets/css/master.css'

import NavBar from '@/components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
</style>
