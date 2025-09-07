<template>
  <section class="space-y-6">
    <h2 class="text-3xl font-bold text-gray-800">Dashboard</h2>
    <div class="grid md:grid-cols-2 gap-6">
      <WeatherLineChart />
      <CryptoBarChart />
    </div>
  </section>
</template>

<script setup>
import WeatherLineChart from './components/WeatherLineChart.vue'
import CryptoBarChart from './components/CryptoBarChart.vue'
</script>
