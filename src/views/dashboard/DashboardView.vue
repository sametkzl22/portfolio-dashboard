<script setup>
import { onMounted, computed } from 'vue'
import LoadingSpinner from '@/components/common/LoadingSpinner.vue'
import ErrorMessage from '@/components/common/ErrorMessage.vue'
import { state } from './composables'
import { loadCryptoAction } from './actions/loadCrypto'

onMounted(() => { loadCryptoAction() })

const rows = computed(() => {
  if (!state.coins) return []
  const map = state.coins
  return [
    { name: 'Bitcoin',      key: 'bitcoin',     price: map.bitcoin.usd,      change: map.bitcoin.usd_24h_change },
    { name: 'Ethereum',     key: 'ethereum',    price: map.ethereum.usd,     change: map.ethereum.usd_24h_change },
    { name: 'BNB',          key: 'binancecoin', price: map.binancecoin.usd,  change: map.binancecoin.usd_24h_change },
  ]
})
</script>

<template>
  <section class="space-y-6">
    <h2 class="text-2xl font-semibold">Crypto Prices </h2>

    <div v-if="state.loading"><LoadingSpinner /></div>
    <ErrorMessage v-else-if="state.error" :message="state.error" />

    <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="r in rows" :key="r.key" class="rounded-2xl p-4 shadow-md bg-white dark:bg-neutral-900">
        <div class="flex items-center justify-between">
          <h3 class="font-medium">{{ r.name }}</h3>
          <span
            class="text-sm font-semibold"
            :class="r.change >= 0 ? 'text-emerald-600' : 'text-red-600'"
          >
            {{ r.change.toFixed(2) }}%
          </span>
        </div>
        <div class="mt-2 text-2xl font-bold">${{ r.price.toLocaleString() }}</div>
        <p class="text-xs text-slate-500 mt-1">Source: CoinGecko</p>
      </div>
    </div>
  </section>
</template>
