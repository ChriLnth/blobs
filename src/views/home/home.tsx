import { Button, FeePicker, FeeValue } from "@/components"
import { Center, Title } from "@/stitches"
import { ConnectKitButton } from "connectkit"
import { useState } from "react"
import { useAccount } from "wagmi"


export const Home = () => {
  const { isConnected } = useAccount()
  const [fee, setFee] = useState<FeeValue>('MATIC')

  const handleChangeFee = (value: FeeValue) => {
    setFee(value)
  }

  return (
    <Center>
      <Title css={{ fontSize: 50 }}>Blobs</Title>

      {
        isConnected
          ?
          <>

            <Button type='primary' value='Mint' />

            <FeePicker selected={fee} onChange={handleChangeFee} />
          </>
          :
          <ConnectKitButton />
      }
    </Center>
  )
}
