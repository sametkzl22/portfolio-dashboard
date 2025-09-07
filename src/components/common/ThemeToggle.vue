<template>
    <div class="flex items-center gap-2">
      <button
        @click="toggle"
        class="rounded-lg border border-white/20 dark:border-white/10 px-3 py-1.5 text-sm
               bg-white/10 hover:bg-white/20 dark:bg-white/10 dark:hover:bg-white/20
               transition"
        :title="isDark ? 'Switch to Light' : 'Switch to Dark'"
      >
        <span v-if="isDark">☀️ Light</span>
        <span v-else>🌙 Dark</span>
      </button>
  
      
      <select v-model="modeLocal" @change="setMode(modeLocal)"
              class="bg-transparent border rounded px-2 py-1 text-sm">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  import { useTheme } from '@/composables/use-theme.js'
  const { isDark, mode, setMode, toggle } = useTheme()
  const modeLocal = ref(mode.value)
  watch(mode, v => modeLocal.value = v)
  </script>
  