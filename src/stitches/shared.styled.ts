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

export const Center = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
})