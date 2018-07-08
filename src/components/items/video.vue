<template lang="html">
  <div class="min-h-screen">
    <div class="h-80 flex flex-row border-r border-b border-l">
      <div class="w-3/4 flex flex-col justify-between p-4 bg-grey-lighter">
        <div class="">
          <h5 class="text-base text-grey-dark font-medium mb-2">
            #{{ video.subject }}
          </h5>
          <h3 class="text-3xl text-grey-darker font-light mb-2">
            {{ video.title }}
          </h3>
          <p class="text-sm text-grey">
            Video Length: 6:46 mins
          </p>
        </div>
      </div>
      <div class="w-1/4 flex flex-col justify-between border-l p-4 bg-grey-lightest">
        <h6 class="text-base text-grey-dark leading-normal font-medium">
          video.intro
        </h6>
        <h6 class="text-base text-grey-dark leading-normal font-medium">
          {{ video.series }}
        </h6>
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
        <div class="text-xs text-grey">
          - video materials
          <br>
          - highlights
          <br>
          - key concepts related to {{ video.topics }}
        </div>
      </div>
      <div class="w-1/4 p-4 border-l border-dashed">
        <p class="text-base text-grey-dark">
          {{ video.hosts[0].first_name }}
          {{ video.hosts[0].last_name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    video () {
      return this.$store.getters.getVideoById(this.$route.params.id)
    }
  }
}
</script>

<style lang="css">
</style>
