<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useWeatherStore } from '@/stores/weather'

const route = useRoute()
const weather = useWeatherStore()

const pageTitle = computed(() => {
  // Anasayfa / Weather sayfasında: "Weather – {Şehir}"
  if (route.path === '/') return `Weather – ${weather.cityLabel}`
  // Diğer sayfalarda meta.title varsa onu göster
  return route.meta?.title ?? 'Başlık'
})
</script>

<template>
  <header class="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
    <div class="container py-4 flex items-center justify-between">
      <h1 class="text-lg font-semibold">{{ pageTitle }}</h1>
      <nav class="flex gap-4 text-sm">
        <RouterLink to="/" class="hover:underline">Weather</RouterLink>
        <RouterLink to="/dashboard" class="hover:underline">Crypto Dashboard</RouterLink>
        <RouterLink to="/about" class="hover:underline">Portfolio</RouterLink>
      </nav>
    </div>
  </header>
</template>
