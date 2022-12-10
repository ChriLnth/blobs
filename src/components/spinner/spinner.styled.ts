import { keyframes, styled } from '@/stitches'

const keyframe = keyframes({
  '0%, 100%': {
    transform: 'scale(0)',
    opacity: 1,
  },
  '50%': {
    transform: 'scale(1)',
    opacity: 0,
  }
})

export const StyledSpinner = styled('div', {
  width: 48,
  height: 48,
  display: 'inline-block',
  position: 'relative',

  '&::after, &::before': {
    content: '',
    width: 48,
    height: 48,
    borderRadius: '50%',
    background: '#FFF',
    position: 'absolute',
    left: 0,
    top: 0,
    boxSizing: 'border-box',
    animation: `${keyframe} 2s ease-in-out infinite`,
  },

  '&::after': {
    animationDelay: '-1s'
  }
})
