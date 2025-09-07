import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/views/home/index.js')         // view entry composable-based
const About = () => import('@/views/about/index.vue')
const Projects = () => import('@/views/projects/index.vue')
const Contact = () => import('@/views/contact/index.vue')
const Dashboard = () => import('@/views/dashboard/index.vue')

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/projects', name: 'projects', component: Projects },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/dashboard', name: 'dashboard', component: Dashboard },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
