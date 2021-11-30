<template>
  <div class="form-control">
    <label class="label">
      <span class="label-text">{{ label }}</span>
    </label>
    <input v-model="searchVal" type="text" :placeholder="placeholder" class="input input-bordered">
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: { type: String, required: true },
  value: {},
  placeholder: { type: String },
})
const emit = defineEmits(['update:value'])
const searchVal = useVModel(props, 'value', emit)
</script>
