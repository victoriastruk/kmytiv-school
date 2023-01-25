import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Image from 'react-bootstrap/Image'
import TitleBlock from './TitleBlock'

export default function History() {
  return (
    <Container>
      <Row>
         <Col>
         <TitleBlock title="Історія" link="history"/>
         </Col>
      </Row>
      <Row>
         <Col md="4">
            <Image src="history/table.jpg"></Image>
         </Col>
         <Col md="6">
            <Alert variant="secondary">
               <div> Кмитів -це чудові краєвиди, свіже повітря, спів птахів - райська місцина, яку колись пани Сумовські обрали собі для життя. І добре б їм там жилося, якби не революція 1917 року. В той час палали не тільки маєтки поміщиків, а й будинки заможних селян. Важко було утримати від розправи над панами революційно настроєних селян. Але пані Сумовській це вдалося, тому що поважали її люди в селі. Доброю була, лагідною...І заповіла свій маєток дітям-сиротам, адже багато їх було в революційні часи.</div>
<div>З 23 серпня 1973 року, після реконструкції та добудови , стала функціонувати як спеціальна школа-інтернат для дітей з особливими освітніми потребами.</div>
            </Alert>
         </Col>
      </Row>
      <Row>
      <Col className="d-block mx-auto" md="4">
            <figure>
    <blockquote cite="https://krasotkina.com/%D0%B2%D1%96%D1%80%D1%88%D1%96%20%D0%BF%D1%80%D0%BE%20%D0%B2%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D1%96%D0%B2%20%D1%82%D0%B0%20%D1%88%D0%BA%D0%BE%D0%BB%D1%83/">
        <p className="text-right">Школа - велика дитяча країна,<br></br>
        В ній відкривається білий наш світ.<br></br>
        Тут пізнає себе кожна дитина,<br></br>
        І відправляється звідси в політ.</p>
    </blockquote>
    <figcaption>— Надія Красоткіна</figcaption>
</figure></Col>
      </Row>
    </Container>
  )
}
