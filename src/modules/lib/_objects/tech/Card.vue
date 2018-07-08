<template lang="html">
  <div class="flex flex-row">

    <div class="h-64 flex flex-col justify-between border border-grey-lighter shadow">
      <!-- TODO: Relative Hover => softwares Details (description, tages, related) -->
      <div class="h-48 text-xs p-2">
        <div class="flex flex-row items-center justify-between mb-2">
          <router-link
            :to="{ name: 'software', params: { id: software._id } }"
            class="text-xl text-grey-darkest font-medium no-underline hover:underline"
            tag="h4"
            >{{ software.name }}
          </router-link>
          <h5 class="text-xs text-grey-dark font-medium leading-tight">
            {{ software.release }}
          </h5>
          <p class="text-xs text-grey">{{ software.site.main }}</p>
        </div>
        <h5 class="w-19/20 text-xs text-grey-dark font-medium leading-tight mb-2">
          {{ software.intro }}
        </h5>
        <!-- <p class="text-xs text-grey">{{ software.site.docs }}</p>
        <p class="text-xs text-grey">{{ software.site.forum }}</p>
        <p class="text-xs text-grey">{{ software.site.chat }}</p> -->
        <!-- <p class="text-xs text-grey">{{ software.network }}</p> -->
        <!-- <p class="text-xs text-grey">{{ software.reqs }}</p> -->
      </div>
      <div class="flex flex-row justify-between p-2 bg-grey-lightest border-t border-grey-lighter">
        <div class="w-full flex flex-row justify-between">
          <p
            class="text-xs text-grey mr-4"
            v-for="topic in software.topics"
            :key="topic.id"
            >#{{ topic }}
          </p>
          <p class="text-xs text-grey">{{ software.license }}</p>
          <p class="text-xs text-grey">£{{ software.price }}.00</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['software']
}
</script>

<style lang="css">
</style>
