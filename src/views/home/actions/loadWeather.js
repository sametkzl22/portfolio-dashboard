import { fetchWeather } from '../composables'
export async function loadWeatherAction() { await fetchWeather() }