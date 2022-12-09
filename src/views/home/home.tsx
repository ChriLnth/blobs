import { Button } from "@/components"
import { Center, Title } from "@/stitches"
import { ConnectKitButton } from "connectkit"
import { useAccount } from "wagmi"


export const Home = () => {
  const { isConnected } = useAccount()

  return (
    <Center>
      <Title css={{ fontSize: 50 }}>Blobs</Title>

      {
        isConnected
          ?
          <>
            <Button type='primary' value='Mint' />
          </>
          :
          <ConnectKitButton />
      }
    </Center>
  )
}
