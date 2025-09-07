export const formatCrypto = (list) =>
  list.map(c => ({
    id: c.id,
    symbol: c.symbol?.toUpperCase(),
    name: c.name,
    price: c.current_price,
    change24h: c.price_change_percentage_24h,
    image: c.image,
    marketCap: c.market_cap,
  }))