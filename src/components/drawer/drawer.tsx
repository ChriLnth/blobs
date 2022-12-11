import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { IconContainer, StyledContent, StyledOverlay } from './drawer.styled'
import { BiWallet } from 'react-icons/bi'
import { ConnectKitButton } from 'connectkit'
import { Balances, Faucet } from '@/components'

export const Drawer = () => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>

      <Dialog.Trigger onClick={() => setOpen(true)} asChild>
        <IconContainer>
          <BiWallet fontSize={30} />
        </IconContainer>
      </Dialog.Trigger>

      <StyledOverlay />

      <StyledContent>
        <ConnectKitButton />
        <Balances />

        <Faucet />
      </StyledContent>

    </Dialog.Root>
  )
}
