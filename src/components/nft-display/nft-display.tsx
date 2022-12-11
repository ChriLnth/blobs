import { Subtitle } from "@/stitches"

export type NftProps = {
  id: string,
  name: string,
  image: string,
}

export const NftDisplay = ({ name, image }: NftProps) => {
  return (
    <div>
      <img src={image} alt='blob' />
      <Subtitle>{name}</Subtitle>
    </div>
  )
}
