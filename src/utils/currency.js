export const toMoneyNumber = value => {
  if (value === null || value === undefined) return 0
  if (typeof value === 'number') return Number.isFinite(value) ? value : 0
  const normalized = String(value).replace(/,/g, '').trim()
  const parsed = Number(normalized)

  return Number.isFinite(parsed) ? parsed : 0
}

export const round2 = value => Math.round((toMoneyNumber(value) + Number.EPSILON) * 100) / 100

export const formatMoney = value =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(round2(value))

export const formatUSD = value => formatMoney(value)
