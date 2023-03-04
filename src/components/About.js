import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import TitleBlock from './TitleBlock';
import data from '../json/data.json'
import Highlighter from "react-highlight-words";

export default function About() {
   return (
      <Container fluid="md" className="py-5">

         <Row>
            <Col>
               <TitleBlock link="about" title="Про заклад" />
            </Col>
         </Row>

         <Row className="">
            <Col md="5" className="">
               <Image style={{ height: 240 }} src={data.about.image} rounded></Image>
            </Col>
            <Col md="6" className="about__text">
               <Highlighter
                  highlightClassName="strong"
                  searchWords={["забезпечує корекційну спрямованість навчально-виховного процесу, лікувально-профілактичну, відновлювальну і оздоровчу роботу",
                     "від 7 до 17 років.", "корекційно-відновлювальні заняття", "лікувальної фізкультури,логопедії, ритміки, соціально-побутової орієнтації.",
                     "трудове навчання", "спортивні секції", "20 гуртків за інтересами."]}
                  autoEscape={true}
                  textToHighlight={data.about.p1}
               />
            </Col>
         </Row>
         <Row>
            <Col>
               <Highlighter
                  highlightClassName="strong"
                  searchWords={["зараховуються:", ""]}
                  textToHighlight={data.about.p2} />
            </Col>
         </Row>
         <Row>
            <Col md="3"></Col>
            <Col className="about__text">
               <ul>
                  <li>легка розумова відсталість;</li>
                  <li>помірна розумова відсталість;</li>
                  <li>органічна деменція різного походження,яка відповідає легкійта помірній розумовій відсталості;</li>
                  <li>розумова відсталість у поєднанні з раннім дитячим аутизмом, з тяжкими порушеннями мовлення.</li>
               </ul>
            </Col>
         </Row>
      </Container>
   )
}
