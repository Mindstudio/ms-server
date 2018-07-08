<template lang="html">
  <div class="">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'lib-container',
  // TODO: ...mapActions
  mounted: function () {
    this.$store.dispatch('load_articles')
    this.$store.dispatch('load_books')
    this.$store.dispatch('load_courses')
    this.$store.dispatch('load_guides')
    this.$store.dispatch('load_podcasts')
    this.$store.dispatch('load_apps')
    this.$store.dispatch('load_videos')
    this.$store.dispatch('load_websites')
  }
}
</script>

<style lang="css">
</style>
