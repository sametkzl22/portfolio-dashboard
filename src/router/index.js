import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('@/views/home/HomeView.vue') },
  { path: '/dashboard', name: 'dashboard', component: () => import('@/views/dashboard/DashboardView.vue') },
  { path: '/about', name: 'about', component: () => import('@/views/about/AboutView.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() { return { top: 0 } },
})

export default router