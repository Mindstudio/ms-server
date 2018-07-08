<template lang="html">
  <div class="flex flex-row">

    <div class="h-64 flex flex-col justify-between border border-grey-lighter shadow">
      <!-- TODO: Relative Hover => Course Details (description, tages, related) -->
      <div class="h-48 text-xs p-2">
        <router-link
          :to="{ name: 'course', params: { id: course._id } }"
          class="text-xl text-grey-darkest font-medium no-underline hover:underline"
          >{{ course.title }}
        </router-link>
      </div>
      <div class="flex flex-row justify-between p-2 bg-grey-lightest border-t border-grey-lighter">
        <h5 class="text-xs text-grey-dark font-medium leading-tight">
          {{ course.details.subject }}
        </h5>
        <!-- TODO: Date since release / update -->
        <p class="w-1/4 text-xs text-right text-grey">
          {{ course.details.length }}
        </p>
        <h5 class="text-xs text-grey-dark font-medium leading-tight">
          <!-- TODO: Add currency filter && v-if="price === 0" => free -->
          £{{ course.price }}.00
        </h5>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['course']
}
</script>

<style lang="css">
</style>
