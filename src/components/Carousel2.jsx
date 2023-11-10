import React from 'react'
import { Carousel } from "@material-tailwind/react";
import slide1 from '../img/slide1.jpg'
import slide2 from '../img/slide2.jpg'
import slide3 from '../img/slide3.jpg'
import slide4 from '../img/slide4.jpg'



function Carousel2() {
    return (
        <Carousel prevArrow={false} nextArrow={false}  loop autoplay autoplayDelay={5000} className="h-[400px] xl:h-[600px]">
            <img
                src={slide1}
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src={slide2}
                alt="image 2"
                className="h-full w-full object-cover"
            />
            <img
                src={slide3}
                alt="image 3"
                className="h-full w-full object-cover"
            />
        </Carousel>
    );
}

export default Carousel2