<template lang="html">
  <div class="container m-auto flex flex-col">
    <div class="p-8">
      <div class="flex flex-row flex-wrap p-6 border border-dashed border-grey-lighter">
        <div class="w-1/3 p-2" v-for="course in courses" :key="course._id">
          <card :course="course"></card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from '@/modules/lib/_objects/courses/Card'

export default {
  name: 'courses-list',
  computed: {
    courses () {
      return this.$store.state.courses
    }
  },
  components: {
    card
  }
}
</script>

<style lang="css">
</style>
