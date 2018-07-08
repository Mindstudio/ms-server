<template lang="html">
  <div class="w-full">

    <div class="h-64 flex flex-col justify-between border border-grey-lighter shadow">
      <!-- TODO: Relative Hover => website Details (description, tages, related) -->
      <div class="h-48 text-xs p-2">
        {{ website.img }}
      </div>
      <div class="flex flex-row justify-between p-2 bg-grey-lightest border-t border-grey-lighter">
        <h5 class="w-3/4 text-xs text-grey-dark font-medium leading-tight">
          <router-link
            :to="{ name: 'website', params: { id: website._id } }"
            class="text-xl text-grey-darkest font-medium no-underline hover:underline"
            >{{ website.name }}
          </router-link>
        </h5>
        <!-- TODO: Date since release / update -->
        <p class="w-1/4 text-xs text-right text-grey">{{ website.topic }}</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['website']
}
</script>

<style lang="css">
</style>
