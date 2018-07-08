<template lang="html">
  <div class="min-h-screen">
    <div class="h-80 flex flex-row border-r border-b border-l">
      <div class="w-3/4 flex flex-col justify-between p-4 bg-grey-lighter">
        <div class="">
          <h5 class="text-base text-grey-dark font-medium mb-2">
            #{{ article.subject }}
          </h5>
          <h3 class="text-3xl text-grey-darker font-light mb-2">
            {{ article.title }}
          </h3>
          <p class="text-sm text-grey">
            Reading Time: {{ article.reading_time}}
          </p>
        </div>
      </div>
      <div class="w-1/4 flex flex-col justify-between border-l p-4 bg-grey-lightest">
        <h6 class="text-base text-grey-dark font-medium">
          {{ article.publisher }}
        </h6>
        <h5 class="text-base text-grey-dark font-medium">
          {{ article.authors[0].first_name }}
          {{ article.authors[0].last_name }}
        </h5>
      </div>
    </div>
    <div class="flex flex-row border-r border-white">
      <div class="w-3/4 p-4">
        <h4 class="text-xl text-grey-dark leading-normal font-light mb-2">
          {{ article.intro }}
        </h4>
        <br>
        <p class="text-grey leading-normal">{{ article.text[0] }}</p>
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
    article () {
      return this.$store.getters.getArticleById(this.$route.params.id)
    }
  }
}
</script>

<style lang="css">
</style>
