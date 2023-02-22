import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap'
import TitleBlock from "./TitleBlock";

export default function Directions() {
  return (
   <Container className="py-3" fluid="md">
      <Row>
         <Col> 
            <TitleBlock className="mt-5" link="directions" title="Напрями розвитку"/>
         </Col>
      </Row>
      <Row>
         <Col md="4"  direction="horizontal"
                     className="justify-content-center align-items-center"
                     gap={3}>
         <Image style={{ height: 300, width: 370 }} className="" src="image/directions/photo_1.jpg"></Image>
         </Col>
         <Col md="4">
         <Image style={{ height: 300, width: 370 }} className="" src="image/directions/photo_2.jpg"></Image>
         </Col>
         <Col md="4">
         <Image style={{ height: 300, width: 370 }} className="" src="image/directions/photo_3.jpg"></Image>
         </Col>
      </Row>
      <Row> 
<Col>
<p className=" directions mt-2">Для створення оптимальних умов <strong>фізичного, психічного, інтелектуального розвитку дітей з особливими освітніми потребами</strong>, реабілітація в закладі носить комплексний характер і забезпечується поєднанням <strong>спеціального супроводу</strong>
<ul className="d-flex justify-content-around align-items-around mt-2">
<li>педагогічного ( корекційного );</li>
<li>психологічного;</li>
<li>соціального;</li>
<li>медичного;</li>
<li>професійно – трудового.</li>
</ul></p>
</Col>
</Row>
   </Container>
  )
}
