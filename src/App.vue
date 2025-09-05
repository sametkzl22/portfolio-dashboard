<script setup>
</script>

<template>
  <div class="min-h-dvh bg-gradient-to-br from-slate-50 to-slate-100 text-slate-800">
    <div class="grid grid-cols-[260px_1fr] min-h-dvh">
      <Sidebar />
      <div class="flex flex-col min-h-dvh">
        <Header />
        <main class="container flex-1 py-6">
          <RouterView />
        </main>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/layout/Sidebar.vue'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
export default { components: { Sidebar, Header, Footer } }
</script>