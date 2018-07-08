<template lang="html">
  <div class="">
    <!-- TODO: library menu // named route? -->
    <focus-nav></focus-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import focusNav from '../_components/navs/focusNav'

export default {
  name: 'focus-main',
  components: {
    focusNav
  }
}
</script>

<style lang="css">
</style>
