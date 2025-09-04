

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Dashboard from '@/views/Dashboard.vue'
import Projects from '@/views/Projects.vue'

const routes = [
  {path: '/', name: 'Home', component: Home },
  {path: '/About', name: 'About', component: About },
  {path: '/Projects', name: 'Projects', component: Projects },
  {path: '/Contact', name: 'Contact', component: Contact },
  {path: '/Dashboards', name: 'Dashboards', component: Dashboards }]
  



export default router
