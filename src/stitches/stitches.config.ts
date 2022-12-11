import { createStitches } from '@stitches/react'
import { violetDark, mauveDark, blackA } from '@radix-ui/colors'

export const { styled, globalCss, theme, keyframes } = createStitches({
  theme: {
    colors: {
      ...violetDark,
      ...mauveDark,
      ...blackA,
      loContrast: '$mauve12',
      hiContrast: '$mauve1',
    },
    fontWeights: {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    fonts: {
      spaceGrotesk: `'Space Grotesk', sans-serif`,
    },
    fontSizes: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '22px',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
    },
    radii: {
      1: '4px',
      2: '6px',
      3: '8px',
      4: '12px',
      round: '50%',
    },
    zIndices: {
      1: 100,
      2: 200,
      3: 300,
      4: 400,
      max: 999,
    }
  },
  media: {
    bp1: '(max-width: 640px)',
    bp2: '(max-width: 768px)',
    bp3: '(max-width: 1024px)',
  },
})
