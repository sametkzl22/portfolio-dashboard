import { getCoordinates, fetchCurrentWeather } from '../../actions/weather/weather-actions.js'
import { formatWeather } from './methods/format-weather-data.js'

export const getWeatherData = async (city) => {
  const coords = await getCoordinates(city)
  const raw = await fetchCurrentWeather(coords.latitude, coords.longitude, coords.timezone)
  return formatWeather(raw, coords)
}