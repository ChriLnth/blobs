import { styled, Subtitle } from '@/stitches'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '$4',
})

export const StyledFee = styled(Subtitle, {
  cursor: 'pointer',

  '&:hover': {
    color: '$violet10'
  },

  variants: {
    selected: {
      true: {
        color: '$violet9'
      }
    }
  }
})
