<template>
  <div class="form-control w-36">
    <label class="label">
      <span class="label-text">Class</span>
    </label>
    <select v-model="selectedClass" class="select select-bordered ">
      <option :value="null">
        All
      </option>
      <option value="1-A">
        1-A
      </option>
      <option value="1-B">
        1-B
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  schoolClass: { validator: val => typeof val === 'string' || val == null },
})
const emit = defineEmits(['update:schoolClass'])
const selectedClass = useVModel(props, 'schoolClass', emit)
</script>
