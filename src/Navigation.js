import { Nav, Image, Navbar } from 'react-bootstrap'

export default function Navigation() {
  return (
    <Navbar className="justify-content-around navbar-collapse" fluid="md">
      <Nav.Link href="#main">
          <Image style={{ width: 100 }} src="header/logo.jpg" rounded></Image>
        </Nav.Link>
      <Nav className="align-items-center text-uppercase" >
        <Nav.Link href="#about">Про заклад</Nav.Link>
        <Nav.Link href="#history">Історія</Nav.Link>
        <Nav.Link href="#directions">Напрями розвитку</Nav.Link>
        <Nav.Link href="#">Педадогічний колектив</Nav.Link>
        <Nav.Link href="#activities">Заходи</Nav.Link>
        <Nav.Link href="#">Контакти</Nav.Link>
      </Nav>
    </Navbar>
  )
}
