import { weatherState } from '../state.js'
import { getWeatherData } from '../../../services/weather/weather-service.js'

export const fetchWeatherData = async (city = weatherState.selectedCity) => {
  weatherState.loading = true; weatherState.error = null
  try {
    const data = await getWeatherData(city)
    weatherState.current = data.current
    weatherState.hourly = data.hourly
    weatherState.location = data.location
    weatherState.selectedCity = city
  } catch (e) {
    weatherState.error = e.message
  } finally {
    weatherState.loading = false
  }
}