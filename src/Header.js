import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from './Navigation';

export default function Header() {
  return (
  <Navbar className="back" bg="aqua" variant="aqua">
   <Container fluid="md" className="justify-content-md-center">
      <Row>
        <Col>
            <Navigation/>
        </Col>
      </Row>
   </Container>
</Navbar>
  );
}
