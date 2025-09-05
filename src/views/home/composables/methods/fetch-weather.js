import { state } from '../state'
import { getHourlyTemperature } from '../../services/weatherService'

export async function fetchWeather() {
  try {
    state.loading = true
    state.error = null
    const data = await getHourlyTemperature()
    state.weather = data
  } catch (e) {
    state.error = e?.message || 'Fetch failed'
  } finally {
    state.loading = false
  }
}