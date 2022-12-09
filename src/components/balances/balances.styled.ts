import { styled } from "@/stitches"

export const TokensContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '$2',
  border: '1px solid $mauve11'
})

export const TokenImage = styled('div', {
  width: 24,
  height: 24,
  borderRadius: '$round',
  marginRight: '$2'
})

export const BalanceContainer = styled('div', {
  marginTop: '$4'
})