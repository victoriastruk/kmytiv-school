import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from './Slider';

export default function MainScreen() {
  return (
    <Row>
      <Col>
      <h1 className="text text-center text-primary py-3">КНЗ "Кмитівська спеціальна загальноосвітня школа-інтернат" Житомирської обласної ради</h1>
      <Slider/>
      </Col>
    </Row>
  )
}
