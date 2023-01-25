import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from './Slider';

export default function MainScreen() {
  return (
    <Row>
      <Col>
      <h1 link="home" className="text text-center py-4">КНЗ "Кмитівська спеціальна загальноосвітня<br></br> школа-інтернат" Житомирської обласної ради</h1>
      <Slider/>
      </Col>
    </Row>
  )
}
