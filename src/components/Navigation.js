import React from 'react';
import { Container, Row, Nav, Navbar, Col } from "react-bootstrap";


export default function Navigation() {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <Navbar className="d-flex justify-content-center" expand="lg" bg="back" variant="light">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="d-flex align-items-center text-uppercase">
                <Nav.Link href="#about">Про заклад</Nav.Link>
                <Nav.Link href="#history">Історія</Nav.Link>
                <Nav.Link href="#directions">Напрями розвитку</Nav.Link>
                <Nav.Link href="#collective">Педадогічний колектив</Nav.Link>
                <Nav.Link href="#activities">Заходи</Nav.Link>
                <Nav.Link href="#contacts">Зворотній зв'язок</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  )
}
