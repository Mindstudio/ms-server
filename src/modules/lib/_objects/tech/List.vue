<template lang="html">
  <div class="container m-auto flex flex-col">
    <div class="p-8">
      <div class="flex flex-row flex-wrap p-6 border border-dashed border-grey-lighter">
        <div class="w-1/3 p-2" v-for="software in tech" :key="software._id">
          <card :software="software"></card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from '@/modules/lib/_objects/tech/Card'

export default {
  name: 'tech-list',
  computed: {
    tech () {
      //  TODO: change DB names
      return this.$store.state.apps
    }
  },
  components: {
    card
  }
}
</script>

<style lang="css">
</style>
