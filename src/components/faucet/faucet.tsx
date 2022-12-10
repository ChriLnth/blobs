import { faucetABI } from "@/abis"
import { ENV } from "@/config"
import { Container, Subtitle } from "@/stitches"
import { BigNumber } from "ethers"
import { FaFaucet } from "react-icons/fa"
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi"

export const Faucet = () => {

  const { config: mintConfig } = usePrepareContractWrite({
    address: ENV.contracts.faucet,
    abi: faucetABI,
    functionName: 'dripERC20Tokens',
    overrides: {
      gasLimit: BigNumber.from('1000000'),
      gasPrice: BigNumber.from('10000000000'),
    }
  })

  const { data, write } = useContractWrite(mintConfig)

  const { isLoading } = useWaitForTransaction({
    hash: data?.hash
  })

  return (
    <Container css={{ marginTop: 'auto' }} onClick={() => !isLoading && write?.()}>
      <FaFaucet style={{ fontSize: 20, color: '#6e56cf', marginRight: 10 }} />
      <Subtitle>
        {isLoading ? 'Dripping...' : 'Get tUSDC'}
      </Subtitle>
    </Container>
  )
}
