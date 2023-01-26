import {Container, Row, Col} from 'react-bootstrap';

export default function TitleBlock(props) {
  return (
   <Container fluid="md">
      <Row>
         <Col>
         <h2 id={props.link} className="title mt-5 text-center text-uppercase">{props.title}</h2>
         <div className="line mb-4"></div>
         </Col>
      </Row>
   </Container>
  )
}
