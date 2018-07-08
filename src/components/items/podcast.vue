<template lang="html">
  <div class="min-h-screen">
    <div class="h-80 flex flex-row border-r border-b border-l">
      <div class="w-3/4 flex flex-col justify-between p-4 bg-grey-lighter">
        <div class="">
          <h5 class="text-base text-grey-dark font-medium mb-2">
            #{{ podcast.subject }}
          </h5>
          <h3 class="text-3xl text-grey-darker font-light mb-2">
            {{ podcast.title }}
          </h3>

        </div>
      </div>
      <div class="w-1/4 flex flex-col justify-between border-l p-4 bg-grey-lightest">
        <h6 class="text-base text-grey-dark leading-normal font-medium">
          {{ podcast.intro[0] }}
        </h6>
        <p class="text-sm text-grey-dark">
          Frequency: 2 Weeks
        </p>
      </div>
    </div>
    <div class="flex flex-row border-r border-white">
      <div class="w-3/4 h-120 p-4">
        <div class="h-full border">
          <p class="text-grey leading-normal">
            1. Video Player
          </p>
          <p class="text-grey leading-normal">
            2. Live Transcript
          </p>
          <p class="text-grey leading-normal">
            3. Video Player + Live Transcript
          </p>
        </div>
      </div>
      <div class="w-1/4 h-120 border-l border-dashed p-4">
        <div class="h-full border">
          <h4 class="text-base text-grey-dark font-medium">
            - Control Panel
          </h4>
          <h4 class="text-base text-grey-dark font-medium">
            - Notes
          </h4>
          <h4 class="text-base text-grey-dark font-medium">
            - Share Functionality
          </h4>
        </div>
      </div>
    </div>
    <div class="flex flex-row border-r border-white">
      <div class="w-3/4 p-4">
        <div class="w-1/3 border">
          <div class="border-b h-48 text-xs text-grey">
            guest.img
          </div>
          <p class="text-sm text-grey-dark leading-normal p-2">
            {{ podcast.episodes[0].guest.first_name }}
            {{ podcast.episodes[0].guest.last_name }}
          </p>
        </div>
      </div>
      <div class="w-1/4 p-4 border-l border-dashed">
        <p class="text-base text-grey-dark">
          {{ podcast.hosts[0].first_name }}
          {{ podcast.hosts[0].last_name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    podcast () {
      return this.$store.getters.getPodcastById(this.$route.params.id)
    }
  }
}
</script>

<style lang="css">
</style>
