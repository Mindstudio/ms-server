<template lang="html">
  <div class="container m-auto flex flex-col">
    <div class="p-8">
      <div class="flex flex-row flex-wrap p-6 border border-dashed border-grey-lighter">
        <div class="w-1/3 p-2" v-for="video in videos" :key="video._id">
          <card :video="video"></card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from '@/modules/lib/_objects/videos/Card'

export default {
  name: 'videos-list',
  computed: {
    videos () {
      return this.$store.state.videos
    }
  },
  components: {
    card
  }
}
</script>

<style lang="css">
</style>
