import { cssReset, globalCss, styled } from '@/stitches'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom"
import { Header } from '@/components'
import { Home } from './views'
import { Collection } from './views/collection/collection'
import { useAccount } from 'wagmi'

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
  overflowX: 'hidden',
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
              <ProtectedRoute><Collection /></ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/home" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isConnected } = useAccount()

  if (!isConnected) {
    return <Navigate to="/home" />
  }

  return children
}

const Layout = () => (
  <Root>
    <Header />
    <Outlet />
  </Root>
)
