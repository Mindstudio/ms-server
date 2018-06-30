<template lang="html">
  <div class="container m-auto flex flex-col">
    <div class="h-80 flex justify-around items-center bg-grey-lightest border border-grey-lighter">
      <h3 class="relative text-3xl text-grey tracking-wide font-light">22nd Century Preparation</h3>
    </div>

    <!-- <div class="border p-4 w-1/4" v-for="item in items" :key="item._id">
      <p class="text-base text-grey-darker">{{ item.name }}</p>
      <p class="text-sm text-grey">{{ item.info }}</p>
    </div> -->

    <!-- TODO: Search, filter, sorting -->

    <div class="p-8">
      <div class="flex flex-col px-6 py-4 border border-dashed border-grey-lighter">
        <div class="flex flex-row px-2 py-4 border-b border-dashed border-grey-lightest" v-for="article in articles" :key="article._id">
          <div class="w-3/4 h-64 flex flex-row border border-grey-lighter shadow">
            <div class="w-7/20 bg-grey-lightest">
              img
            </div>
            <div class="w-13/20 p-4 flex flex-col justify-between">
              <div class="flex flex-row justify-between items-center">
                <h4 class="text-xl text-grey-darkest font-medium">
                  {{ article.title }}</h4>
                <p class="text-xs text-grey">MS</p>
              </div>
              <p class="w-19/10 text-sm text-grey-darker leading-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.</p>
              <div class="flex flex-row justify-between items-center">
            <h5 class="text-grey-dark font-medium">{{ article.author }}</h5>
                <h5 class="text-grey font-medium">{{ article.site }}</h5>
              </div>
              <div class="w-1/2 content-end flex flex-row justify-between">
                <p
                  class="text-xs text-grey"
                  v-for="topic in 5"
                  :key="topic.id">#topic</p>
              </div>
            </div>
          </div>
          <div class="w-1/4 h-64 p-4">
              <p class="text-sm text-grey-darker font-light">Discover:</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  name: 'articles',
  computed: {
    articles () {
      return this.$store.state.articles
    }
  }
}
</script>

<style lang="css">
</style>
