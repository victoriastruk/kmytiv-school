import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AnimatedText from 'react-animated-text-content';

import Slider from './Slider';

export default function MainScreen() {
  return (
    <Row>
      <Col>
      <AnimatedText
  type="words" // animate words or chars
  animation={{
    x: '200px',
    y: '-20px',
    scale: 1.1,
    ease: 'ease-in-out',
  }}
  animationType="float"
  interval={0.06}
  duration={0.8}
  tag="p"
  className="animated-paragraph"
  includeWhiteSpaces
  threshold={0.1}
  rootMargin="20%"
>
  Content to animate
</AnimatedText>;
        <h1 className="text text-center py-3 fw-bold">КНЗ "Кмитівська спеціальна загальноосвітня
          школа-інтернат"<br/> Житомирської обласної ради</h1>
        <Slider />
      </Col>
    </Row>
  )
}
