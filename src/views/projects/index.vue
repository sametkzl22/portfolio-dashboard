<template>
  <section class="space-y-4">
    <h2 class="text-3xl font-bold text-gray-800">Projects</h2>
    <ul class="grid md:grid-cols-2 gap-6 mt-4">
      <li>
        <a 
          href="https://github.com/sametkzl22/weather-app" 
          target="_blank" 
          class="block p-4 rounded-lg shadow bg-white hover:shadow-md transition"
        >
          <h3 class="font-semibold text-lg">🌦️ Weather App</h3>
          <p class="text-gray-600 mt-1">
            Vue 3 + Tailwind ile geliştirilmiş hava durumu uygulaması. 
            Open-Meteo API’den gerçek zamanlı veri çekiyor.
          </p>
        </a>
      </li>

      <li>
        <a 
          href="https://github.com/sametkzl22/income-expense" 
          target="_blank" 
          class="block p-4 rounded-lg shadow bg-white hover:shadow-md transition"
        >
          <h3 class="font-semibold text-lg">💸 Income Expense</h3>
          <p class="text-gray-600 mt-1">
            Gelir–gider takip uygulaması. LocalStorage entegrasyonu ile 
            kişisel finans yönetimini kolaylaştırıyor.
          </p>
        </a>
      </li>

      <li>
        <a 
          href="https://github.com/sametkzl22/portfolio-dashboard" 
          target="_blank" 
          class="block p-4 rounded-lg shadow bg-white hover:shadow-md transition"
        >
          <h3 class="font-semibold text-lg">📊 Portfolio Dashboard</h3>
          <p class="text-gray-600 mt-1">
            Vue 3 + Vite + Tailwind kullanılarak hazırlanmış kişisel dashboard. 
            Weather ve Crypto widget’larını içeriyor.
          </p>
        </a>
      </li>
    </ul>
  </section>
</template>
