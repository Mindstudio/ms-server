<template lang="html">
  <nav class="text-xs">
    <router-link
      :to="{ name: 'create' }"
      class="text-grey-darker bg-grey-lighter border font-medium rounded-sm p-1 no-underline mr-4"
      tag="button"
      >Create
    </router-link>
    <router-link
      :to="{ name: 'read' }"
      class="text-grey-darker bg-grey-lighter border font-medium rounded-sm p-1 no-underline mr-4"
      tag="button"
      >Read
    </router-link>
    <router-link
      :to="{ name: 'update' }"
      class="text-grey-darker bg-grey-lighter border font-medium rounded-sm p-1 no-underline mr-4"
      tag="button"
      >Update
    </router-link>
    <router-link
      :to="{ name: 'delete' }"
      class="text-grey-darker bg-grey-lighter border font-medium rounded-sm p-1 no-underline"
      tag="button"
      >Delete
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'admin-menu'
}
</script>

<style lang="css">
</style>
