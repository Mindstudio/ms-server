<template lang="html">
  <nav class="h-12 border-b shadow flex items-center">
    <div class="container m-auto flex flex-row justify-between">
      <div class="w-1/4 py-1 flex flex-row justify-between items-center">
        <router-link
          :to="{ name: 'home' }"
          class="text-base text-grey no-underline"
          >mindstud.io
        </router-link>
        <div class="flex flex-row text-xs">
          <router-link
            :to="{ name: 'articles' }"
            class="py-1 no-underline text-grey-dark hover:text-purple-dark tracking-wide mr-4"
            >Blog
          </router-link>
          <router-link
            :to="{ name: 'index' }"
            class="py-1 no-underline text-grey-dark hover:text-purple-dark tracking-wide mr-4"
            >Index
          </router-link>
          <router-link
            :to="{ name: 'library' }"
            class="py-1 no-underline text-grey-dark hover:text-purple-dark tracking-wide mr-4"
            >Library
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
