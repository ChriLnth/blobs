import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { IconContainer, StyledContent, StyledOverlay } from './drawer.styled'
import { BiWallet } from 'react-icons/bi'
import { ConnectKitButton } from 'connectkit'
import { Balances } from '@/components'
import { FaFaucet } from 'react-icons/fa'
import { Container, Subtitle } from '@/stitches'

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

        <Container css={{ marginTop: 'auto' }}>
          <FaFaucet style={{ fontSize: 20, color: '#6e56cf', marginRight: 10 }} /><Subtitle>Get tUSDC</Subtitle>
        </Container>
      </StyledContent>

    </Dialog.Root>
  )
}
