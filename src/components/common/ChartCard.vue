<template>
    <div class="bg-white rounded-xl shadow p-4">
      <div class="flex items-center justify-between mb-2">
        <h3 class="font-semibold">{{ title }}</h3>
        <slot name="meta" />
      </div>
      <div class="relative">
        <slot />
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({ title: { type: String, required: true } })
  </script>
  