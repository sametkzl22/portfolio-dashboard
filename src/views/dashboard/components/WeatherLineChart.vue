<template>
    <ChartCard :title="`Hourly Temperature — ${locLabel}`">
      <template #meta>
        <span class="text-sm text-gray-500" v-if="loading">Loading...</span>
        <span class="text-sm text-red-600" v-else-if="error">{{ error }}</span>
      </template>
      <Line v-if="chartData" :data="chartData" :options="options" />
    </ChartCard>
  </template>
  
  <script setup>
  import { computed, onMounted, watch } from 'vue'
  import { Line } from 'vue-chartjs'
  import {
    Chart, LineElement, PointElement, LineController,
    CategoryScale, LinearScale, Tooltip, Legend, Filler
  } from 'chart.js'
  import ChartCard from '@/components/common/ChartCard.vue'
  import useWeatherData from '@/views/home/composables/use-weather-data/index.js'
  
  Chart.register(LineElement, PointElement, LineController, CategoryScale, LinearScale, Tooltip, Legend, Filler)
  
  const { hourly, location, loading, error, fetchWeatherData } = useWeatherData()
  
  onMounted(() => {
    fetchWeatherData('Istanbul') // dilersen burada şehri değiştir
  })
  
  const locLabel = computed(() =>
    location.value ? `${location.value.name}, ${location.value.country}` : '—'
  )
  
  const chartData = computed(() => {
    if (!hourly.value?.length) return null
    const labels = hourly.value.map(h => new Date(h.time).toLocaleTimeString([], { hour: '2-digit' }))
    const temps  = hourly.value.map(h => h.temperature)
    return {
      labels,
      datasets: [{
        label: '°C',
        data: temps,
        fill: true,
        tension: 0.35
      }]
    }
  })
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true },
      tooltip: { mode: 'index', intersect: false }
    },
    scales: {
      x: { grid: { display: false } },
      y: { ticks: { callback: v => `${v}°` } }
    }
  }
  </script>
  
  <style scoped>
  :deep(canvas){ min-height: 280px; }
  </style>
  