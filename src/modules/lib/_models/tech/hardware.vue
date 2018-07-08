<template lang="html">
  <div class="min-h-screen">
    <div class="h-80 flex flex-row border-r border-b border-l">
      <div class="w-3/4 flex flex-col justify-between p-4 bg-grey-lighter">
        <div class="">
          <div class="flex flex-row justify-between items-center">
            <p class="text-base text-grey-dark font-medium mb-2">
              #{{ software.topics[0] }}
            </p>
            <p class="text-sm text-grey-dark font-medium mb-2">
              Price:
              £{{ software.price }}.00
            </p>
          </div>
          <h3 class="text-3xl text-grey-darker font-light mb-2">
            {{ software.name }}
          </h3>

        </div>
        <div class="flex flex-row justify-between items-center">
          <div class="flex flex-row items-center">
            <p class="text-base text-grey-darker font-medium mr-4">
              Links:
              <!-- {{ software.site.main }} -->
            </p>
            <p class="text-sm text-grey-dark font-medium mr-4">
              Website
              <!-- {{ software.site.main }} -->
            </p>
            <p class="text-sm text-grey-dark font-medium mr-4">
              Docs
              <!-- {{ software.site.docs }} -->
            </p>
            <p class="text-sm text-grey-dark font-medium mr-4">
              Forum
              <!-- {{ software.site.forum }} -->
            </p>
            <p class="text-sm text-grey-dark font-medium mr-4">
              Chat
              <!-- {{ software.site.chat }} -->
            </p>
          </div>
          <p class="text-sm text-grey-dark font-medium">
            {{ software.license }}
          </p>
        </div>
      </div>
      <div class="w-1/4 flex flex-col justify-between border-l p-4 bg-grey-lightest">
        <p class="text-base text-grey-dark leading-normal font-medium">
          {{ software.intro }}
        </p>
      </div>
    </div>
    <div class="flex flex-row border-r border-white">
      <div class="w-3/4 h-120 p-4">
        <div class="h-full p-2 border text-grey leading-normal">
          <p class="">
            1. Review // summary, relevance, importance, timescale, softwarelicability
          </p>
          <p class="">
            2. Analysis // stats, key metrics etc
          </p>
          <p class="">
            3. features // comparison button
          </p>
        </div>
      </div>
      <div class="w-1/4 h-120 border-l border-dashed p-4">
        <div class="h-full p-2 border">
          <p class="text-base text-grey-darker mb-2">
            - Technical Details:
          </p>
          <p class="text-sm text-grey-dark font-medium mb-2">
            Platforms:
            {{ software.reqs.os[0] }},
            {{ software.reqs.os[1] }},
            {{ software.reqs.os[2] }}
          </p>
          <p class="text-sm text-grey-dark leading-normal font-medium mb-2">
            Technical Requirements:
            {{ software.reqs.ram }}
            {{ software.reqs.optional_gpu }}
          </p>
          <p class="text-base text-grey-darker font-medium">
            - Screenshots
          </p>
          <p class="text-base text-grey-darker font-medium">
            - Interactivity
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-row border-r border-white">
      <div class="w-3/4 p-4">
        <div class="text-xs text-grey">
          - highlights
          <br>
          - warnings / bugs / issues
        </div>
      </div>
      <div class="w-1/4 p-4 border-l border-dashed">
        <p class="text-base text-grey-dark">
          people / contributors
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    software () {
      return this.$store.getters.getAppById(this.$route.params.id)
    }
  }
}
</script>

<style lang="css">
</style>
