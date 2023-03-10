import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import TitleBlock from "./TitleBlock";

import data from '../json/data.json'

export default function Directions() {
   return (
      <Container className="py-3" fluid="md">
         <Row>
            <Col>
               <TitleBlock className="mt-5" link="directions" title="Напрями розвитку" />
            </Col>
         </Row>
         <Row
            className="justify-content-center align-items-center"
            gap={2}>
            {data.directions.images.map( item => {
               return (
                  <Col md="4">
                     <Image style={{ height: 300, width: 370 }} className="" src={item.image} rounded></Image>
                  </Col>
               )
            }
            )}
         </Row>
         <Row>
            <Col>
               <p className=" directions mt-2 text-center">
                  Для створення оптимальних умов <strong>фізичного, психічного, інтелектуального розвитку дітей з особливими освітніми потребами</strong>, реабілітація в закладі носить комплексний характер і забезпечується поєднанням <strong>спеціального супроводу: </strong><br />
                  педагогічного ( корекційного );
                  психологічного;
                  соціального;
                  медичного;
                  професійно – трудового.
               </p>
            </Col>
         </Row>
      </Container>
   )
}
