import { styled } from './stitches.config'

export const Title = styled('span', {
  fontWeight: '$bold',
  fontSize: '$lg',
  color: '$mauve12',
})

export const Subtitle = styled('span', {
  fontWeight: '$semibold',
  fontSize: '$md',
  color: '$mauve12',
  width: 'fit-content',
})

export const Text = styled('span', {
  fontSize: '$sm',
  color: '$mauve12',
})

export const Container = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: '$3',
  border: '1px solid #3c3c3f',
  marginTop: '$4',
  padding: '$2',
  background: '#313235',
  cursor: 'pointer',

  '&:hover': {
    background: '#414144',
  }
})

export const Link = styled(Subtitle, {
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

export const MainContent = styled('div', {
  width: '100%',
  height: 'calc(100vh - 60px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  backgroundColor: '$mauve1',
})
