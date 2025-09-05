import { fetchCrypto } from '../composables'
export async function loadCryptoAction() { await fetchCrypto() }
