<template lang="html">
  <div class="flex flex-row">

    <div class="h-64 flex flex-row border border-grey-lighter shadow">
      <div class="w-9/20 bg-grey-lightest">
        img
      </div>
      <div class="w-11/20 p-4 flex flex-col justify-between">
        <router-link
          :to="{ name: 'guide', params: { id: guide._id } }"
          class="text-xl text-grey-darkest font-medium no-underline hover:underline"
          >{{ guide.title }}
        </router-link>
        <p class="w-19/10 text-sm text-grey-darker leading-normal">
          {{ guide.intro }}
        </p>
        <div class="flex flex-row justify-between">
          <h5 class="text-grey-dark font-medium">
            {{ guide.authors[0].first_name }}
            {{ guide.authors[0].last_name }}
          </h5>
          <p class="text-xs text-grey mr-4">
            #{{ guide.subject }}
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['guide']
}
</script>

<style lang="css">
</style>
