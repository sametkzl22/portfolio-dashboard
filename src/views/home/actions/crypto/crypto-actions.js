import { coingecko } from '@/api/axios-instance.js'

export const fetchMarkets = async (vs = 'usd', perPage = 10) => {
  const { data } = await coingecko.get('/coins/markets', {
    params: { vs_currency: vs, per_page: perPage, page: 1, order: 'market_cap_desc' }
  })
  return data
}