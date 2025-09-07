import { reactive } from 'vue'
export const weatherState = reactive({
  current: null,
  hourly: [],
  loading: false,
  error: null,
  selectedCity: 'Istanbul',
  location: null,
})