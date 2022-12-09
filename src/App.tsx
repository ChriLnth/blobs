import { cssReset, globalCss, styled, Title } from '@/stitches'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom"
import { useAccount } from 'wagmi'
import { Header } from '@/components'
import { Home } from './views'
import { Collection } from './views/collection/collection'

const globalStyles = globalCss({
  ...cssReset,
})

const Root = styled('div', {
  width: '100vw',
  height: '100vh',
  backgroundColor: '$mauve1',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  padding: '$4'
})

export function App() {
  globalStyles()

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/home"
            element={
              <Home />
            }
          />
          <Route
            path="/collection"
            element={
              <Collection />
            }
          />
          <Route path="*" element={<Navigate to="/home" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const Layout = () => (
  <Root>
    <Header />
    <Outlet />
  </Root>
)
