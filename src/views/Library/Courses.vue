<template lang="html">
  <div class="container m-auto flex flex-col">
    <div class="h-80 flex justify-around items-center bg-grey-lightest border border-grey-lighter">
      <h3 class="relative text-3xl text-grey tracking-wide font-light">22nd Century Preparation</h3>
    </div>

    <!-- TODO: Search, filter, sorting -->

    <div class="p-8">
      <div class="flex flex-row flex-wrap p-6 border border-dashed border-grey-lighter">
        <div class="w-1/3 p-2" v-for="course in courses" :key="course._id">
          <div class="h-64 flex flex-col justify-between border border-grey-lighter shadow">
            <!-- TODO: Relative Hover => Course Details (description, tages, related) -->
            <div class="h-48 text-xs p-2">
              {{ course.title }}
            </div>
            <div class="flex flex-row justify-between p-2 bg-grey-lightest border-t border-grey-lighter">
              <h5 class="w-3/4 text-xs text-grey-dark font-medium leading-tight">
                {{ course.topic }}
              </h5>
              <!-- TODO: Date since release / update -->
              <p class="w-1/4 text-xs text-right text-grey">#course.date</p>
            </div>
          </div>
        </div>
        <div class="w-1/4 p-3">
          <div class="h-64 flex flex-col justify-around items-center text-center">
            <router-link :to="{ name: '' }" class="text-lg text-grey no-underline hover:text-grey-darker">Make a <br />Recommendation</router-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'courses',
  computed: {
    courses () {
      return this.$store.state.courses
    }
  }
}
</script>

<style lang="css">
</style>
