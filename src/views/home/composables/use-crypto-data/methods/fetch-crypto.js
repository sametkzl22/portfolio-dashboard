import { cryptoState } from '../state.js'
import { getCryptoData } from '../../../services/crypto/crypto-service.js'

export const fetchCrypto = async () => {
  cryptoState.loading = true; cryptoState.error = null
  try {
    cryptoState.rows = await getCryptoData('usd')
  } catch (e) {
    cryptoState.error = e.message
  } finally {
    cryptoState.loading = false
  }
}