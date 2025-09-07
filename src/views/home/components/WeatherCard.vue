<template>
    <div class="p-6 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg">
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-semibold">
          {{ locationText }}
        </h3>
        <span class="text-sm opacity-90">{{ current?.time && new Date(current.time).toLocaleTimeString() }}</span>
      </div>
  
      <div class="mt-3 text-5xl font-bold">
        {{ current?.temperature ?? '—' }}°C
      </div>
      <div class="mt-1 opacity-90">
        Humidity: {{ current?.humidity ?? '—' }}% · Wind: {{ current?.windSpeed ?? '—' }} m/s
      </div>
  
      <div class="mt-4 grid grid-cols-3 gap-2">
        <div v-for="h in hourly" :key="h.time" class="bg-white/10 rounded p-2 text-center">
          <div class="text-xs">{{ new Date(h.time).toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}) }}</div>
          <div class="text-lg font-semibold">{{ h.temperature }}°</div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  const props = defineProps({
    current: Object,
    hourly: { type: Array, default: () => [] },
    loc: Object,
  })
  const locationText = computed(() => props.loc ? `${props.loc.name}, ${props.loc.country}` : '—')
  </script>
  