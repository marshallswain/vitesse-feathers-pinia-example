<template>
  <div class="form-control w-36">
    <label class="label">
      <span class="label-text">Rows Per Page</span>
    </label>
    <select v-model="rowCount" class="select select-bordered ">
      <option :value="5">
        5
      </option>
      <option :value="8">
        8
      </option>
      <option :value="10">
        10
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  rowsPerPage: { type: Number },
})
const emit = defineEmits(['update:rowsPerPage'])
const rowCount = useVModel(props, 'rowsPerPage', emit)
</script>
