<template>
  <div v-reveal class="bg-white dark:bg-slate-900 rounded-2xl shadow p-4 overflow-x-auto card-raise">
    <div class="flex items-center justify-between mb-2">
      <h3 class="text-lg font-semibold">Top 10 Cryptos</h3>
      <span v-if="loading" class="text-sm text-blue-600 dark:text-blue-400">Loading…</span>
      <span v-else-if="error" class="text-sm text-red-600 dark:text-red-400">{{ error }}</span>
    </div>

    <!-- skeleton header -->
    <div v-if="loading" class="space-y-2">
      <div class="h-5 w-40 rounded skeleton"></div>
      <div class="grid grid-cols-4 gap-2">
        <div v-for="i in 4" :key="i" class="h-10 rounded skeleton"></div>
      </div>
    </div>

    <table v-else class="min-w-full text-sm">
      <thead class="text-left border-b subtle-border">
        <tr>
          <th class="py-2">Coin</th><th>Price (USD)</th><th>24h</th><th>Market Cap</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(c, idx) in rows" :key="c.id"
            class="border-b subtle-border hover:bg-gray-50 dark:hover:bg-white/5 transition animate-fade-in-up"
            :style="{ animationDelay: `${idx * 25}ms` }">
          <td class="py-2 flex items-center gap-2">
            <img :src="c.image" alt="" class="w-5 h-5" />
            <span class="font-medium">{{ c.name }}</span>
            <span class="text-xs text-gray-500">({{ c.symbol }})</span>
          </td>
          <td>\${{ (c.price ?? 0).toLocaleString() }}</td>
          <td>
            <span
              class="px-2 py-0.5 rounded text-xs font-semibold"
              :class="(c.change24h ?? 0) >= 0
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300'
                      : 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300'"
            >
              {{ (c.change24h ?? 0).toFixed?.(2) ?? (Math.round((c.change24h ?? 0)*100)/100) }}%
            </span>
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
