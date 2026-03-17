'use client'

import { useEffect, useMemo, useState } from 'react'

import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365
const GOOGLE_TRANSLATE_COOKIE = 'googtrans'
const STORAGE_KEY = 'cf_ui_lang'
const BASE_LANG = 'es'

const parseGoogTrans = () => {
  if (typeof document === 'undefined') return ''

  const match = document.cookie.match(/(?:^|; )googtrans=([^;]+)/)

  if (!match?.[1]) return ''

  try {
    const value = decodeURIComponent(match[1])
    const parts = value.split('/')

    return (parts[2] || '').toLowerCase()
  } catch {
    return ''
  }
}

const setCookie = (name, value) => {
  if (typeof document === 'undefined') return

  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`
}

const ensureTranslateScript = () => {
  if (typeof window === 'undefined') return
  if (document.getElementById('google-translate-script')) return

  window.googleTranslateElementInit = () => {
    if (!window.google?.translate?.TranslateElement) return
    if (document.getElementById('google_translate_element')?.childElementCount) return

    // Widget oculto: se usa para aplicar traducción global sin ocupar espacio visual.
    // eslint-disable-next-line no-new
    new window.google.translate.TranslateElement(
      {
        pageLanguage: BASE_LANG,
        includedLanguages: 'es,en',
        autoDisplay: false
      },
      'google_translate_element'
    )
  }

  const script = document.createElement('script')

  script.id = 'google-translate-script'
  script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
  script.async = true
  document.body.appendChild(script)
}

const applyLanguage = targetLang => {
  if (typeof window === 'undefined') return

  setCookie(GOOGLE_TRANSLATE_COOKIE, `/${BASE_LANG}/${targetLang}`)
  window.localStorage.setItem(STORAGE_KEY, targetLang)
  window.location.reload()
}

const LanguageToggle = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [lang, setLang] = useState('es')

  useEffect(() => {
    ensureTranslateScript()

    const cookieLang = parseGoogTrans()
    const storedLang = String(window.localStorage.getItem(STORAGE_KEY) || '').toLowerCase()
    const initial = cookieLang || storedLang || BASE_LANG

    setLang(initial === 'en' ? 'en' : BASE_LANG)
  }, [])

  const open = Boolean(anchorEl)
  const label = useMemo(() => (lang === 'en' ? 'EN' : 'ES'), [lang])

  return (
    <>
      <Tooltip title='Idioma / Language'>
        <IconButton size='small' onClick={event => setAnchorEl(event.currentTarget)}>
          <i className='tabler-language text-xl' />
          <span className='ml-1 text-[11px] font-semibold'>{label}</span>
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem
          selected={lang === 'es'}
          onClick={() => {
            setAnchorEl(null)
            if (lang === 'es') return
            setLang('es')
            applyLanguage('es')
          }}
        >
          Español
        </MenuItem>
        <MenuItem
          selected={lang === 'en'}
          onClick={() => {
            setAnchorEl(null)
            if (lang === 'en') return
            setLang('en')
            applyLanguage('en')
          }}
        >
          English
        </MenuItem>
      </Menu>

      <div
        id='google_translate_element'
        style={{ position: 'fixed', inset: '-9999px auto auto -9999px', width: 1, height: 1, overflow: 'hidden' }}
      />
    </>
  )
}

export default LanguageToggle
