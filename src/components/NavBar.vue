<template lang="html">
  <nav class="h-12 border-b shadow flex items-center">
    <div class="container m-auto flex flex-row justify-between">
      <div class="w-1/6 py-1 flex flex-row justify-between items-center">
        <router-link
          :to="{ name: 'home' }"
          class="text-base text-grey no-underline"
          >mindstud.io
        </router-link>
      </div>
      <div class="w-2/5 flex flex-row justify-between text-xs text-right">
        <router-link
          :to="{ name: 'articles' }"
          class="py-1 no-underline text-grey-dark hover:text-purple-dark tracking-wide"
          >Articles
        </router-link>
        <router-link
          :to="{ name: 'books' }"
          class="py-1 no-underline text-grey-dark hover:text-purple-dark tracking-wide"
          >Books
        </router-link>
        <router-link
          :to="{ name: 'courses' }"
          class="py-1 no-underline text-grey-dark hover:text-purple-dark tracking-wide"
          >Courses
        </router-link>
        <router-link
          :to="{ name: 'guides' }"
          class="py-1 no-underline text-grey-dark hover:text-purple-dark tracking-wide"
          >Guides
        </router-link>
        <router-link
          :to="{ name: 'podcasts' }"
          class="py-1 no-underline text-grey-dark hover:text-purple-dark tracking-wide"
          >Podcasts
        </router-link>
        <router-link
          :to="{ name: 'sites' }"
          class="py-1 no-underline text-grey-dark hover:text-purple-dark tracking-wide"
          >Sites
        </router-link>
        <router-link
          :to="{ name: 'videos' }"
          class="py-1 no-underline text-grey-dark hover:text-purple-dark tracking-wide"
          >Videos
        </router-link>
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
