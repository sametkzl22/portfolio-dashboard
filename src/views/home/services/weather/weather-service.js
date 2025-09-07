import { getCoordinates, fetchCurrentWeather } from '../../actions/weather/weather-actions.js'
import { formatWeather } from './methods/format-weather-data.js'

// cityOrCoords: "Istanbul"  veya  { name, latitude, longitude, timezone, country }
export const getWeatherData = async (cityOrCoords) => {
  let coords
  if (typeof cityOrCoords === 'string') {
    coords = await getCoordinates(cityOrCoords)
  } else if (cityOrCoords && typeof cityOrCoords === 'object') {
    const c = cityOrCoords
    if (typeof c.latitude !== 'number' || typeof c.longitude !== 'number') {
      throw new Error('Geçersiz konum seçimi')
    }
    coords = {
      name: c.name,
      country: c.country_code || c.country,
      latitude: c.latitude,
      longitude: c.longitude,
      timezone: c.timezone || 'auto'
    }
  } else {
    throw new Error('Şehir/konum bilgisi geçersiz')
  }

  const raw = await fetchCurrentWeather(coords.latitude, coords.longitude, coords.timezone)
  return formatWeather(raw, coords)
}
