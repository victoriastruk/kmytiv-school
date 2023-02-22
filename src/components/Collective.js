import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import TitleBlock from "./TitleBlock";

export default function Collective() {
  return (
    <Container className="py-3 mb-3" fluid="md">
      <Row>
         <Col>
         <TitleBlock title="Педадогічний колектив" link="collective"/>
         </Col>
      </Row>

      <Row>
         <Col className="d-block text-center mx-auto mb-4 lead">
         <div>В закладі працює 36 педагогів. З них:</div>
         </Col>
      </Row>

      <Row className='justify-content-center'>
         <Col md='4' className="d-block  mx-3">
         <Image style={{ height: 300, width: 370 }} className="" src="image/collective/diagram_1.png"></Image>
         </Col>
         <Col md='4' className="d-block ml-3">
         <Image style={{ height: 300, width: 370 }} className="" src="image/collective/diagram_2.png"></Image>
         </Col>
      </Row>
    </Container>
  )
}
