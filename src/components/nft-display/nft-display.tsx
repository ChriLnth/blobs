import { Subtitle } from "@/stitches"

export type NftProps = {
  id: string,
  name: string,
  image: string,
}

export const NftDisplay = ({ id, name, image }: NftProps) => {
  return (
    <div>
      <img src={image} />
      <Subtitle>{name}</Subtitle>
    </div>
  )
}
