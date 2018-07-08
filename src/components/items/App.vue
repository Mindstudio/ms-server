<template lang="html">
  <div class="min-h-screen">
    <div class="h-80 flex flex-row border-r border-b border-l">
      <div class="w-3/4 flex flex-col justify-between p-4 bg-grey-lighter">
        <div class="">
          <div class="flex flex-row justify-between items-center">
            <p class="text-base text-grey-dark font-medium mb-2">
              #{{ app.topics[0] }}
            </p>
            <p class="text-sm text-grey-dark font-medium mb-2">
              Price:
              £{{ app.price }}.00
            </p>
          </div>
          <h3 class="text-3xl text-grey-darker font-light mb-2">
            {{ app.name }}
          </h3>

        </div>
        <div class="flex flex-row justify-between items-center">
          <div class="flex flex-row items-center">
            <p class="text-base text-grey-darker font-medium mr-4">
              Links:
              <!-- {{ app.site.main }} -->
            </p>
            <p class="text-sm text-grey-dark font-medium mr-4">
              Website
              <!-- {{ app.site.main }} -->
            </p>
            <p class="text-sm text-grey-dark font-medium mr-4">
              Docs
              <!-- {{ app.site.docs }} -->
            </p>
            <p class="text-sm text-grey-dark font-medium mr-4">
              Forum
              <!-- {{ app.site.forum }} -->
            </p>
            <p class="text-sm text-grey-dark font-medium mr-4">
              Chat
              <!-- {{ app.site.chat }} -->
            </p>
          </div>
          <p class="text-sm text-grey-dark font-medium">
            {{ app.license }}
          </p>
        </div>
      </div>
      <div class="w-1/4 flex flex-col justify-between border-l p-4 bg-grey-lightest">
        <p class="text-base text-grey-dark leading-normal font-medium">
          {{ app.intro }}
        </p>
      </div>
    </div>
    <div class="flex flex-row border-r border-white">
      <div class="w-3/4 h-120 p-4">
        <div class="h-full p-2 border text-grey leading-normal">
          <p class="">
            1. Review // summary, relevance, importance, timescale, applicability
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
            {{ app.reqs.os[0] }},
            {{ app.reqs.os[1] }},
            {{ app.reqs.os[2] }}
          </p>
          <p class="text-sm text-grey-dark leading-normal font-medium mb-2">
            Technical Requirements:
            {{ app.reqs.ram }}
            {{ app.reqs.optional_gpu }}
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
    app () {
      return this.$store.getters.getAppById(this.$route.params.id)
    }
  }
}
</script>

<style lang="css">
</style>
