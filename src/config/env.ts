export const ENV = {
  alchemyApiKey: import.meta.env.VITE_ALCHEMY_API_KEY as string,
  contracts: {
    tUSDC: import.meta.env.VITE_TUSDC_ADDRESS as string,
    blobs: import.meta.env.VITE_BLOBS_ADDRESS as string,
  }
}
