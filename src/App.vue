<template>
  <div class="min-h-screen flex flex-col bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
    <header class="bg-blue-600 text-white dark:bg-blue-700">
      <div class="container mx-auto flex items-center justify-between p-4">
        <h1 class="text-xl font-bold">🌦️ Portfolio Dashboard</h1>
        <nav class="flex items-center gap-4">
          <RouterLink class="hover:underline" to="/">Home</RouterLink>
          <RouterLink class="hover:underline" to="/about">About</RouterLink>
          <RouterLink class="hover:underline" to="/projects">Projects</RouterLink>
          <RouterLink class="hover:underline" to="/contact">Contact</RouterLink>
          <RouterLink class="hover:underline" to="/dashboard">Dashboard</RouterLink>
          <ThemeToggle />
        </nav>
      </div>
    </header>

    <main class="flex-1 container mx-auto p-6">
      <RouterView />
    </main>

    <footer class="bg-gray-900 text-gray-300 dark:bg-gray-900">
      <div class="container mx-auto p-4 text-center">© 2025 Portfolio</div>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ThemeToggle from '@/components/common/ThemeToggle.vue'
</script>
