<template lang="html">
  <div class="min-h-screen">
    <div class="h-80 flex flex-row border-r border-b border-l">
      <div class="w-3/4 flex flex-col justify-between p-4 bg-grey-lighter">
        <div class="">
          <h5 class="text-base text-grey-dark font-medium mb-2">
            #{{ website.subject }}
          </h5>
          <h3 class="text-3xl text-grey-darker font-light mb-2">
            {{ website.name }}
          </h3>
          <h6 class="text-base text-grey-dark leading-normal font-medium">
            {{ website.intro[0] }}
          </h6>
        </div>
      </div>
      <div class="w-1/4 flex flex-col justify-between border-l p-4 bg-grey-lightest">
        <h6 class="text-base text-grey-dark leading-normal font-medium">
          {{ website.intro[1] }}
        </h6>
      </div>
    </div>
    <div class="flex flex-row border-r border-white">
      <div class="w-3/4 h-120 p-4">
        <div class="h-full border">
          <p class="text-grey leading-normal">
            1. Review // summary, relevance, importance, timescale, applicability
          </p>
          <p class="text-grey leading-normal">
            2. Analysis // stats, key metrics etc
          </p>
        </div>
      </div>
      <div class="w-1/4 h-120 border-l border-dashed p-4">
        <div class="h-full border">
          <h4 class="text-base text-grey-dark font-medium">
            - {{ website.img }}s
          </h4>
          <h4 class="text-base text-grey-dark font-medium">
            - Interactivity
          </h4>
        </div>
      </div>
    </div>
    <div class="flex flex-row border-r border-white">
      <div class="w-3/4 p-4">
        <div class="text-xs text-grey">
          website highlights
          <br>
          products
          <br>
          links to other items e.g. articles / books / courses etc
        </div>
      </div>
      <div class="w-1/4 p-4 border-l border-dashed">
        <p class="text-base text-grey-dark">
          {{ website.founders[0].first_name }}
          {{ website.founders[0].last_name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    website () {
      return this.$store.getters.getWebsiteById(this.$route.params.id)
    }
  }
}
</script>

<style lang="css">
</style>
