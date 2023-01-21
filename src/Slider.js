import Carousel from 'react-bootstrap/Carousel';

export default function Slider() {
  return (
   <Carousel variant="light">
      <Carousel.Item>
        <img
          className="d-block w-60 h-55 mx-auto"
          src="slider/slide_1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-60 h-55 mx-auto"
          src="slider/slide_2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-60 h-55 mx-auto"
          src="slider/slide_3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
