<template>
    <div class="bg-white rounded-xl shadow p-4 overflow-x-auto">
      <div class="flex items-center justify-between mb-2">
        <h3 class="text-lg font-semibold">Top 10 Cryptos</h3>
        <span v-if="loading" class="text-sm text-blue-600">Loading...</span>
        <span v-else-if="error" class="text-sm text-red-600">{{ error }}</span>
      </div>
      <table class="min-w-full text-sm">
        <thead class="text-left border-b">
          <tr><th class="py-2">Coin</th><th>Price (USD)</th><th>24h</th><th>Market Cap</th></tr>
        </thead>
        <tbody>
          <tr v-for="c in rows" :key="c.id" class="border-b hover:bg-gray-50">
            <td class="py-2 flex items-center gap-2">
              <img :src="c.image" alt="" class="w-5 h-5" /> {{ c.name }} ({{ c.symbol }})
            </td>
            <td>\${{ (c.price ?? 0).toLocaleString() }}</td>
            <td :class="(c.change24h ?? 0) >= 0 ? 'text-green-600' : 'text-red-600'">
              {{ (c.change24h ?? 0).toFixed?.(2) ?? (Math.round((c.change24h ?? 0)*100)/100) }}%
            </td>
            <td>\${{ (c.marketCap ?? 0).toLocaleString() }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  <script setup>
  defineProps({
    rows: { type: Array, default: () => [] },
    loading: Boolean,
    error: String,
  })
  </script>