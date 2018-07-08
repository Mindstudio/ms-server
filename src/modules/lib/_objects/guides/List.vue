<template lang="html">
  <div class="container m-auto flex flex-col">
    <div class="p-8">
      <div class="flex flex-row flex-wrap px-6 py-4 border border-dashed border-grey-lighter">
        <div class="w-1/2 flex flex-row flex-wrap px-2 py-4 border-b border-dashed border-grey-lightest" v-for="guide in guides" :key="guide._id">
          <card :guide="guide"></card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from '@/modules/lib/_objects/guides/Card'

export default {
  name: 'guides-list',
  computed: {
    guides () {
      return this.$store.state.guides
    }
  },
  components: {
    card
  }
}
</script>

<style lang="css">
</style>
