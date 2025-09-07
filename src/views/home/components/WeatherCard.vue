<template>
  <div
    v-reveal
    class="relative p-6 rounded-2xl card-raise animate-scale-in
           text-white overflow-hidden
           bg-gradient-to-br from-blue-500 to-blue-700
           dark:from-slate-800 dark:to-slate-900"
  >
    <!-- dekoratif parıltı -->
    <div class="pointer-events-none absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-30 blur-2xl
                bg-white/30 dark:bg-white/10 animate-float"></div>

    <!-- Başlık ve konum -->
    <div class="flex items-start justify-between">
      <button class="text-left group" @click="toggleEdit" title="Şehri değiştirmek için tıkla">
        <h3 class="text-lg font-semibold underline decoration-white/40 underline-offset-4
                   group-hover:decoration-white transition">
          {{ locationText }}
        </h3>
        <p class="text-xs opacity-90">Şehri değiştirmek için tıkla</p>
      </button>

      <span class="text-sm opacity-90">
        {{ current?.time ? timeLabel : '' }}
      </span>
    </div>

    <!-- Arama + Öneriler -->
    <div v-if="editing" class="mt-3">
      <form @submit.prevent="submitCity" class="flex gap-2">
        <input
          v-model.trim="cityInput"
          type="text"
          placeholder="Şehir adı (örn. Kepez, Ankara)"
          class="w-full rounded px-3 py-2 text-gray-900"
          @input="onInput"
          @keydown.down.prevent="move(1)"
          @keydown.up.prevent="move(-1)"
          @keydown.enter.prevent="enterSelect"
          @keydown.esc.prevent="cancelEdit"
          autofocus
        />
        <button type="button" class="glass px-3 py-2 rounded text-white" @click="cancelEdit">
          İptal
        </button>
      </form>

      <!-- Öneriler -->
      <div
        v-if="suggestions.length"
        class="absolute z-20 mt-1 w-[calc(100%-3rem)] bg-white text-gray-900 rounded-xl shadow-lg max-h-64 overflow-auto"
        role="listbox"
      >
        <ul>
          <li
            v-for="(s, i) in suggestions"
            :key="s.id"
            @click="selectSuggestion(s)"
            :aria-selected="i === activeIndex"
            role="option"
            class="px-3 py-2 cursor-pointer hover:bg-gray-100 transition"
            :class="i === activeIndex ? 'bg-gray-100' : ''"
          >
            <div class="font-medium">
              {{ s.name }}
              <span class="text-xs text-gray-500" v-if="s.admin1">— {{ s.admin1 }}</span>
            </div>
            <div class="text-xs text-gray-500">
              {{ s.country }} ({{ s.country_code }}) •
              {{ s.latitude.toFixed(2) }}, {{ s.longitude.toFixed(2) }}
            </div>
          </li>
        </ul>
      </div>

      <!-- Öneri yükleniyor -->
      <div v-else-if="cityInput && typing" class="absolute z-10 mt-1 text-sm text-white/90">
        Aranıyor…
      </div>
    </div>

    <!-- Hata/Loading rozetleri -->
    <div class="mt-3 flex items-center gap-2 text-sm">
      <span v-if="error" class="bg-red-600/70 px-2 py-1 rounded animate-fade-in">{{ error }}</span>
      <span v-else-if="loading" class="glass px-2 py-1 rounded">Yükleniyor…</span>
    </div>

    <!-- Anlık değerler -->
    <div class="mt-2">
      <div class="text-6xl font-extrabold tracking-tight animate-fade-in-up">
        <span v-if="!loading">{{ current?.temperature ?? '—' }}</span>
        <span v-else class="inline-block w-20 h-12 rounded skeleton"></span>°C
      </div>
      <div class="mt-1 opacity-95 animate-fade-in">
        Nem: <span v-if="!loading">{{ current?.humidity ?? '—' }}%</span>
             <span v-else class="inline-block align-middle w-12 h-4 rounded skeleton"></span>
        · Rüzgar:
        <span v-if="!loading">{{ current?.windSpeed ?? '—' }} m/s</span>
        <span v-else class="inline-block align-middle w-16 h-4 rounded skeleton"></span>
      </div>
    </div>

    <!-- Saatlik -->
    <div class="mt-5 grid grid-cols-3 gap-2">
      <div
        v-for="(h, idx) in hourly"
        :key="h.time"
        class="bg-white/12 dark:bg-white/10 rounded-lg p-2 text-center hour-chip"
        :style="{ '--i': idx }"
      >
        <div class="text-xs">{{ hourLabel(h.time) }}</div>
        <div class="text-lg font-semibold">{{ h.temperature }}°</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watchEffect } from 'vue'
import { searchCities } from '@/views/home/actions/weather/weather-actions.js'

const props = defineProps({
  current: Object,
  hourly: { type: Array, default: () => [] },
  loc: Object,
  loading: { type: Boolean, default: false },
  error: { type: String, default: '' },
})
const emit = defineEmits(['change-city'])

/* labels */
const locationText = computed(() =>
  props.loc ? `${props.loc.name}, ${props.loc.country}` : 'Konum'
)
const timeLabel = computed(() =>
  props.current?.time
    ? new Date(props.current.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    : ''
)
const hourLabel = (iso) => new Date(iso).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

/* search state */
const editing = ref(false)
const cityInput = ref('')
const suggestions = ref([])
const activeIndex = ref(-1)
const typing = ref(false)
let debounceTimer = null

const toggleEdit = () => {
  editing.value = !editing.value
  if (editing.value) {
    cityInput.value = props.loc?.name || ''
    suggestions.value = []
    activeIndex.value = -1
  }
}
const cancelEdit = () => {
  editing.value = false
  suggestions.value = []
  activeIndex.value = -1
  typing.value = false
}

const onInput = () => {
  clearTimeout(debounceTimer)
  const q = cityInput.value
  if (!q) { suggestions.value = []; typing.value = false; return }
  typing.value = true
  debounceTimer = setTimeout(async () => {
    try {
      const res = await searchCities(q, 7, 'tr')
      suggestions.value = res
      activeIndex.value = res.length ? 0 : -1
    } catch (e) { suggestions.value = [] }
    finally { typing.value = false }
  }, 250)
}
const selectSuggestion = (s) => {
  emit('change-city', s)
  editing.value = false
  suggestions.value = []
  activeIndex.value = -1
  typing.value = false
}
const submitCity = () => {
  if (cityInput.value) {
    emit('change-city', cityInput.value)
    editing.value = false
    suggestions.value = []
    activeIndex.value = -1
    typing.value = false
  }
}
const move = (dir) => {
  if (!suggestions.value.length) return
  activeIndex.value = (activeIndex.value + dir + suggestions.value.length) % suggestions.value.length
}
const enterSelect = () => {
  if (activeIndex.value >= 0 && suggestions.value[activeIndex.value]) selectSuggestion(suggestions.value[activeIndex.value])
  else submitCity()
}
watchEffect(() => {
  if (!editing.value && props.loc?.name) cityInput.value = props.loc.name
})
</script>
