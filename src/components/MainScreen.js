import { Row, Col } from 'react-bootstrap';

import Slider from './Slider';

export default function MainScreen() {
  return (
    <Row id="main">
      <Col>
        <h1 className="text text-center mt-3 mb-3 py-3">КНЗ "Кмитівська спеціальна загальноосвітня
          школа-інтернат"<br/> Житомирської обласної ради</h1>
        <Slider />
      </Col>
    </Row>
  )
}
