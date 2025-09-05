<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Filler } from 'chart.js'

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Filler)

const props = defineProps({
  labels: { type: Array, default: () => [] },
  values: { type: Array, default: () => [] },
  title:  { type: String, default: 'Hourly Temperature (°C)' }
})

const canvasRef = ref(null)
let chart

function createChart() {
  const ctx = canvasRef.value.getContext('2d')
  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: props.labels,
      datasets: [{
        label: props.title,
        data: props.values,
        tension: 0.35,
        fill: true,
        
        backgroundColor: 'rgba(59,130,246,0.2)', 
        borderColor: 'rgba(59,130,246,1)',
        pointRadius: 0,
        borderWidth: 2,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      interaction: { mode: 'index', intersect: false },
      plugins: { legend: { display: false }, tooltip: { enabled: true } },
      scales: {
        x: { ticks: { maxTicksLimit: 8 } },
        y: { ticks: { callback: (v) => `${v}°` }, beginAtZero: false }
      }
    }
  })
}

function updateChart() {
  if (!chart) return createChart()
  chart.data.labels = props.labels
  chart.data.datasets[0].data = props.values
  chart.update()
}

watch(() => [props.labels, props.values], updateChart, { deep: true })
onMounted(createChart)
onBeforeUnmount(() => { chart?.destroy(); chart = null })
</script>

<template>
  <div class="h-64 md:h-72">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>
