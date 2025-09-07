export default {
    mounted(el) {
      const obs = new IntersectionObserver(
        ([entry], observer) => {
          if (entry.isIntersecting) {
            el.classList.add('reveal-in')
            observer.unobserve(el)
          }
        },
        { threshold: 0.12 }
      )
      obs.observe(el)
    }
  }
  