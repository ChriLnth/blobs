import { styled } from '@/stitches'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',

  width: '100%',
})

export const Nav = styled('div', {
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',

  '& span:nth-of-type(1)': {
    marginRight: '$4',
  }
})

export const NavItem = styled('span', {
  fontWeight: '$bold',
  fontSize: '$lg',
  color: '$mauve12',
  cursor: 'pointer',


  '&:hover': {
    color: '$violet9'
  }
})