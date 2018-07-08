<template lang="html">
  <div class="">
    <!-- TODO: library menu // named route? -->
    <lib-nav></lib-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import libNav from '../_components/navs/libNav'

export default {
  name: 'lib-main',
  components: {
    libNav
  }
}
</script>

<style lang="css">
</style>
