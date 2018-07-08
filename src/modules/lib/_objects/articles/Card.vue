<template lang="html">
  <div class="flex flex-row">
    <div class="w-3/4 h-64 flex flex-row border border-grey-lighter shadow">
      <div class="w-7/20 bg-grey-lightest">
        img
      </div>
      <div class="w-13/20 p-4 flex flex-col justify-between">
        <div class="flex flex-row justify-between items-center">
          <h5 class="text-grey-dark font-medium">
            {{ article.authors[0].first_name }}
            {{ article.authors[0].last_name }}
          </h5>
          <h5 class="text-grey font-medium">{{ article.publisher }}</h5>
        </div>
        <div class="flex flex-row justify-between items-center">
          <router-link
            :to="{ name: 'article', params: { id: article._id } }"
            class="text-xl text-grey-darkest font-medium no-underline hover:underline"
            >{{ article.title }}
          </router-link>
          <p class="text-xs text-grey">MS</p>
        </div>
        <p class="w-19/10 text-sm text-grey-darker leading-normal">
          {{ article.intro }}
        </p>
        <h5 class="text-grey font-medium">{{ article.url }}</h5>
        <div class="flex flex-row">
          <p class="text-xs text-grey mr-4"
            v-for="topic in article.topics"
            :key="topic.id">
            #{{ topic }}
          </p>
        </div>
      </div>
    </div>
    <div class="w-1/4 h-64 p-4">
        <p class="text-sm text-grey-darker font-light">Discover:</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'article-card',
  props: ['article']
}
</script>

<style lang="css">
</style>
