import Carousel from 'react-bootstrap/Carousel';

export default function Slider() {
  return (
   <Carousel variant="light">
      <Carousel.Item>
        <img
          className="d-block w-60 h-100 mx-auto"
          src="slider/slide_1.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-60 h-100 mx-auto"
          src="slider/slide_2.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-60 h-100 mx-auto"
          src="slider/slide_3.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
