<template>
  
      
    <div class="relative flex min-h-screen , bg-gray-400" >
       <Sidebar /> 
    </div>
    
    <div class="flex-1"></div>

    <div class="bg-white shadow">
      
      <Header/>

    </div>
      <!-- Sayfa içeriği -->
      <main class="md:col-span-9 col-span-12">
        <router-view />
      </main>
    
</template>

<script setup>

import Sidebar from '@/components/layout/Sidebar.vue'

</script>
