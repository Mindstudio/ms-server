<template lang="html">
  <div class="">
    Create
    <router-link :to="{ name: 'create-article', params: {} }">
      Article
    </router-link>
    <router-link :to="{ name: 'create-book', params: {} }">
      Book
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
