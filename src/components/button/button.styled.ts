import { styled } from '@/stitches'

export const StyledButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  borderRadius: '$1',
  fontWeight: '$bold',
  fontSize: '$md',
  width: 140,
  height: 40,

  variants: {
    type: {
      primary: {
        backgroundColor: '$violet9',
        color: 'white',
        border: 'none',
        '& svg': {
          fill: 'white',
        },
        '&:hover, &:active': {
          '&:not([disabled])': {
            background: '$violet10',
          }
        },
        '&:disabled': {
          opacity: 0.6,
          cursor: 'not-allowed',

          '& svg': {
            fill: '$mauve6',
          },
        },
        '&:focus-visible': {
          outline: 'none',
        },
      },
      outline: {
        backgroundColor: 'transparent',
        color: '$purple9',
        border: '2px solid $purple9',
        width: 'fit-content',
        height: 36,
        padding: '10px 20px',

        '& svg': {
          fill: 'transparent',
        },
        '&:hover, &:active': {
          '&:not([disabled])': {
            background: '$violet9',
            color: 'white',
          }
        },
        '&:disabled': {
          opacity: 0.6,
          cursor: 'not-allowed',

          '& svg': {
            fill: '$mauve6',
          },
        },
        '&:focus-visible': {
          outline: 'none',
        },
      },
    },
  },
})
