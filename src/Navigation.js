import Nav from 'react-bootstrap/Nav';

export default function Navigation() {
  return (
   <Nav className="me-auto" >
      <Nav.Link href="#home">Про заклад</Nav.Link>
      <div className="vr" />
      <Nav.Link href="#">Історія</Nav.Link>
      <div className="vr" />
      <Nav.Link href="#">Педадогічний колектив</Nav.Link>
      <div className="vr" />
      <Nav.Link href="#">Адміністрація</Nav.Link>
      <div className="vr" />
      <Nav.Link href="#">Документація</Nav.Link>
      <div className="vr" />
      <Nav.Link href="#">Фотогалерея</Nav.Link>
      <div className="vr" />
      <Nav.Link href="#">Заходи</Nav.Link>
      <div className="vr" />
      <Nav.Link href="#">Контактна інформація</Nav.Link>
    </Nav>
  )
}
