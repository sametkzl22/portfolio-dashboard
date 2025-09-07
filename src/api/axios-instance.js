import axios from 'axios'

export const openMeteo = axios.create({
  baseURL: 'https://api.open-meteo.com/v1',
  timeout: 10000,
})

export const openMeteoGeo = axios.create({
  baseURL: 'https://geocoding-api.open-meteo.com/v1',
  timeout: 10000,
})

export const coingecko = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
  timeout: 10000,
})

// basit interceptor örneği
for (const inst of [openMeteo, openMeteoGeo, coingecko]) {
    inst.interceptors.response.use(r => r, e => {
      console.error('API Error:', e?.response?.data || e.message)
      return Promise.reject(e)
    })
  }

