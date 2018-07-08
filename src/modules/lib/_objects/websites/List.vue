<template lang="html">
  <div class="container m-auto flex flex-col">
    <div class="p-8">
      <div class="flex flex-row flex-wrap p-6 border border-dashed border-grey-lighter">
        <div class="w-1/3 p-2" v-for="website in websites" :key="website._id">
          <card :website="website"></card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from '@/modules/lib/_objects/websites/Card'

export default {
  name: 'websites-list',
  computed: {
    websites () {
      return this.$store.state.websites
    }
  },
  components: {
    card
  }
}
</script>

<style lang="css">
</style>
