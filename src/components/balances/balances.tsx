import { ENV } from "@/config"
import { useAccount, useBalance } from "wagmi"
import { ReactComponent as MaticImg } from "@/assets/matic.svg"
import { ReactComponent as TUSDCIMG } from "@/assets/tusdc.svg"
import { BalanceContainer, TokenImage } from "./balances.styled"
import { Subtitle, Container } from "@/stitches"

type BalanceProps = {
  symbol: string,
  amount: string,
}

const getTokenImage = (symbol: string) => (
  {
    MATIC: <MaticImg />,
    tUSDC: <TUSDCIMG />,
  }[symbol]
)

const Balance = ({ symbol, amount }: BalanceProps) => {
  return (
    <Container>
      <TokenImage>
        {getTokenImage(symbol)}
      </TokenImage>
      <Subtitle>{(+amount).toFixed(2)} {symbol}</Subtitle>
    </Container>
  )
}

export const Balances = () => {

  const { address } = useAccount()

  const { data: matic } = useBalance({
    address,
    watch: true
  })

  const { data: tUSDC } = useBalance({
    address,
    token: ENV.contracts.tUSDC as `0x${string}`,
    watch: true
  })

  if (!matic && !tUSDC) return null

  return (
    <BalanceContainer>
      <Balance symbol={matic!.symbol} amount={matic!.formatted} />
      <Balance symbol={tUSDC!.symbol} amount={tUSDC!.formatted} />
    </BalanceContainer>
  )
}

