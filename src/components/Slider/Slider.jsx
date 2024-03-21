import React from "react";
import './Slider.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    mobile: {
        breakpoint: { max: 700, min: 0 },
        items: 2
    }
};

export default function Slider({ children }) {


    return (
        <>
            <div className="slider">
                <Carousel responsive={responsive}
                    swipeable={true} >
                </Carousel>

            </div>
        </>
    )
}