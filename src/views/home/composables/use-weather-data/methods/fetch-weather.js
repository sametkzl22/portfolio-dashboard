import { weatherState } from '../state.js'
import { getWeatherData } from '../../../services/weather/weather-service.js'

export const fetchWeatherData = async (cityOrCoords = weatherState.selectedCity) => {
  weatherState.loading = true; weatherState.error = null
  try {
    const data = await getWeatherData(cityOrCoords)
    weatherState.current = data.current
    weatherState.hourly = data.hourly
    weatherState.location = data.location
    weatherState.selectedCity = typeof cityOrCoords === 'string'
      ? cityOrCoords
      : (cityOrCoords?.name ?? weatherState.selectedCity)
  } catch (e) {
    weatherState.error = e.message || 'Bilinmeyen hata'
  } finally {
    weatherState.loading = false
  }
}
