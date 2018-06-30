<template lang="html">
  <div class="container m-auto flex flex-col">
    <div class="h-80 flex justify-around items-center bg-grey-lightest border border-grey-lighter">
      <h3 class="relative text-3xl text-grey tracking-wide font-light">22nd Century Preparation</h3>
    </div>

    <!-- TODO: Search, filter, sorting -->

    <div class="p-8">
      <div class="flex flex-row flex-wrap px-6 py-4 border border-dashed border-grey-lighter">
        <div class="w-1/2 flex flex-row flex-wrap px-2 py-4 border-b border-dashed border-grey-lightest" v-for="guide in guides" :key="guide._id">
          <div class="h-64 flex flex-row border border-grey-lighter shadow">
            <div class="w-9/20 bg-grey-lightest">
              img
            </div>
            <div class="w-11/20 p-4 flex flex-col justify-between">
              <h4 class="text-xl text-grey-darkest font-medium">
                {{ guide.title }}
              </h4>
              <p class="w-19/10 text-sm text-grey-darker leading-normal">
                {{ guide.text }}
              </p>
              <h5 class="text-grey-dark font-medium">{{ guide.author }}</h5>
              <div class="w-1/2 content-end flex flex-row justify-between">
                <p
                  class="text-xs text-grey mr-2"
                  v-for="topic in guide.topics"
                  :key="topic.id">{{ topic }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'guides',
  computed: {
    guides () {
      return this.$store.state.guides
    }
  }
}
</script>

<style lang="css">
</style>
