<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <header class="bg-blue-600 text-white p-4">
      <div class="container flex items-center justify-between">
        <h1 class="text-xl font-bold">🌦️ Portfolio Dashboard</h1>
        <nav class="space-x-4">
          <RouterLink class="hover:underline" to="/">Home</RouterLink>
          <RouterLink class="hover:underline" to="/about">About</RouterLink>
          <RouterLink class="hover:underline" to="/projects">Projects</RouterLink>
          <RouterLink class="hover:underline" to="/contact">Contact</RouterLink>
          <RouterLink class="hover:underline" to="/dashboard">Dashboard</RouterLink>
        </nav>
      </div>
    </header>

    <main class="flex-1 container p-6">
      <RouterView />
    </main>

    <footer class="bg-gray-900 text-gray-300">
      <div class="container p-4 text-center">© 2025 Portfolio</div>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>