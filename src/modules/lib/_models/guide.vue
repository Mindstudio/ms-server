<template lang="html">
  <div class="min-h-screen">
    <div class="h-80 flex flex-row border-r border-b border-l">
      <div class="w-3/4 flex flex-col justify-between p-4 bg-grey-lighter">
        <div class="">
          <h5 class="text-base text-grey-dark font-medium mb-2">
            #{{ guide.subject }}
          </h5>
          <h3 class="text-3xl text-grey-darker font-light mb-2">
            {{ guide.title }}
          </h3>
        </div>
      </div>
      <div class="w-1/4 flex flex-col justify-between border-l p-4 bg-grey-lightest">
        <h4 class="text-base text-grey-dark leading-normal font-light mb-2">
          {{ guide.intro }}
        </h4>
        <h5 class="text-base text-grey-dark font-medium">
          {{ guide.authors[0].first_name }}
          {{ guide.authors[0].last_name }}
        </h5>
      </div>
    </div>
    <div class="flex flex-row border-r border-white">
      <div class="w-3/4 p-4">
        <div class="mb-8">
          <h5 class="text-xl text-grey-darker font-medium mb-4">Summary:</h5>
          <p class="text-base text-grey-dark leading-normal mb-2"
            v-for="text in guide.text.summary"
            :key="text.id">
            {{ text }}
          </p>
        </div>
        <div class="mb-8">
          <h5 class="text-xl text-grey-darker font-medium mb-4">Definition:</h5>
          <p class="text-base text-grey-dark mb-2"
            v-for="text in guide.text.definition"
            :key="text.id">
            {{ text }}
          </p>
        </div>
        <div class="mb-8">
          <h5 class="text-xl text-grey-darker font-medium mb-4">Importance:</h5>
          <p class="text-base text-grey-dark mb-2"
            v-for="text in guide.text.importance"
            :key="text.id">
            {{ text }}
          </p>
        </div>
        <div class="mb-8">
          <h5 class="text-xl text-grey-darker font-medium mb-4">Relevance:</h5>
          <p class="text-base text-grey-dark mb-2"
            v-for="text in guide.text.relevance"
            :key="text.id">
            {{ text }}
          </p>
        </div>
        <div class="mb-8">
          <h5 class="text-xl text-grey-darker font-medium mb-4">Timescale:</h5>
          <p class="text-base text-grey-dark mb-2"
            v-for="text in guide.text.timescale"
            :key="text.id">
            {{ text }}
          </p>
        </div>
        <div class="mb-8">
          <h5 class="text-xl text-grey-darker font-medium mb-4">Application:</h5>
          <p class="text-base text-grey-dark mb-2"
            v-for="text in guide.text.application"
            :key="text.id">
            {{ text }}
          </p>
        </div>
      </div>
      <div class="w-1/4 p-4 border-l border-dashed">
        <h4 class="text-base text-grey-dark font-medium">
          Contents:
        </h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    guide () {
      return this.$store.getters.getGuideById(this.$route.params.id)
    }
  }
}
</script>

<style lang="css">
</style>
