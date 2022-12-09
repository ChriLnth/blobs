import { useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'
import { Drawer } from "../drawer"
import { Container, Nav, NavItem } from "./header.styled"

export const Header = () => {
  const navigate = useNavigate()

  const { isConnected } = useAccount()

  if (!isConnected) return null

  return (
    <Container>
      <Nav>
        <NavItem onClick={() => navigate('home')}>Home</NavItem>
        <NavItem onClick={() => navigate('collection')}>Collection</NavItem>
      </Nav>

      <Drawer />
    </Container>
  )
}
