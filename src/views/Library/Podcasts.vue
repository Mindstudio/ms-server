<template lang="html">
  <div class="container m-auto flex flex-col">
    <div class="h-80 flex justify-around items-center bg-grey-lightest border border-grey-lighter">
      <h3 class="relative text-3xl text-grey tracking-wide font-light">22nd Century Preparation</h3>
    </div>

    <!-- TODO: Search, filter, sorting -->

    <div class="p-8">
      <div class="flex flex-row flex-wrap p-6 border border-dashed border-grey-lighter">
        <div class="w-1/2 p-2" v-for="podcast in podcasts" :key="podcast._id">
          <div class="h-64 flex flex-col justify-between border border-grey-lighter shadow">
            <!-- TODO: Relative Hover => Course Details (description, tages, related) -->

            <div class="h-full flex flex-row justify-between">
              <div class="w-1/2 text-xs p-2 border-r border-grey-lighter">
                {{ podcast.title }}.img
              </div>

              <div class="w-1/2 p-4 flex flex-col justify-between">
                <div class="flex flex-row justify-between items-center">
                  <h4 class="text-xl text-grey-darkest font-medium">
                    {{ podcast.episode }}
                  </h4>
                </div>
                <p class="w-19/10 text-sm text-grey-darker leading-normal">
                  {{ podcast.text }}
                </p>
                <div class="flex flex-row justify-between items-center">
                  <h5 class="text-grey-dark font-medium">
                    {{ podcast.author }}
                  </h5>
                  <h5 class="text-grey font-medium">
                    {{ podcast.site }}
                  </h5>
                </div>
                <div class="w-1/2 content-end flex flex-row justify-between">
                  <p
                    class="text-xs text-grey mr-2"
                    v-for="topic in podcast.topics"
                    :key="topic.id">{{ topic }}</p>
                </div>
              </div>
            </div>

            <div class="flex flex-row justify-between p-2 bg-grey-lightest border-t border-grey-lighter">
              <h5 class="w-3/4 text-xs text-grey-dark font-medium leading-tight">
                {{ podcast.topics }}
              </h5>
              <!-- TODO: Date since release / update -->
              <p class="w-1/4 text-xs text-right text-grey">.date</p>
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
  name: 'podcasts',
  computed: {
    podcasts () {
      return this.$store.state.podcasts
    }
  }
}
</script>

<style lang="css">
</style>
