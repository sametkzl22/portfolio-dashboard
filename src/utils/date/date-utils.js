export const formatHour = (iso) => new Date(iso).toLocaleTimeString('tr-TR',{hour:'2-digit',minute:'2-digit'})
