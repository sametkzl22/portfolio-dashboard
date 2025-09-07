import { h, onMounted } from 'vue'
import useWeatherData from './composables/use-weather-data/index.js'
import useCryptoData from './composables/use-crypto-data/index.js'
import WeatherCard from './components/WeatherCard.vue'
import CryptoTable from './components/CryptoTable.vue'

export default {
  name: 'HomeView',
  setup() {
    const {
      current, hourly, location, loading: wLoading, error: wError, fetchWeatherData
    } = useWeatherData()
    const {
      rows, loading: cLoading, error: cError, fetchCrypto
    } = useCryptoData()

    onMounted(() => {
      fetchWeatherData('Istanbul')
      fetchCrypto()
    })

    const onChangeCity = (city) => {
      fetchWeatherData(city)
    }

    return () => h('div', { class: 'grid md:grid-cols-2 gap-6' }, [
      h('div', { class: 'space-y-2' }, [
        wError.value ? h('div', { class: 'text-red-100 bg-red-600/60 p-2 rounded' }, wError.value) : null,
        h(WeatherCard, {
          current: current.value,
          hourly: hourly.value,
          loc: location.value,
          onChangeCity: onChangeCity
        }),
      ]),
      h('div', {}, [
        h(CryptoTable, { rows: rows.value, loading: cLoading.value, error: cError.value }),
      ]),
    ])
  }
}
