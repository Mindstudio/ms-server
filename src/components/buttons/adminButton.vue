<template lang="html">
  <router-link
    :to="{ name: 'read' }"
    class="text-xs text-grey-lightest bg-grey-darker font-medium rounded-sm p-1 no-underline"
    tag="button"
    >Admin
  </router-link>
</template>

<script>
export default {
  name: 'admin-button'
}
</script>

<style lang="css">
</style>
