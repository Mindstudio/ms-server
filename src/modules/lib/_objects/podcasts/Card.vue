<template lang="html">
  <div class="flex flex-row">

    <div class="h-64 flex flex-col justify-between border border-grey-lighter shadow">
      <div class="h-full flex flex-row justify-between">
        <div class="w-1/2 p-4 border-r border-grey-lighter">
          <router-link
            :to="{ name: 'podcast', params: { id: podcast._id } }"
            class="text-lg text-grey-darkest font-medium no-underline hover:underline mb-2"
            tag="p">
            {{ podcast.title }}
          </router-link>
          <p class="w-19/20 text-xs text-grey-darker leading-normal">
            {{ podcast.intro[0] }}
          </p>
        </div>
        <div class="w-1/2 p-4 flex flex-col justify-between">
          <div class="flex flex-row">
            <router-link
              :to="{ name: 'podcast', params: { id: podcast._id } }"
              class="text-sm text-grey-darkest font-medium no-underline hover:underline">
              {{ podcast.episodes[0].title }}
            </router-link>
          </div>
          <p class="w-19/20 text-xs text-grey-darker leading-normal">
            {{ podcast.intro[1] }}
          </p>
          <div class="">
            <h5 class="text-grey-darker font-medium mb-2">
              Guest/s:
            </h5>
            <h5 class="text-grey font-medium">
              {{ podcast.episodes[0].guest.first_name }}
              {{ podcast.episodes[0].guest.last_name }}
            </h5>
          </div>
          <div class="w-1/2 content-end flex flex-row">
            <p class="text-xs text-grey">
              #{{ podcast.subject }}
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-row justify-between p-2 bg-grey-lightest border-t border-grey-lighter">
        <h5 class="text-grey-dark font-medium">
          {{ podcast.hosts[0].first_name }} {{ podcast.hosts[0].last_name }}
        </h5>
        <h5 class="text-grey font-medium">
          {{ podcast.url }}
        </h5>
        <!-- TODO: Date since release / update -->
        <p class="w-1/4 text-xs text-right text-grey">
          {{ podcast.episodes[0].date }}
        </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['podcast']
}
</script>

<style lang="css">
</style>
