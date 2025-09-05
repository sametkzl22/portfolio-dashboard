<!-- src/views/Dashboard.vue -->
<template>
  <!-- Dış kap: mobilde tek sütun, md ve üstünde 2 sütun düzen -->
  <div class="p-4 md:grid md:grid-cols-12 gap-6">
    <!-- Sol sütun: Sidebar -->
    <aside class="md:col-span-3 col-span-12">
      <Sidebar />
    </aside>

    <!-- Sağ sütun: İçerik alanı -->
    <section class="md:col-span-9 col-span-12">
      <h1 class="text-2xl font-semibold mb-4">Dashboard</h1>

      <!-- İleride kartlar/tabloları koyacağımız yer -->
      <div class="grid gap-4">
        <div class="p-4 rounded-lg border">
          Dashboard content
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Sidebar from '@/components/layout/Sidebar.vue'
</script>