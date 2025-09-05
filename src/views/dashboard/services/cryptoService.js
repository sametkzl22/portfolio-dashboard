import api from '@/api/axios-instance'

// CoinGecko (public)
export async function getMarketSimple(vs = 'usd', ids = ['bitcoin','ethereum','binancecoin']) {
  const url = 'https://api.coingecko.com/api/v3/simple/price'
  const params = { ids: ids.join(','), vs_currencies: vs, include_24hr_change: true }
  const { data } = await api.get(url, { params })
  return data
}
