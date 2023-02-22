import React from 'react';
import {Container, Row, Col, Button, Card, Carousel, Stack} from 'react-bootstrap'

import TitleBlock from './TitleBlock';

export default function Activities() {
   return (
      <Container className="mb-3">
         <Row>
            <Col>
               <TitleBlock className="activities" link="activities" title="Заходи" />
            </Col>
         </Row>
         <Row>
            <Col md="10" className="d-block text-center mx-auto mb-4 lead">
               <div>У школі часто проводять заходи, які урізноманітнюють навчальне та реабілітаційне
                  життя вихованців та спонукають їх до творчої активності</div>
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
                     <Card><Card.Img variant="top" src="image/activities/img_1.jpg" />
                        <Card.Body>
                           <Card.Title className="mb-4 text-center">Новорічне свято 2023</Card.Title>
                           <Button className="d-block mx-auto" variant="primary">Дивитись</Button>
                        </Card.Body></Card>
                     <Card><Card.Img variant="top" src="image/activities/img_2.jpg" />
                        <Card.Body>
                           <Card.Title className="mb-4 text-center">Екскурсія в Добропарк</Card.Title>
                           <Button className="d-block mx-auto" variant="primary">Дивитись</Button>
                        </Card.Body></Card>
                     <Card><Card.Img variant="top" src="image/activities/img_3.jpg" />
                        <Card.Body>
                           <Card.Title className="mb-4 text-center">Ой,Андрію, даруй нам надію!</Card.Title>
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
                     <Card><Card.Img variant="top" src="image/activities/img_1.jpg" />
                        <Card.Body>
                           <Card.Title className="mb-4 text-center">Новорічне свято 2023</Card.Title>
                           <Button className="d-block mx-auto" variant="primary">Дивитись</Button>
                        </Card.Body></Card>
                     <Card><Card.Img variant="top" src="image/activities/img_2.jpg" />
                        <Card.Body>
                           <Card.Title className="mb-4 text-center">Екскурсія в Добропарк</Card.Title>
                           <Button className="d-block mx-auto" variant="primary">Дивитись</Button>
                        </Card.Body></Card>
                     <Card><Card.Img variant="top" src="image/activities/img_3.jpg" />
                        <Card.Body>
                           <Card.Title className="mb-4 text-center">Ой,Андрію, даруй нам надію!</Card.Title>
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
                     <Card><Card.Img variant="top" src="image/activities/img_1.jpg" />
                        <Card.Body>
                           <Card.Title className="mb-4 text-center">Новорічне свято 2023</Card.Title>
                           <Button className="d-block mx-auto" variant="primary">Дивитись</Button>
                        </Card.Body></Card>
                     <Card><Card.Img variant="top" src="image/activities/img_2.jpg" />
                        <Card.Body>
                           <Card.Title className="mb-4 text-center">Екскурсія в Добропарк</Card.Title>
                           <Button className="d-block mx-auto" variant="primary">Дивитись</Button>
                        </Card.Body></Card>
                     <Card><Card.Img variant="top" src="image/activities/img_3.jpg" />
                        <Card.Body>
                           <Card.Title className="mb-4 text-center">Ой,Андрію, даруй нам надію!</Card.Title>
                           <Button className="d-block mx-auto" variant="primary">Дивитись</Button>
                        </Card.Body></Card>
                  </Stack>
               </Carousel.Item>
               {/* <Carousel.Item style={{ marginBottom: 55 }}>
                  <Stack
                     direction="horizontal"
                     className="h-100 justify-content-center align-items-center"
                     gap={3}
                  >
                     <Card><Card.Img variant="top" src="activities/img_3.jpg" />
                        <Card.Body>
                           <Card.Title className="mb-4">Новорічне свято 2023</Card.Title>
                           <Button className="d-block mx-auto" variant="primary">Дивитись</Button>
                        </Card.Body></Card>
                     <Card><Card.Img variant="top" src="activities/img_2.jpg" />
                        <Card.Body>
                           <Card.Title className="mb-4">Новорічне свято 2023</Card.Title>
                           <Button className="d-block mx-auto" variant="primary">Дивитись</Button>
                        </Card.Body></Card>
                     <Card><Card.Img variant="top" src="activities/img_1.jpg" />
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
                     <Card><Card.Img variant="top" src="activities/img_1.jpg" />
                        <Card.Body>
                           <Card.Title className="mb-4">Новорічне свято 2023</Card.Title>
                           <Button className="d-block mx-auto" variant="primary">Дивитись</Button>
                        </Card.Body></Card>
                     <Card><Card.Img variant="top" src="activities/img_2.jpg" />
                        <Card.Body>
                           <Card.Title className="mb-4">Новорічне свято 2023</Card.Title>
                           <Button className="d-block mx-auto" variant="primary">Дивитись</Button>
                        </Card.Body></Card>
                     <Card><Card.Img variant="top" src="activities/img_3.jpg" />
                        <Card.Body>
                           <Card.Title className="mb-4">Новорічне свято 2023</Card.Title>
                           <Button className="d-block mx-auto" variant="primary">Дивитись</Button>
                        </Card.Body></Card>
                  </Stack>
               </Carousel.Item> */}

            </Carousel>
         </Row>
      </Container>
   )
}
