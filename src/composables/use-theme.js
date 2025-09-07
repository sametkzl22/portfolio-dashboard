import { ref, onMounted } from 'vue'

const THEME_KEY = 'theme'        // 'dark' | 'light' | 'system'
const isDark = ref(false)
const mode = ref('system')

function applyTheme() {
  const root = document.documentElement
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const effectiveDark = mode.value === 'dark' || (mode.value === 'system' && systemPrefersDark)
  isDark.value = effectiveDark
  root.classList.toggle('dark', effectiveDark)
}

export function useTheme() {
  const setMode = (m) => {
    mode.value = m
    localStorage.setItem(THEME_KEY, m)
    applyTheme()
  }

  const toggle = () => {
    // light <-> dark 
    setMode(isDark.value ? 'light' : 'dark')
  }

  onMounted(() => {
    mode.value = localStorage.getItem(THEME_KEY) || 'system'
    applyTheme()
    // sistem teması değişirse dinle
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => { if (mode.value === 'system') applyTheme() }
    mq.addEventListener?.('change', handler)
  })

  return { isDark, mode, setMode, toggle }
}
