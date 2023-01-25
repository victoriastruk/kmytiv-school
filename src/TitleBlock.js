import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function TitleBlock(props) {
  return (
   <Container fluid="md">
      <Row>
         <Col>
         <h2 id={props.link} className="title mt-4 text-center text-uppercase">{props.title}</h2>
         <div className="line mb-4"></div>
         </Col>
      </Row>
   </Container>
  )
}
