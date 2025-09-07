<template>
    <ChartCard title="Top 10 Cryptos — Market Cap (USD)">
      <template #meta>
        <span class="text-sm text-gray-500" v-if="loading">Loading...</span>
        <span class="text-sm text-red-600" v-else-if="error">{{ error }}</span>
      </template>
      <Bar v-if="chartData" :data="chartData" :options="options" />
    </ChartCard>
  </template>
  
  <script setup>
  import { computed, onMounted } from 'vue'
  import { Bar } from 'vue-chartjs'
  import {
    Chart, BarElement, BarController, CategoryScale, LinearScale, Tooltip, Legend
  } from 'chart.js'
  import ChartCard from '@/components/common/ChartCard.vue'
  import useCryptoData from '@/views/home/composables/use-crypto-data/index.js'
  
  Chart.register(BarElement, BarController, CategoryScale, LinearScale, Tooltip, Legend)
  
  const { rows, loading, error, fetchCrypto } = useCryptoData()
  
  onMounted(() => { fetchCrypto() })
  
  const chartData = computed(() => {
    if (!rows.value?.length) return null
    const top = rows.value.slice(0, 10)
    return {
      labels: top.map(x => x.symbol || x.name),
      datasets: [{
        label: 'Market Cap',
        data: top.map(x => x.marketCap ?? 0)
      }]
    }
  })
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: ctx => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
            .format(ctx.parsed.y ?? 0)
        }
      }
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        ticks: {
          callback: v => {
            const n = Number(v)
            if (n >= 1e12) return `${(n/1e12).toFixed(1)}T`
            if (n >= 1e9)  return `${(n/1e9).toFixed(1)}B`
            if (n >= 1e6)  return `${(n/1e6).toFixed(1)}M`
            return n
          }
        }
      }
    }
  }
  </script>
  
  <style scoped>
  :deep(canvas){ min-height: 280px; }
  </style>
  