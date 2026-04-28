const splitFileName = fileName => {
  const raw = String(fileName || '').trim()

  if (!raw) return { baseName: 'archivo', extension: '' }

  const lastDot = raw.lastIndexOf('.')

  if (lastDot <= 0) return { baseName: raw, extension: '' }

  return {
    baseName: raw.slice(0, lastDot),
    extension: raw.slice(lastDot)
  }
}

const sanitizeNamePart = value =>
  String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9_-]+/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_+|_+$/g, '') || 'archivo'

const getUploadDatePart = () => new Date().toISOString().slice(0, 10)

export const buildScopedUploadFilename = (file, scope) => {
  const { baseName, extension } = splitFileName(file?.name)
  const safeBaseName = sanitizeNamePart(baseName)

  if (scope === 'contract') {
    return `CONTRATO_${getUploadDatePart()}_${safeBaseName}${extension}`
  }

  if (scope === 'identification') {
    return `IDENTIFICACION_${safeBaseName}${extension}`
  }

  if (scope === 'account_statement') {
    return `ESTADO_CUENTA_${safeBaseName}${extension}`
  }

  if (scope === 'income_proof') {
    return `COMPROBANTE_INGRESO_${safeBaseName}${extension}`
  }

  return `${safeBaseName}${extension}`
}
