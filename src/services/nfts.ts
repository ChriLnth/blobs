import axios from 'axios'
import { ENV } from '@/config'

const apiKey = ENV.alchemyApiKey
const baseURL = `https://polygon-mumbai.g.alchemy.com/nft/v2/${apiKey}`

export const getUserBlobs = async (address: string) => {
  const response = await axios({
    method: 'get',
    url: `${baseURL}/getNFTs/?owner=${address}`
  })

  if (response && response.data) {
    const blobs = response.data.ownedNfts.filter(
      (nft: { contract: { address: string } }) =>
        nft.contract.address === ENV.contracts.blobs.toLowerCase()
    )

    const formatted = blobs.map(
      (b: {
        id: { tokenId: string };
        metadata: { name: string; image: string }
      }) => {
        return {
          id: parseInt(b.id.tokenId, 16),
          name: b.metadata.name,
          image: b.metadata.image,
        }
      })

    return formatted
  }

  return []
}

// could use this to get minted timestamp but i dont like how it looks

/*
export const getBlobMetadata = async (tokenId: string) => {
  const contract = ENV.contracts.blobs
  const url = `${baseURL}/getNFTMetadata?contractAddress=${contract}&tokenId=${tokenId}&tokenType=erc721`

  const response = await axios({
    method: 'get',
    url,
    headers: {}
  })

}*/
