import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './assets/styles/main.css'
import reveal from './directives/reveal.js'

const app = createApp(App)
app.use(createPinia()).use(router)
app.directive('reveal', reveal)
app.mount('#app')