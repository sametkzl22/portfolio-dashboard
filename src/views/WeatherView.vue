<!-- src/views/WeatherView.vue -->
<template>
    <section class="space-y-4">
      <!-- Şehir arama -->
      <div class="relative max-w-md">
        <input
          v-model="q"
          @input="onType"
          type="text"
          placeholder="Şehir ara: Istanbul, Ankara, London..."
          class="w-full rounded-lg border px-3 py-2"
        />
        <ul
          v-if="suggestions.length && show"
          class="absolute z-10 mt-1 w-full rounded-lg border bg-white shadow-sm max-h-56 overflow-auto"
        >
          <li
            v-for="s in suggestions"
            :key="s.id"
            class="px-3 py-2 hover:bg-slate-100 cursor-pointer"
            @click="select(s)"
          >
            {{ s.name }}<span v-if="s.admin1">, {{ s.admin1 }}</span>, {{ s.country }}
          </li>
        </ul>
      </div>
  
      <h2 class="text-2xl font-bold">
        Hourly Temperature (°C) – {{ weather.cityLabel }}
      </h2>
  
      <div v-if="weather.loading">Yükleniyor...</div>
      <div v-else-if="weather.error" class="text-red-600">{{ weather.error }}</div>
  
      <table v-else class="w-full text-sm border-separate border-spacing-y-2">
        <tbody>
          <tr v-for="row in weather.rows" :key="row.time" class="border-b">
            <td class="py-1 opacity-70">{{ row.time }}</td>
            <td class="py-1 text-right font-semibold">{{ row.temp?.toFixed(1) }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useWeatherStore } from '@/stores/weather'
  const weather = useWeatherStore()
  
  const q = ref(weather.city?.name || 'Istanbul')
  const suggestions = ref([])
  const show = ref(false)
  
  // basit debounce
  let t
  const onType = () => {
    clearTimeout(t)
    show.value = true
    t = setTimeout(async () => {
      suggestions.value = await weather.geocode(q.value)
    }, 300)
  }
  
  const select = async (s) => {
    show.value = false
    q.value = `${s.name}${s.country ? ', ' + s.country : ''}`
    await weather.chooseCity(s) // global city + veri çekme
  }
  </script>
  