<template>
  <section class="space-y-8">
    <!-- Hakkımda -->
    <div>
      <h2 class="text-3xl font-bold text-gray-800">About Me</h2>
      <p class="text-gray-600 leading-relaxed mt-2">
        Hi, I’m <span class="font-semibold">Samet Kızıl</span>, a developer passionate about
        web technologies, data science, and creative digital projects.
        I enjoy working with <span class="italic">Vue, Tailwind, Python, and .NET</span>
        to build user-friendly applications and solve real-world problems.
      </p>
      <p class="text-gray-600 leading-relaxed mt-2">
        In my free time, I like exploring football analytics, designing creative
        3D scenes, and experimenting with automation bots. This portfolio showcases
        both my academic and personal projects.
      </p>
    </div>

    <!-- Skills -->
    <div>
      <h2 class="text-2xl font-bold text-gray-800">Skills</h2>
      <div class="grid md:grid-cols-3 gap-6 mt-4">
        <!-- Frontend -->
        <div class="p-4 bg-white rounded-lg shadow hover:shadow-md transition">
          <h3 class="font-semibold text-lg mb-2">Frontend</h3>
          <ul class="list-disc list-inside text-gray-600 space-y-1">
            <li>Vue 3 / Vite</li>
            <li>Tailwind CSS</li>
            
            <li>HTML5 & CSS3</li>
          </ul>
        </div>

        <!-- Backend -->
        <div class="p-4 bg-white rounded-lg shadow hover:shadow-md transition">
          <h3 class="font-semibold text-lg mb-2">Backend</h3>
          <ul class="list-disc list-inside text-gray-600 space-y-1">
            <li>Node.js</li>
            <li>.NET / C#</li>
            <li>REST API Development</li>
            <li>SQL / PostgreSqL</li>
          </ul>
        </div>

        <!-- Data & Tools -->
        <div class="p-4 bg-white rounded-lg shadow hover:shadow-md transition">
          <h3 class="font-semibold text-lg mb-2">Data & Tools</h3>
          <ul class="list-disc list-inside text-gray-600 space-y-1">
            <li>Python (Pandas, Scikit-learn)</li>
            <li>Data Visualization</li>
            <li>Git & GitHub</li>
            
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
