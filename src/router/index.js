import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Dashboard from '@/views/Dashboard.vue'
import Projects from '@/views/Projects.vue'

const routes = [
  {path: '/', name: 'Home', component: Home },
  {path: '/about', name: 'About', component: About },
  {path: '/projects', name: 'Projects', component: Projects },
  {path: '/contact', name: 'Contact', component: Contact },
  {path: '/dashboards', name: 'Dashboards', component: Dashboard }]

  const weatherAPI = axios.create({
    baseURL: 'https://api.open-meteo.com/v1',
    params: {
    appid: 'YOUR_API_KEY',
    units: 'metric'
    }
    })
    const cryptoAPI = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3'
    })
  

  const router = createRouter({
    history: createWebHistory(),
    routes
  })


export default router
