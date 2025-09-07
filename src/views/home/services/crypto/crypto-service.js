import { fetchMarkets } from '../../actions/crypto/crypto-actions.js'
import { formatCrypto } from './methods/format-crypto-data.js'

export const getCryptoData = async (vs='usd') => {
  const raw = await fetchMarkets(vs, 10)
  return formatCrypto(raw)
}