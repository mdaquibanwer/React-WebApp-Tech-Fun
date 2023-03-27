import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img3 from "../images/3.jpg"
import img4 from "../images/4.jpg"

const Services = () => {
  return (
    <div>
        <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} showThumbs={false} interval={2000}>
            <div>
                <img src={img3} alt="img item" />
                <p className='legend'>Full Stack Service</p>
            </div>
            <div>
                <img src={img4} alt="img item" />
                <p className='legend'>Web Design Service</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services;