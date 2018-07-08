<template lang="html">
  <nav class="text-xs">
    <router-link
      :to="{ name: 'articles' }"
      class="py-1 no-underline text-grey-dark hover:text-purple-dark tracking-wide mr-4"
      tag="button"
      >Articles
    </router-link>
    <router-link
      :to="{ name: 'books' }"
      class="py-1 no-underline text-grey-dark hover:text-purple-dark tracking-wide mr-4"
      tag="button"
      >Books
    </router-link>
    <router-link
      :to="{ name: 'courses' }"
      class="py-1 no-underline text-grey-dark hover:text-purple-dark tracking-wide mr-4"
      tag="button"
      >Courses
    </router-link>
    <router-link
      :to="{ name: 'guides' }"
      class="py-1 no-underline text-grey-dark hover:text-purple-dark tracking-wide mr-4"
      tag="button"
      >Guides
    </router-link>
    <router-link
      :to="{ name: 'podcasts' }"
      class="py-1 no-underline text-grey-dark hover:text-purple-dark tracking-wide mr-4"
      tag="button"
      >Podcasts
    </router-link>
    <router-link
      :to="{ name: 'tech' }"
      class="py-1 no-underline text-grey-dark hover:text-purple-dark tracking-wide mr-4"
      tag="button"
      >Tech
    </router-link>
    <router-link
      :to="{ name: 'videos' }"
      class="py-1 no-underline text-grey-dark hover:text-purple-dark tracking-wide mr-4"
      tag="button"
      >Videos
    </router-link>
    <router-link
      :to="{ name: 'websites' }"
      class="py-1 no-underline text-grey-dark hover:text-purple-dark tracking-wide mr-4"
      tag="button"
      >Websites
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'lib-menu'
}
</script>

<style lang="css">
</style>
