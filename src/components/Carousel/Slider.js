import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselExample() {
      
return (
<>
<Carousel variant="light" fade={.5} >

  <Carousel.Item>
    <img
    className="d-block w-100"
    src="../images/carousel/C1.png"
    alt="First slide"
    
    />
 
  </Carousel.Item>

  <Carousel.Item>
  <img
  className="d-block w-100"
  src="../images/carousel/C2.png"
  alt="First slide"
  height={400}
  />
  </Carousel.Item>



      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../images/carousel/C3.png"
          alt="First slide"
          height={400}
        />
      </Carousel.Item>



</Carousel>
</>
)
}

export default CarouselExample
