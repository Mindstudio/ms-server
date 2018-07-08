<template lang="html">
  <div class="container m-auto flex flex-col">
    <div class="p-8">
      <div class="flex flex-row flex-wrap p-6 border border-dashed border-grey-lighter">
        <div class="w-1/2 p-2" v-for="podcast in podcasts" :key="podcast._id">
          <card :podcast="podcast"></card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from '@/modules/lib/_objects/podcasts/Card'

export default {
  name: 'podcasts-list',
  computed: {
    podcasts () {
      return this.$store.state.podcasts
    }
  },
  components: {
    card
  }
}
</script>

<style lang="css">
</style>
