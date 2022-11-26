import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
    const slider = (
        <AwesomeSlider animation="cubeAnimation">
            <div data-src="../images/carousel/C1.png" />
            <div data-src="../images/carousel/C2.png" />
            <div data-src="../images/carousel/C1.png" />
        </AwesomeSlider>
    )
export default function SliderGallery() {    

  return (

<div>
    {slider}
</div>


  )
}


