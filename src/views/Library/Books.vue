<template lang="html">
  <div class="container m-auto flex flex-col">
    <div class="h-80 flex justify-around items-center bg-grey-lightest border border-grey-lighter">
      <h3 class="relative text-3xl text-grey tracking-wide font-light">22nd Century Preparation</h3>
    </div>

    <!-- TODO: Search, filter, sorting -->

    <div class="p-8">
      <div class="flex flex-row flex-wrap p-6 border border-dashed border-grey-lighter">
        <div class="w-1/4 p-2" v-for="book in books" :key="book._id">
          <div class="h-64 flex flex-col justify-between border border-grey-lighter shadow">
            <!-- TODO: Relative Hover => Book Details (description, tages, related) -->
            <div class="h-48 text-xs p-2">
              {{ book.title }}.img
            </div>
            <div class="flex flex-row justify-between p-2 bg-grey-lightest border-t border-grey-lighter">
              <h5 class="text-xs text-grey-dark font-medium">
                {{ book.author }}
              </h5>
              <p class="text-xs text-grey">{{ book.topic }}</p>
            </div>
          </div>
        </div>
        <div class="w-1/4 p-3">
          <div class="h-64 flex flex-col justify-around items-center text-center">
            <router-link :to="{ name: '' }" class="text-lg text-grey no-underline hover:text-grey-darker">Make a <br />Recommendation</router-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'books',
  computed: {
    books () {
      return this.$store.state.books
    }
  }
}
</script>

<style lang="css">
</style>
