<script setup>
const props = defineProps({ message: { type: String, default: 'Something went wrong.' } })
</script>
<template>
  <div class="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl">
    {{ message }}
  </div>
</template>