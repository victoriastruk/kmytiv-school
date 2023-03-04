import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import TitleBlock from "./TitleBlock";
import data from '../json/data.json'

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
      {
        data.collective.map(item =>{
          return(
            <Col md='4' className="d-block  mx-3">
         <Image style={{ height: 300, width: 370 }} className="" src={item.image}></Image>
         </Col>
          )
        })
      }
      </Row>
    </Container>
  )
}
