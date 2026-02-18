const typography = fontFamily => ({
  fontFamily:
    typeof fontFamily === 'undefined' || fontFamily === ''
      ? [
          '"Public Sans"',
          'sans-serif',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"'
        ].join(',')
      : fontFamily,
  fontSize: 17,
  h1: {
    fontSize: '3.35rem',
    fontWeight: 500,
    lineHeight: 1.47826
  },
  h2: {
    fontSize: '2.85rem',
    fontWeight: 500,
    lineHeight: 1.47368421
  },
  h3: {
    fontSize: '2.2rem',
    fontWeight: 500,
    lineHeight: 1.5
  },
  h4: {
    fontSize: '1.95rem',
    fontWeight: 500,
    lineHeight: 1.58334
  },
  h5: {
    fontSize: '1.45rem',
    fontWeight: 500,
    lineHeight: 1.5556
  },
  h6: {
    fontSize: '1.2rem',
    fontWeight: 500,
    lineHeight: 1.46667
  },
  subtitle1: {
    fontSize: '1.15rem',
    lineHeight: 1.46667
  },
  subtitle2: {
    fontSize: '1.05rem',
    fontWeight: 400,
    lineHeight: 1.53846154
  },
  body1: {
    fontSize: '1.15rem',
    lineHeight: 1.46667
  },
  body2: {
    fontSize: '1.05rem',
    lineHeight: 1.53846154
  },
  button: {
    fontSize: '1.1rem',
    lineHeight: 1.46667,
    textTransform: 'none'
  },
  caption: {
    fontSize: '1rem',
    lineHeight: 1.38462,
    letterSpacing: '0.4px'
  },
  overline: {
    fontSize: '0.95rem',
    lineHeight: 1.16667,
    letterSpacing: '0.8px'
  }
})

export default typography
