<template lang="html">
  <nav class="h-12 border-b shadow flex">
    <div class="container m-auto flex flex-row justify-between items-center">
      <div class="w-1/6 py-1">
        <focus-link></focus-link>
      </div>
      <div class="w-1/2">
        <focus-menu></focus-menu>
      </div>
      <div class="w-1/6 py-1 flex flex-row justify-end">
        <admin-button></admin-button>
      </div>
    </div>
  </nav>
</template>

<script>
import focusLink from '@/components/navs/focusLink'
import focusMenu from './focusMenu'
import adminButton from '@/components/buttons/adminButton'

export default {
  name: 'focus-nav',
  components: {
    focusLink,
    focusMenu,
    adminButton
  }
}
</script>

<style lang="css">
</style>
