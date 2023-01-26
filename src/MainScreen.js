import { Row, Col } from 'react-bootstrap';

import Slider from './Slider';

export default function MainScreen() {
  return (
    <Row id="main" >
      <Col>
        <h1 className="text text-center py-3">КНЗ "Кмитівська спеціальна загальноосвітня<br></br>
          школа-інтернат" Житомирської обласної ради</h1>
        <Slider />
      </Col>
    </Row>
  )
}
