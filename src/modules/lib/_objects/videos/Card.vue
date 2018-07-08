<template lang="html">
  <div class="flex flex-row">

    <div class="h-64 flex flex-col justify-between border border-grey-lighter shadow">
      <!-- TODO: Relative Hover => video Details (description, tages, related) -->
      <div class="h-48 text-xs p-2">
        <router-link
          :to="{ name: 'video', params: { id: video._id } }"
          class="text-xl text-grey-darkest font-medium no-underline hover:underline mb-2"
          tag="h4"
          >{{ video.title }}
        </router-link>
        <p class="text-sm text-grey">
          {{ video.series }}
        </p>
      </div>
      <div class="flex flex-row justify-between p-2 bg-grey-lightest border-t border-grey-lighter">
        <p class="w-1/4 text-xs text-grey">
          {{ video.hosts[0].first_name }} {{ video.hosts[0].last_name }}
        </p>
        <!-- TODO: Date since release / update -->
        <p class="w-1/4 text-xs text-right text-grey">
          {{ video.date_pub }}
        </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['video']
}
</script>

<style lang="css">
</style>
