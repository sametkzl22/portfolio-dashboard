export const formatWeather = (raw, coords) => {
    const current = {
      temperature: Math.round(raw.current.temperature_2m),
      humidity: raw.current.relative_humidity_2m,
      windSpeed: raw.current.wind_speed_10m,
      weatherCode: raw.current.weather_code,
      time: raw.current.time,
    }
  
    const hourly = raw.hourly.time.slice(0, 12).map((t, i) => ({
      time: t,
      temperature: Math.round(raw.hourly.temperature_2m[i]),
      weatherCode: raw.hourly.weather_code[i],
    }))
  
    return {
      current,
      hourly,
      location: { name: coords.name, country: coords.country, timezone: raw.timezone },
    }
  }