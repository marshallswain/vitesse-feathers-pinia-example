<template>
  <button class="btn" :class="{ 'btn-primary': page === currentPage }">
    {{ page }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  page: { type: Number, required: true },
  currentPage: { type: Number, required: true },
})
</script>

<style scoped>

</style>
