import { openMeteo, openMeteoGeo } from '@/api/axios-instance.js'

// Şehir adından koordinatları getir
export const getCoordinates = async (city, count = 1) => {
  const { data } = await openMeteoGeo.get('/search', {
    params: { name: city, count }
  })

  if (!data?.results?.length) {
    throw new Error('Şehir bulunamadı')
  }

  const r = data.results[0]
  return {
    name: r.name,
    country: r.country_code,
    latitude: r.latitude,
    longitude: r.longitude,
    timezone: r.timezone
  }
}

// Verilen koordinattan hava durumu
export const fetchCurrentWeather = async (lat, lon, tz = 'auto') => {
  const params = {
    latitude: lat,
    longitude: lon,
    current: [
      'temperature_2m',
      'relative_humidity_2m',
      'wind_speed_10m',
      'weather_code'
    ].join(','),
    hourly: [
      'temperature_2m',
      'weather_code',
      'relative_humidity_2m'
    ].join(','),
    daily: [
      'temperature_2m_max',
      'temperature_2m_min'
    ].join(','),
    timezone: tz
  }

  const { data } = await openMeteo.get('/forecast', { params })
  return data
}
