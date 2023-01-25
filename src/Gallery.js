import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TitleBlock from './TitleBlock';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Stack from 'react-bootstrap/Stack';

export default function Gallery() {
   return (
      <Container>
         <Row>
            <Col>
               <TitleBlock link="gallery" title="Фотогалерея" />
            </Col>
         </Row>
         <Row>
            <Carousel variant="dark">
               <Carousel.Item style={{ marginBottom: 55 }}>
                  <Stack
                     direction="horizontal"
                     className="h-100 justify-content-center align-items-center"
                     gap={3}
                  >
                     <Card><Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                           <Card.Title className="mb-4">Новорічне свято 2023</Card.Title>
                           <Button className="d-block mx-auto" variant="primary">Дивитись</Button>
                        </Card.Body></Card>
                     <Card><Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                           <Card.Title className="mb-4">Новорічне свято 2023</Card.Title>
                           <Button className="d-block mx-auto" variant="primary">Дивитись</Button>
                        </Card.Body></Card>
                     <Card><Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                           <Card.Title className="mb-4">Новорічне свято 2023</Card.Title>
                           <Button className="d-block mx-auto" variant="primary">Дивитись</Button>
                        </Card.Body></Card>
                  </Stack>
               </Carousel.Item>
               <Carousel.Item style={{ marginBottom: 55 }}>
                  <Stack
                     direction="horizontal"
                     className="h-100 justify-content-center align-items-center"
                     gap={3}
                  >
                     <Card><Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                           <Card.Title className="mb-4">Новорічне свято 2023</Card.Title>
                           <Button className="d-block mx-auto" variant="primary">Дивитись</Button>
                        </Card.Body></Card>
                     <Card><Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                           <Card.Title className="mb-4">Новорічне свято 2023</Card.Title>
                           <Button className="d-block mx-auto" variant="primary">Дивитись</Button>
                        </Card.Body></Card>
                     <Card><Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                           <Card.Title className="mb-4">Новорічне свято 2023</Card.Title>
                           <Button className="d-block mx-auto" variant="primary">Дивитись</Button>
                        </Card.Body></Card>
                  </Stack>
               </Carousel.Item>
               <Carousel.Item style={{ marginBottom: 55 }}>
                  <Stack
                     direction="horizontal"
                     className="h-100 justify-content-center align-items-center"
                     gap={3}
                  >
                     <Card><Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                           <Card.Title className="mb-4">Новорічне свято 2023</Card.Title>
                           <Button className="d-block mx-auto" variant="primary">Дивитись</Button>
                        </Card.Body></Card>
                     <Card><Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                           <Card.Title className="mb-4">Новорічне свято 2023</Card.Title>
                           <Button className="d-block mx-auto" variant="primary">Дивитись</Button>
                        </Card.Body></Card>
                     <Card><Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                           <Card.Title className="mb-4">Новорічне свято 2023</Card.Title>
                           <Button className="d-block mx-auto" variant="primary">Дивитись</Button>
                        </Card.Body></Card>
                  </Stack>
               </Carousel.Item>
            </Carousel>
         </Row>
      </Container>
   )
}
