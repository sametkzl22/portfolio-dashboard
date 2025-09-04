<template>
  <div>
    <Header />   <!-- her sayfada görünen üst kısım -->
    
    <router-view />  <!-- aktif sayfanın içeriği burada açılır -->
    
    <Footer />   <!-- her sayfada görünen alt kısım -->
  </div>
</template>

<script setup>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
</script>
