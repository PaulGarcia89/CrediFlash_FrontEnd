export const formatDateMMDDYYYY = value => {
  if (!value) return '-'

  if (typeof value === 'string') {
    const trimmed = value.trim()
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(trimmed)

    if (match) {
      const [, yyyy, mm, dd] = match

      return `${mm}/${dd}/${yyyy}`
    }
  }

  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return String(value)

  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const dd = String(date.getDate()).padStart(2, '0')
  const yyyy = String(date.getFullYear())

  return `${mm}/${dd}/${yyyy}`
}

export const formatDateTimeMMDDYYYY = value => {
  if (!value) return '-'

  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return String(value)

  const datePart = formatDateMMDDYYYY(date)
  const hours = date.getHours()
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const suffix = hours >= 12 ? 'PM' : 'AM'
  const normalizedHours = hours % 12 || 12

  return `${datePart} ${String(normalizedHours).padStart(2, '0')}:${minutes} ${suffix}`
}
