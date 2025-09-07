import { toRefs } from 'vue'
import { weatherState } from './state.js'
import { fetchWeatherData } from './methods/fetch-weather.js'
export default function useWeatherData() {
  return { ...toRefs(weatherState), fetchWeatherData }
}