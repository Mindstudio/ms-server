<template lang="html">
  <div class="bg-grey-lightest py-8 ">
    <div class="container m-auto h-64 py-8 flex flex-row justify-between items-start">
      <div class="w-1/5">
        <h3 class="text-5xl text-grey font-light mb-4">mindstud.io</h3>
        <div class="flex flex-row justify-between">
          <p class="text-xs text-grey-darker">Github</p>
          <p class="text-xs text-grey-darker">Reddit</p>
          <p class="text-xs text-grey-darker">Twitter</p>
          <p class="text-xs text-grey-darker">|</p>
          <p class="text-xs text-grey-darker">Riot</p>
        </div>
      </div>
      <div class="w-2/5 flex flex-row justify-around">
        <div class="" v-for="set in 3" :key="set.id">
          <h5 class="text-base text-grey-darkest font-medium mb-4">Header</h5>
          <ul class="list-reset" v-for="i in 5" :key="i.id">
            <li class="text-sm mb-2">
              <a href="#" class="text-grey-darker no-underline hover:text-grey-darkest hover:underline">
                Link{{ i }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-1/5 text-center">
        wisdom:
        <p class="text-xs text-grey">value</p>
        <p class="text-xs text-grey">principle</p>
        <p class="text-xs text-grey">heuristic</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-footer'
}
</script>

<style lang="css">
</style>
