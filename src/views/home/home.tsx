import { blobsAbi } from "@/abis"
import { Button, FeePicker, FeeValue } from "@/components"
import { ENV } from "@/config"
import { Link, MainContent, Subtitle, Title } from "@/stitches"
import { ConnectKitButton } from "connectkit"
import { BigNumber } from "ethers"
import { parseUnits } from "ethers/lib/utils.js"
import { useEffect, useState } from "react"
import {
  erc20ABI,
  useAccount,
  useWaitForTransaction,
  useContractWrite,
  usePrepareContractWrite,
  useContractRead,
} from "wagmi"
import Countdown from 'react-countdown'
import { useNavigate } from "react-router-dom"
import { SuccessMint } from "./home.styled"

const gasSettings = {
  gasLimit: BigNumber.from('1600000'),
  gasPrice: BigNumber.from('30000000000'),
}

export const Home = () => {
  const navigate = useNavigate()
  const { isConnected } = useAccount()
  const [fee, setFee] = useState<FeeValue>('MATIC')

  const [minted, setMinted] = useState(false)

  const handleChangeFee = (value: FeeValue) => {
    setFee(value)
  }

  const handleMint = () => {
    fee === 'MATIC'
      ?
      write?.()
      :
      writeApprove?.()
  }


  const { config: mintConfig } = usePrepareContractWrite({
    address: ENV.contracts.blobs,
    abi: blobsAbi,
    functionName: 'mint',
    overrides: {
      ...fee === 'MATIC' ? { value: parseUnits('0.01', 18) } : {}, // empty for tUSDC
      ...gasSettings,
    }
  })

  const { data, write } = useContractWrite(mintConfig)

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash
  })

  useEffect(() => {
    if (isSuccess) setMinted(true)
  }, [isSuccess])


  const { config: configApprove } = usePrepareContractWrite({
    address: ENV.contracts.tUSDC,
    abi: erc20ABI,
    functionName: 'approve',
    args: [ENV.contracts.blobs as `0x${string}`, parseUnits('10', 18)],
    overrides: {
      ...gasSettings
    }
  })

  const { data: dataApprove, write: writeApprove } = useContractWrite(configApprove)

  const { isLoading: isLoadingApprove, isSuccess: isSuccessApprove } = useWaitForTransaction({
    hash: dataApprove?.hash
  })

  useEffect(() => {
    if (isSuccessApprove) write?.()
  }, [isSuccessApprove, write])


  const { data: nextMintData } = useContractRead({
    address: ENV.contracts.blobs,
    abi: blobsAbi,
    functionName: 'nextMintOpportunity',
    watch: true,
  })

  const time = +`${(nextMintData as BigNumber)?.toString()}000`
  const nextMintTime = new Date(time)

  const onMintCooldown = nextMintTime > new Date()

  const renderer = ({ minutes, seconds }: { minutes: number, seconds: number }) => {
    return <span>{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</span>
  }

  return (
    <MainContent>
      <Title css={{ fontSize: 50, marginBottom: 20 }}>Blobs</Title>
      {
        isConnected
          ?
          <>
            <Button
              type='primary'
              value={
                onMintCooldown
                  ?
                  <Countdown
                    date={nextMintTime}
                    onComplete={() => setMinted(false)}
                    renderer={renderer}
                  />
                  :
                  (
                    isLoadingApprove
                      ? 'Approving...'
                      :
                      (
                        isLoading
                          ? 'Minting...'
                          : 'Mint'
                      )
                  )
              }
              disabled={!write || isLoading || isLoadingApprove || onMintCooldown}
              onClick={handleMint}
            />
            {
              minted
                ?
                <SuccessMint>
                  <Subtitle>Successfully minted.</Subtitle>
                  <Link onClick={() => navigate('/collection')}>Click here to see your new Blob :)</Link>
                </SuccessMint>
                :
                <FeePicker selected={fee} onChange={handleChangeFee} />
            }
          </>
          :
          <ConnectKitButton />
      }

    </MainContent>
  )
}
