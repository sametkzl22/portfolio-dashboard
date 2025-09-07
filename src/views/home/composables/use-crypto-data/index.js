import { toRefs } from 'vue'
import { cryptoState } from './state.js'
import { fetchCrypto } from './methods/fetch-crypto.js'
export default function useCryptoData() {
  return { ...toRefs(cryptoState), fetchCrypto }
}