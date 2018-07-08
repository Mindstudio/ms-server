<template lang="html">
  <div class="container m-auto flex flex-col">

    <!-- TODO: Search, filter, sorting -->

    <div class="p-8">
      <div class="flex flex-col px-6 py-4 border border-dashed border-grey-lighter">
        <div class="flex flex-row px-2 py-4 border-b border-dashed border-grey-lightest" v-for="article in articles" :key="article._id">
          <card :article="article"></card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import card from '@/modules/lib/_objects/articles/Card'

export default {
  name: 'articles-list',
  computed: {
    articles () {
      return this.$store.state.articles
    }
  },
  components: {
    card
  }
}
</script>

<style lang="css">
</style>
