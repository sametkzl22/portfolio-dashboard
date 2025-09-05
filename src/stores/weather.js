
import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    city: { name: 'Istanbul', country: 'Türkiye', latitude: 41.01, longitude: 28.96 },
    rows: [],
    loading: false,
    error: ''
  }),
  getters: {
    cityLabel: (s) => s.city?.name ? `${s.city.name}${s.city.country ? ' – ' + s.city.country : ''}` : '—'
  },
  actions: {
    init() {
      const raw = localStorage.getItem('weather.city')
      if (raw) {
        try { this.city = JSON.parse(raw) } catch {}
      }
      // İlk girişte veri çek
      return this.fetchWeather()
    },
    async geocode(name) {
      if (!name?.trim()) return []
      const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(name)}&count=8&language=tr&format=json`
      const res = await fetch(url)
      const data = await res.json()
      return (data?.results || []).map(r => ({
        id: `${r.id}-${r.latitude}-${r.longitude}`,
        name: r.name,
        admin1: r.admin1,
        country: r.country,
        latitude: r.latitude,
        longitude: r.longitude
      }))
    },
    async chooseCity(suggestion) {
      this.city = {
        name: suggestion.name,
        country: suggestion.country,
        latitude: suggestion.latitude,
        longitude: suggestion.longitude
      }
      localStorage.setItem('weather.city', JSON.stringify(this.city))
      await this.fetchWeather()
    },
    async fetchWeather() {
      this.loading = true
      this.error = ''
      this.rows = []
      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${this.city.latitude}&longitude=${this.city.longitude}&hourly=temperature_2m&timezone=auto`
        const res = await fetch(url)
        const data = await res.json()
        const times = data?.hourly?.time ?? []
        const temps = data?.hourly?.temperature_2m ?? []
        this.rows = times.map((t, i) => ({ time: t, temp: temps[i] }))
      } catch (e) {
        this.error = 'Veri alınamadı.'
      } finally {
        this.loading = false
      }
    }
  }
})
