import { state } from '../state'
import { getMarketSimple } from '../../services/cryptoService'

export async function fetchCrypto() {
  try {
    state.loading = true
    state.error = null
    state.coins = await getMarketSimple('usd', ['bitcoin','ethereum','binancecoin'])
  } catch (e) {
    state.error = e?.message || 'Fetch failed'
  } finally {
    state.loading = false
  }
}
