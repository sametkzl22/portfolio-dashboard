<template>
    <div class="min-h-screen bg-gray-50 py-10">
      <div class="container mx-auto px-4 space-y-16">
  
        <!-- Başlık -->
        <section class="text-center">
          <h1 class="text-4xl font-bold mb-2">My Portfolio</h1>
          <p class="text-gray-600">Projects, skills & experiences</p>
        </section>
  
        <!-- Hakkımda -->
        <section class="max-w-3xl mx-auto text-center">
          <h2 class="text-2xl font-semibold mb-4">About Me</h2>
          <p class="text-gray-700 leading-relaxed">
            I’m a passionate developer interested in web development, data science,
            and creative coding. I enjoy building interactive dashboards and modern web applications with Vue, Tailwind, and other technologies.
          </p>
        </section>
  
        <!-- Skills -->
        <section>
          <h2 class="text-2xl font-semibold text-center mb-8">Skills</h2>
          <div class="grid md:grid-cols-4 sm:grid-cols-2 gap-6 text-center">
            <div v-for="skill in skills" :key="skill.name" class="bg-white shadow rounded-xl p-5">
              <div class="text-4xl mb-3">{{ skill.icon }}</div>
              <h3 class="font-medium">{{ skill.name }}</h3>
            </div>
          </div>
        </section>
  
        <!-- Timeline / Experience -->
        <section>
          <h2 class="text-2xl font-semibold text-center mb-8">Experience</h2>
          <div class="relative border-l border-gray-300 max-w-2xl mx-auto">
            <div
              v-for="exp in experiences"
              :key="exp.title"
              class="mb-10 ml-6"
            >
              <span
                class="absolute -left-3 flex items-center justify-center w-6 h-6 bg-indigo-600 rounded-full"
              ></span>
              <h3 class="text-lg font-semibold">{{ exp.title }}</h3>
              <p class="text-sm text-gray-500">{{ exp.period }}</p>
              <p class="text-gray-700 mt-2">{{ exp.description }}</p>
            </div>
          </div>
        </section>
  
        <!-- Projeler -->
        <section>
          <h2 class="text-2xl font-semibold text-center mb-8">Featured Projects</h2>
          <div class="grid md:grid-cols-3 gap-6">
            <div
              v-for="project in projects"
              :key="project.title"
              class="bg-white rounded-2xl shadow p-5 flex flex-col"
            >
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h3 class="text-lg font-semibold mb-2">{{ project.title }}</h3>
              <p class="text-sm text-gray-600 flex-1">{{ project.description }}</p>
              <a
                :href="project.link"
                target="_blank"
                class="mt-4 text-indigo-600 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>
        </section>
  
        <!-- İletişim -->
        <section class="text-center">
          <h2 class="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p class="text-gray-700 mb-4">
            Interested in working together or just want to say hi? Reach me at:
          </p>
          <a
            href="mailto:sametkizil22@gmail.com"
            class="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
          >
            Send Email
          </a>
        </section>
  
      </div>
    </div>
  </template>
  
  <script setup>
  const skills = [
    { name: "Vue.js", icon: "🟩" },
    { name: "TailwindCSS", icon: "🌊" },
    { name: "JavaScript", icon: "⚡" },
    { name: "Python", icon: "℗" },
    { name: "Git / GitHub", icon: "🐙" },
    { name: "SQL", icon: "🗄️" }
  ]
  
  const experiences = [
    {
      title: "Frontend Developer Intern ",
      period: "2025 – Present",
      description: ""
    },
    {
      title: "Data Science Projects",
      period: "20..-20..",
      description: ""
    },
    {
      title: "Creative Coding",
      period: "20.. – 20..",
      description: ""
    }
  ]
  
  const projects = [
    {
      title: "Crypto Dashboard",
      description: "A Vue.js & Tailwind powered dashboard tracking live crypto prices.",
      image: "https://pngimg.com/uploads/bitcoin/bitcoin_PNG6.png",
      link: "https://github.com/sametkzl22/portfolio-dashboard"
    },
    {
      title: "Weather App",
      description: "Weather forecasts with Open-Meteo API, including hourly and daily data.",
      image: "https://cdn-icons-png.flaticon.com/512/1779/1779940.png",
      link: "#"
    },
    {
      title: "Personal Portfolio",
      description: "My personal portfolio website with projects, about, and contact sections.",
      image: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
      link: "#"
    }
  ]
  </script>
  