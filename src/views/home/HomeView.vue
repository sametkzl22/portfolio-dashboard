<script setup>
import { onMounted, computed } from 'vue'
import { state } from './composables'
import { loadWeatherAction } from './actions/loadWeather'
import LoadingSpinner from '@/components/common/LoadingSpinner.vue'
import ErrorMessage from '@/components/common/ErrorMessage.vue'
import TemperatureChart from './components/TemperatureChart.vue'
import { useWeatherStore } from '@/stores/weather'

onMounted(() => { loadWeatherAction(),weather.init() })
const chartLabels = computed(() =>
  (hourly.value?.time?.slice(0,24) ?? []).map(s => s.slice(11,16)) // 'HH:MM'
)
const weather = useWeatherStore()
const hourly = computed(() => state.weather?.hourly || null)

</script>

<template>
  <section class="space-y-6">
    <h2 class="text-2xl font-semibold">Weather</h2>

    <div v-if="state.loading"><LoadingSpinner /></div>
    <ErrorMessage v-else-if="state.error" :message="state.error" />

    <div v-else class="grid md:grid-cols-2 gap-4">
      <div class="rounded-2xl p-4 shadow-md bg-white dark:bg-neutral-900">
        <h3 class="font-medium mb-2">Hourly Temperature (°C) – Istanbul</h3>
        <ul class="text-sm max-h-64 overflow-auto">
          <li v-for="(t,i) in hourly?.temperature_2m?.slice(0,24)" :key="i" class="flex justify-between py-1 border-b last:border-0">
            <span>{{ hourly.time[i] }}</span>
            <span class="font-semibold">{{ t }}</span>
          </li>
        </ul>
      </div>
      <div class="rounded-2xl p-4 shadow-md bg-white dark:bg-neutral-900">
        <h3 class="font-medium mb-2">Summary</h3>
        <p class="text-slate-600 text-sm mb-3">
          Open-Meteo’dan 24 saatlik sıcaklık verisi grafikte gösterilir.
        </p>
        <TemperatureChart :labels="chartLabels" :values="chartValues" />
      </div>
    </div>
  </section>
</template>