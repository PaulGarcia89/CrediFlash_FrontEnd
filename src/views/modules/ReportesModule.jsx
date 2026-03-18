'use client'

import { useMemo, useRef, useState } from 'react'

import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import LinearProgress from '@mui/material/LinearProgress'
import Stack from '@mui/material/Stack'
import Tab from '@mui/material/Tab'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Tabs from '@mui/material/Tabs'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import usePermissions from '@/hooks/usePermissions'

const normalizeHeader = value =>
  String(value || '')
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()

const isNameHeader = header => ['nombres completo', 'nombre completo', 'nombres', 'nombre'].includes(header)
const isAmountHeader = header => ['monto', 'monto usd', 'importe', 'valor'].includes(header)
const isDateHeader = header => ['fecha', 'fecha pago', 'fecha de pago', 'date'].includes(header)

const formatUSDAmount = value =>
  Number(value || 0).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })

const parseAmount = raw => {
  const cleaned = String(raw ?? '')
    .replace(/,/g, '')
    .replace(/[^\d.-]/g, '')
  const value = Number(cleaned)

  return Number.isFinite(value) ? value : 0
}

const formatDateDisplay = raw => {
  if (raw === null || raw === undefined || raw === '') return '-'
  const date = new Date(raw)

  if (!Number.isNaN(date.getTime())) {
    return date.toLocaleDateString('en-US')
  }

  return String(raw)
}

export default function ReportesModule() {
  const { analista } = usePermissions()
  const [subMenu, setSubMenu] = useState('resumen')
  const [loadingExcel, setLoadingExcel] = useState(false)
  const [excelFileName, setExcelFileName] = useState('')
  const [excelRows, setExcelRows] = useState([])
  const [excelError, setExcelError] = useState('')
  const [search, setSearch] = useState('')
  const inputRef = useRef(null)
  const isAdminProfile = String(analista?.rol || analista?.role || '').toUpperCase().includes('ADMIN')

  const filteredRows = useMemo(() => {
    const term = String(search || '').trim().toLowerCase()
    if (!term) return excelRows

    return excelRows.filter(row => {
      return (
        String(row.nombreCompleto || '')
          .toLowerCase()
          .includes(term) ||
        String(row.fecha || '')
          .toLowerCase()
          .includes(term)
      )
    })
  }, [excelRows, search])

  const onPickExcel = () => {
    setExcelError('')
    if (inputRef.current) inputRef.current.click()
  }

  const onFileChange = async event => {
    const file = event.target.files?.[0]
    if (!file) return

    setExcelError('')
    setExcelFileName(file.name)
    setLoadingExcel(true)

    try {
      const XLSX = await import('xlsx')
      const buffer = await file.arrayBuffer()
      const workbook = XLSX.read(buffer, { type: 'array', cellDates: true })
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]]

      if (!firstSheet) {
        throw new Error('El archivo no contiene hojas para procesar.')
      }

      const rawRows = XLSX.utils.sheet_to_json(firstSheet, { defval: '' })

      if (!rawRows.length) {
        setExcelRows([])
        setExcelError('El archivo no tiene filas con datos.')
        return
      }

      const firstRow = rawRows[0] || {}
      const headers = Object.keys(firstRow)

      const nameKey = headers.find(header => isNameHeader(normalizeHeader(header)))
      const amountKey = headers.find(header => isAmountHeader(normalizeHeader(header)))
      const dateKey = headers.find(header => isDateHeader(normalizeHeader(header)))

      if (!nameKey || !amountKey || !dateKey) {
        throw new Error('No se encontraron las columnas requeridas: Nombres Completo, monto, fecha.')
      }

      const normalizedRows = rawRows
        .map(row => ({
          nombreCompleto: String(row[nameKey] || '').trim(),
          monto: parseAmount(row[amountKey]),
          fecha: row[dateKey]
        }))
        .filter(row => row.nombreCompleto || row.monto || row.fecha)

      setExcelRows(normalizedRows)
      if (!normalizedRows.length) {
        setExcelError('No se encontraron registros válidos para mostrar.')
      }
    } catch (err) {
      setExcelRows([])
      setExcelError(err.message || 'No se pudo procesar el archivo Excel.')
    } finally {
      setLoadingExcel(false)
      if (event.target) event.target.value = ''
    }
  }

  if (!isAdminProfile) {
    return <Alert severity='warning'>Solo el perfil administrador puede acceder a Reportes.</Alert>
  }

  return (
    <Stack spacing={2}>
      <Typography variant='h4'>Reportes</Typography>
      <Card>
        <CardContent>
          <Tabs value={subMenu} onChange={(_, value) => setSubMenu(value)} variant='scrollable' scrollButtons='auto'>
            <Tab value='resumen' label='Resumen' />
            <Tab value='carga-pagos-bancarios' label='Carga de pagos bancarios' />
          </Tabs>
          <Divider sx={{ mt: 1.5 }} />

          {subMenu === 'resumen' ? (
            <Box sx={{ pt: 2 }}>
              <Typography color='text.secondary'>Módulo disponible solo para administrador.</Typography>
            </Box>
          ) : null}

          {subMenu === 'carga-pagos-bancarios' ? (
            <Stack spacing={1.5} sx={{ pt: 2 }}>
              <Typography variant='h6'>Carga de pagos bancarios</Typography>
              <Typography color='text.secondary'>
                Carga un archivo Excel para visualizar pagos en tabla.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Button variant='contained' onClick={onPickExcel}>
                  Cargar Excel
                </Button>
                <Button
                  variant='tonal'
                  color='secondary'
                  onClick={() => {
                    setExcelRows([])
                    setExcelFileName('')
                    setSearch('')
                    setExcelError('')
                  }}
                  disabled={!excelRows.length && !excelFileName}
                >
                  Limpiar
                </Button>
                <TextField
                  size='small'
                  label='Buscar en resultados'
                  value={search}
                  onChange={event => setSearch(event.target.value)}
                  sx={{ minWidth: { xs: '100%', sm: 280 } }}
                />
              </Stack>
              <input
                ref={inputRef}
                type='file'
                accept='.xlsx,.xls,.csv'
                hidden
                onChange={onFileChange}
                aria-label='Cargar archivo Excel de pagos'
              />
              {excelFileName ? (
                <Typography color='text.secondary' variant='body2'>
                  Archivo cargado: {excelFileName}
                </Typography>
              ) : null}
              {loadingExcel ? <LinearProgress /> : null}
              {excelError ? <Alert severity='error'>{excelError}</Alert> : null}

              <TableContainer sx={{ border: theme => `1px solid ${theme.palette.divider}`, borderRadius: 1 }}>
                <Table size='small'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Nombres completo</TableCell>
                      <TableCell align='right'>Monto</TableCell>
                      <TableCell>Fecha</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredRows.map((row, index) => (
                      <TableRow key={`${row.nombreCompleto}-${row.fecha}-${index}`} hover>
                        <TableCell>{row.nombreCompleto || '-'}</TableCell>
                        <TableCell align='right'>{formatUSDAmount(row.monto)}</TableCell>
                        <TableCell>{formatDateDisplay(row.fecha)}</TableCell>
                      </TableRow>
                    ))}
                    {!filteredRows.length ? (
                      <TableRow>
                        <TableCell colSpan={3} align='center'>
                          Sin registros para mostrar.
                        </TableCell>
                      </TableRow>
                    ) : null}
                  </TableBody>
                </Table>
              </TableContainer>
            </Stack>
          ) : null}
        </CardContent>
      </Card>
    </Stack>
  )
}
