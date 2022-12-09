import { NftProps, NftDisplay } from "@/components"
import { getUserBlobs } from "@/services"
import { Center, Title } from "@/stitches"
import { useEffect, useState } from "react"
import { useAccount } from "wagmi"
import { Container } from "./collection.styled"

export const Collection = () => {
  const { address } = useAccount()
  const [loading, setLoading] = useState(true)
  const [collection, setCollection] = useState<NftProps[]>([])

  useEffect(() => {
    async function getBlobs() {
      const blobs = await getUserBlobs(address!)
      setCollection(blobs)
      setLoading(false)
    }

    if (address) {
      getBlobs()
    }
  }, [address])

  return (
    <Center>
      {
        loading
          ?
          <Title>Loading...</Title>
          :
          collection.length > 0
            ?
            <Container>
              {
                collection.map(blob => <NftDisplay key={blob.id} {...blob} />)
              }
            </Container>
            :
            <Title>You don't have any Blobs yet :(</Title>
      }
    </Center>
  )
}
