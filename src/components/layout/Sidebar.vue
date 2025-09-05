<template>
  <aside class="hidden md:block border-r bg-white/70 backdrop-blur p-4">
    <div class="font-semibold mb-2">Menu</div>
    <ul class="space-y-2 text-sm">
      <li><RouterLink class="hover:underline" to="/">Weather</RouterLink></li>
      <li><RouterLink class="hover:underline" to="/dashboard">Crypto Dashboard</RouterLink></li>
      <li><RouterLink class="hover:underline" to="/about">Portfolio</RouterLink></li>
    </ul>
  </aside>
</template>