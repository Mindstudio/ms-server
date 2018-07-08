<template lang="html">
  <div class="">
    <!-- TODO: library menu // named route? -->
    <admin-nav></admin-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import adminNav from '../_components/navs/adminNav'

export default {
  name: 'admin-main',
  components: {
    adminNav
  }
}
</script>

<style lang="css">
</style>
