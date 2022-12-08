import { Drawer } from './components/drawer'
import { cssReset, globalCss } from './stitches'

const globalStyles = globalCss({
  ...cssReset,
})

export function App() {
  globalStyles()

  return (
    <>
      <h1>wagmi + ConnectKit + Vite</h1>
      <Drawer />
    </>
  )
}
