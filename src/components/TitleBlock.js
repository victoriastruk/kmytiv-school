import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

export default function TitleBlock(props) {
  return (
   <Container>
      <Row>
         <Col>
         <h2 id={props.link} className="title text-center text-uppercase">{props.title}</h2>
         <div className="line mb-4"></div>
         </Col>
      </Row>
   </Container>
  )
}
