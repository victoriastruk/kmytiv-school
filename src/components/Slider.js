import React from 'react'
import { Carousel, Stack, Card } from 'react-bootstrap';
import data from '../json/data.json'

export default function Slider() {
  console.log( data.slider )

  return (
    <Carousel variant="dark">
      {
        data.slider.map( item => {
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
                    width="450"
                    height="370"
                  />
                </Card>
                <Card>
                  <Card.Img
                    className="d-block mx-auto"
                    src={item.image2}
                    alt="First slide"
                    width="450"
                    height="370"
                  />
                </Card>
                <Card>
                  <Card.Img
                    className="d-block mx-auto"
                    src={item.image3}
                    alt="First slide"
                    width="450"
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
