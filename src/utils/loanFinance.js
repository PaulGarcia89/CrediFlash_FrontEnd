import { round2, toMoneyNumber } from '@/utils/currency'

export const normalizeLoanStatus = value =>
  String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase()
    .trim()

export const parseDateLocalSafe = value => {
  if (!value) return null

  if (typeof value === 'string') {
    const trimmed = value.trim()
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(trimmed)

    if (match) {
      const [, year, month, day] = match

      return new Date(Number(year), Number(month) - 1, Number(day))
    }
  }

  const date = new Date(value)

  return Number.isNaN(date.getTime()) ? null : date
}

export const getLoanOriginalAmount = row => toMoneyNumber(row?.monto_original ?? row?.monto_solicitado)

export const getLoanInterestPercentage = row => {
  const directRaw = row?.interes_porcentaje ?? row?.interes ?? row?.tasa_variable_pct
  const directParsed = Number(directRaw)

  if (Number.isFinite(directParsed)) {
    if (Math.abs(directParsed) <= 1) return round2(directParsed * 100)

    return round2(directParsed)
  }

  const raw = row?.tasa_variable
  const parsed = Number(raw)

  if (!Number.isFinite(parsed)) return null

  if (Math.abs(parsed) <= 1) {
    const normalizedModalidad = String(row?.modalidad || 'SEMANAL').toUpperCase()
    const cuotas = Number(row?.numero_cuotas ?? row?.num_semanas ?? row?.plazo_semanas ?? 0)

    if (normalizedModalidad === 'QUINCENAL') {
      return round2((parsed * 100) / 2)
    }

    if (normalizedModalidad === 'MENSUAL') {
      const meses = Math.max(Math.ceil(cuotas / 4), 1)

      return round2(parsed * 100 * meses)
    }

    return round2(parsed * 100)
  }

  return round2(parsed)
}

export const getLoanTotalToPay = row =>
  toMoneyNumber(row?.total_pagar ?? row?.total_pagar_bruto ?? row?.monto_total ?? row?.monto_solicitado)

export const getLoanInterestTotal = row => {
  const raw = toMoneyNumber(row?.interes_total)

  if (Number.isFinite(raw) && raw >= 0) return raw

  const total = getLoanTotalToPay(row)
  const original = getLoanOriginalAmount(row)

  if (Number.isFinite(total) && Number.isFinite(original) && total >= original) {
    return round2(total - original)
  }

  return 0
}

export const getLoanInstallmentValue = row =>
  toMoneyNumber(row?.valor_cuota ?? row?.pagos_semanales_bruto ?? row?.pagos_semanales)

export const getLoanInstallmentsCount = row => Number(row?.numero_cuotas ?? row?.num_semanas ?? row?.plazo_semanas ?? 0)

export const getLoanStartDateValue = row => row?.fecha_inicio || ''
export const getLoanEndDateValue = row => row?.fecha_fin || row?.fecha_vencimiento || ''

export const getLoanRemainingBalance = row => {
  const canonical = toMoneyNumber(row?.saldo_restante ?? row?.saldo_pendiente ?? row?.pendiente ?? row?.monto_pendiente)

  if (Number.isFinite(canonical) && canonical >= 0) return canonical

  const pendingRaw = toMoneyNumber(row?.pagos_pendientes)

  if (Number.isFinite(pendingRaw) && pendingRaw >= 0) return pendingRaw

  return 0
}

export const getLoanPaidCapital = row => toMoneyNumber(row?.capital_pagado)
export const getLoanPaidInterest = row => toMoneyNumber(row?.interes_pagado)
export const getLoanPaidLateFee = row => toMoneyNumber(row?.mora_pagada)

export const isLoanSettled = row => {
  const status = normalizeLoanStatus(row?.status_normalizado || row?.status || row?.estado)

  if (['PAGADO', 'LIQUIDADO', 'CANCELADO', 'NO_DEBE_NADA'].includes(status)) return true

  const remaining = getLoanRemainingBalance(row)

  return Number.isFinite(remaining) && remaining <= 0
}

export const isLoanActive = row => {
  if (!row) return false

  const status = normalizeLoanStatus(row?.status_normalizado || row?.status || row?.estado)

  if (['MOROSO', 'MOROSA', 'MORA', 'VENCIDO', 'VENCIDA', 'ATRASADO', 'ATRASADA', 'OVERDUE'].includes(status)) {
    return true
  }

  if (['ACTIVO', 'ACTIVA', 'ACTIVE', 'VIGENTE', 'EN CURSO', 'EN_CURSO', 'PENDIENTE', 'EN_MARCHA'].includes(status)) {
    return true
  }

  return !isLoanSettled(row)
}

export const getLoanContractDocumentId = row =>
  row?.contrato_disponible === false
    ? ''
    : String(
        row?.contrato_credito_id ||
          row?.contrato_id ||
          row?.documento_id ||
          row?.contrato?.id ||
          row?.contrato?.documento_id ||
          ''
      ).trim()

export const getLoanContractRawUrl = row => {
  if (row?.contrato_disponible === false) return ''

  return (
    row?.contrato_credito_url ||
    row?.contrato_url ||
    row?.contrato?.url ||
    row?.contrato?.url_descarga ||
    row?.contrato?.download_url ||
    row?.url_contrato ||
    row?.contrato_storage_path ||
    ''
  )
}

export const hasActiveLoanContract = row => {
  if (!row) return false
  if (row?.contrato_activo === false) return false
  if (row?.contrato_disponible === false) return false
  if (row?.contrato_activo === true) return true

  return Boolean(getLoanContractRawUrl(row) || getLoanContractDocumentId(row))
}

export const getLoanPeriodicityLabel = modalidad => {
  const normalized = normalizeLoanStatus(modalidad)

  if (normalized === 'QUINCENAL') return 'Cada 15 días'
  if (normalized === 'MENSUAL') return 'Cada 1 mes'

  return 'Cada 7 días'
}

export const extractLoanSchedule = row => {
  const cronograma =
    (Array.isArray(row?.cronograma) && row.cronograma) ||
    (Array.isArray(row?.cuotas) && row.cuotas) ||
    (Array.isArray(row?.detalle_cuotas) && row.detalle_cuotas) ||
    (Array.isArray(row?.plan_pagos) && row.plan_pagos) ||
    (Array.isArray(row?.calendario_pagos) && row.calendario_pagos) ||
    []

  return cronograma.map((item, index) => ({
    id: String(item?.id || `${row?.id || 'prestamo'}-cuota-${index}`),
    numero: Number(item?.numero ?? item?.numero_cuota ?? index + 1),
    fecha_vencimiento: item?.fecha_vencimiento || item?.vencimiento || item?.fecha || '',
    capital_programado: toMoneyNumber(item?.capital_programado ?? item?.capital ?? item?.capital_cuota),
    interes_programado: toMoneyNumber(item?.interes_programado ?? item?.interes ?? item?.interes_cuota),
    total_programado: toMoneyNumber(
      item?.total_programado ?? item?.monto_total ?? item?.monto_cuota ?? item?.monto ?? item?.valor
    ),
    saldo_restante: toMoneyNumber(item?.saldo_restante ?? item?.saldo_pendiente ?? item?.pendiente),
    estado: item?.estado || item?.status || 'PENDIENTE'
  }))
}
