<template lang="html">
  <div class="container m-auto">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'library',
  mounted: function () {
    this.$store.dispatch('load_items')
  }
}
</script>

<style lang="css">
</style>
