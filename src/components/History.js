import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import TitleBlock from './TitleBlock'

import data from '../json/data.json'
import Highlighter from "react-highlight-words";


export default function History() {
  return (
    <Container className="py-3">
      <Row className="align-items-center">
         <Col md="4">
            <Image style={{ width: 350, height: 400 }}  className="" src={data.history.img}></Image>
         </Col>
         <Col md="8">
            <TitleBlock title="Історія" link="history"/>
                <Highlighter
                  highlightClassName="strong"
                  searchWords={["Кмитів",
                     "пани Сумовські", "революція 1917 року.", "заповіла свій маєток дітям-сиротам,",
                     "трудове навчання", "спортивні секції", "20 гуртків за інтересами."]}
                  autoEscape={true}
                  textToHighlight={data.history.text}
               />
               <br/>
               <Highlighter
                  highlightClassName="strong"
                  searchWords={["З 23 серпня 1973 року,",
                     "спеціальна школа-інтернат для дітей з особливими освітніми потребами."]}
                  autoEscape={true}
                  textToHighlight={data.history.text2}
               />
               <figure>
               <blockquote className="d-block mr-0" cite="https://krasotkina.com/%D0%B2%D1%96%D1%80%D1%88%D1%96%20%D0%BF%D1%80%D0%BE%20%D0%B2%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D1%96%D0%B2%20%D1%82%D0%B0%20%D1%88%D0%BA%D0%BE%D0%BB%D1%83/">
               <br/><p><i>Школа - велика дитяча країна,<br></br>
                  В ній відкривається білий наш світ.<br></br>
                  Тут пізнає себе кожна дитина,<br></br>
                  І відправляється звідси в політ.</i></p>
                  </blockquote>
                  <figcaption><i className="d-block mr-0">— Надія Красоткіна</i></figcaption>
               </figure>
         </Col>
      </Row>
    </Container>
  )
}
