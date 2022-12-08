export const cssReset = {
  "*, html": {
    fontFamily: `'Space Grotesk', sans-serif`,
  },
  html: {
    lineHeight: 1.5,
    WebkitTextSizeAdjust: '100%',
    WebkitFontSmoothing: 'antialiased',
    textRendering: 'optimizeLegibility',
    MozOsxFontSmoothing: 'grayscale',
    touchAction: 'manipulation',
    margin: 0,
    padding: 0,
  },
  body: {
    position: 'relative',
    minHeight: '100%',
    fontFeatureSettings: "'kern'",
    margin: 0,
    padding: 0,
  },
  '*, *::before, *::after': {
    borderWidth: '0',
    borderStyle: 'solid',
    boxSizing: 'border-box',
  },
}
