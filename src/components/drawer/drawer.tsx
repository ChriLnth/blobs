import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { StyledContent, StyledOverlay } from './drawer.styled'

export const Drawer = () => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>

      <Dialog.Trigger onClick={() => setOpen(true)}>
        Balances
      </Dialog.Trigger>

      <StyledOverlay />

      <StyledContent>
        <span>Wallet info and Balances here</span>
      </StyledContent>

    </Dialog.Root>
  )
}
