import api from '@/api/axios-instance'


export async function getHourlyTemperature(lat = 41.0082, lon = 28.9784) {
  const url = 'https://api.open-meteo.com/v1/forecast'
  const params = { latitude: lat, longitude: lon, hourly: 'temperature_2m', timezone: 'auto' }
  const { data } = await api.get(url, { params })
  return data
}