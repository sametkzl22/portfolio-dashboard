import axios from 'axios'

const api = axios.create({ timeout: 15000 })

api.interceptors.response.use(
  (res) => res,
  (err) => {
    // network/hata yönetimi
    if (err.response) {
      console.error(`[API] ${err.response.status}:`, err.response.data)
    } else {
      console.error('[API] network error:', err.message)
    }
    return Promise.reject(err)
  },
)

export default api