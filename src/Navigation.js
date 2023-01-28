import { Nav, Image, Navbar } from 'react-bootstrap'

export default function Navigation() {
  return (
    <Navbar className="justify-content-center navbar-collapse" fluid="md">
      <Nav className="align-items-center" >
        <Nav.Link href="#main">
          <Image style={{ width: 70 }} src="header/logo.jpg" rounded></Image>
        </Nav.Link>
        <Nav.Link href="#about">Про заклад</Nav.Link>
        <Nav.Link href="#history">Історія</Nav.Link>
        <Nav.Link href="#directions">Напрями розвитку</Nav.Link>
        <Nav.Link href="#">Педадогічний колектив</Nav.Link>
        <Nav.Link href="#activities">Заходи</Nav.Link>
        <Nav.Link href="#">Контактна інформація</Nav.Link>
      </Nav>
    </Navbar>
  )
}
