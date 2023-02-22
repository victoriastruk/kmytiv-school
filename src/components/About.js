import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Image from 'react-bootstrap/Image';
import TitleBlock from './TitleBlock';
import about from '../json/about.json'
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
            <Col md="5"  className="">
               <Image style={{ height: 240 }} src={about.image} rounded></Image>
            </Col>
            <Col md="6" className="about__text">
               {/* <Alert variant="success" className=""> */}
               {/* <p>Школа<strong> забезпечує корекційну спрямованість навчально-виховного процесу, лікувально-профілактичну, відновлювальну і
                  оздоровчу роботу</strong> для вихованців віком <strong>від 7 до 17 років.</strong> У ній проводяться <strong>
                     корекційно-відновлювальні заняття</strong> з предметно-практичного навчання, <strong>лікувальної фізкультури,
                        логопедії, ритміки, соціально-побутової орієнтації.</strong> Здійснюється <strong>трудове навчання</strong> за профілями:
                  швейна, столярна справа та квітникарство.
                  Активно працюють <strong>спортивні секції</strong> (баскетбол, футбол, настільний теніс, легка атлетика),
                  <strong> 20 гуртків за інтересами.</strong> Діти в’яжуть, вишивають, роблять м’які іграшки, майстерно готують
                  тістечка, різні страви, вчаться робити вироби з природнього матеріалу, паперу, дерева та інші.</p> */}
               {/* </Alert> */}
              
               <Highlighter
               className='hiligh'
    highlightClassName="strong"
    searchWords={["забезпечує корекційну спрямованість навчально-виховного процесу, лікувально-профілактичну, відновлювальну і оздоровчу роботу",
     "від 7 до 17 років.", "корекційно-відновлювальні заняття", "лікувальної фізкультури,логопедії, ритміки, соціально-побутової орієнтації.",
   "трудове навчання","спортивні секції", "20 гуртків за інтересами."]}
    autoEscape={true}
    textToHighlight= {about.p1}
  />
            </Col>
         </Row>
         <Row>
            <Col>
         <strong>До закладу зараховуються:</strong>
                  діти <strong>з порушенням інтелектуального розвитку</strong> з 6(7) років та
                  діти <strong>з відповідним діагнозом</strong> з такими медичними показаннями:
                  
            </Col>
            </Row>
            <Row>
               <Col md="3"></Col>
            <Col>
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
