<template lang="html">
  <nav class="h-12 border-b shadow flex">
    <div class="container m-auto flex flex-row justify-between items-center">
      <div class="w-1/6 py-1">
        <focus-link></focus-link>
      </div>
      <div class="w-1/3">
        <lib-button></lib-button>
      </div>
      <div class="w-1/3 py-1 flex flex-row justify-end">
        <admin-menu></admin-menu>
      </div>
    </div>
  </nav>
</template>

<script>
import focusLink from '@/components/navs/focusLink'
import adminMenu from './adminMenu'
import libButton from '../buttons/libButton'

export default {
  name: 'admin-nav',
  components: {
    focusLink,
    adminMenu,
    libButton
  }
}
</script>

<style lang="css">
</style>
