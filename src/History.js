import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Image from 'react-bootstrap/Image'
import TitleBlock from './TitleBlock'

export default function History() {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
         <Col md="4">
            <Image className="d-block mx-5 px-3" src="history/table.jpg"></Image>
         </Col>
         <Col md="8">
            <TitleBlock title="Історія" link="history"/>
               <div> <strong>Кмитів</strong> -це чудові краєвиди, свіже повітря, спів птахів - райська місцина, 
               яку колись <strong>пани Сумовські</strong> обрали собі для життя. І добре б їм там жилося, якби 
               <strong> не революція 1917 року.</strong> В той час палали не тільки маєтки поміщиків, а й будинки заможних селян.
               Важко було утримати від розправи над панами революційно настроєних селян.
               Але пані Сумовській це вдалося, тому що поважали її люди в селі.
               Доброю була, лагідною...І <strong>заповіла свій маєток дітям-сиротам,</strong> адже багато їх було в революційні часи.</div>
               <div><strong>З 23 серпня 1973 року,</strong> після реконструкції та добудови ,
               стала функціонувати як <strong>спеціальна школа-інтернат для дітей з особливими освітніми потребами.</strong></div>
               <br></br>

               <figure>
               <blockquote className="d-block mr-0" cite="https://krasotkina.com/%D0%B2%D1%96%D1%80%D1%88%D1%96%20%D0%BF%D1%80%D0%BE%20%D0%B2%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D1%96%D0%B2%20%D1%82%D0%B0%20%D1%88%D0%BA%D0%BE%D0%BB%D1%83/">
                  <p><i>Школа - велика дитяча країна,<br></br>
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
