import React from 'react'
import { Carousel, Stack, Card } from 'react-bootstrap';
import slider from '../json/slider.json'

export default function Slider() {

  return (
    <Carousel variant="dark">
      {
        slider && slider.map( item => {
          return (
            <Carousel.Item>
              <Stack
                direction="horizontal"
                className="h-100 justify-content-center align-items-center"
                gap={3}
              >
                <Card>
                  <Card.Img
                    className="d-block mx-auto"
                    src={item.image}
                    alt="First slide"
                    width="400"
                    height="370"
                  />
                </Card>
                <Card>
                  <Card.Img
                    className="d-block mx-auto"
                    src={item.image2}
                    alt="First slide"
                    width="400"
                    height="370"
                  />
                </Card>
                <Card>
                  <Card.Img
                    className="d-block mx-auto"
                    src={item.image3}
                    alt="First slide"
                    width="400"
                    height="370"
                  />
                </Card>
              </Stack>
            </Carousel.Item> )
        } )
      }
    </Carousel>
  );
}