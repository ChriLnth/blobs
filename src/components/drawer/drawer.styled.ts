import * as Dialog from '@radix-ui/react-dialog'
import { styled, keyframes } from '../../stitches'

export const fadeIn = keyframes({
  from: { opacity: 0, right: -420 },
  to: { opacity: 1, right: 0 }
})

export const fadeout = keyframes({
  from: { opacity: 1, right: 0 },
  to: { opacity: 0, right: -420 }
})

export const StyledOverlay = styled(Dialog.Overlay, {
  backgroundColor: "$blackA9",
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,

  '&[data-state="open"]': {
    animation: `${fadeIn} 200ms ease-out`
  },

  '&[data-state="closed"]': {
    animation: `${fadeout} 200ms ease-out`
  }
})

export const StyledContent = styled(Dialog.Content, {
  position: "fixed",
  top: 0,
  right: 0,
  width: 420,
  height: "100vh",
  padding: '$3',
  backgroundColor: "white",
  borderTopLeftRadius: '$4',
  borderBottomLeftRadius: '$4',

  "&:focus": {
    outline: "none"
  },

  '&[data-state="open"]': {
    animation: `${fadeIn} 200ms ease-out`
  },

  '&[data-state="closed"]': {
    animation: `${fadeout} 200ms ease-out`
  }
})
