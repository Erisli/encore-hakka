import React from "react";
import { useWindowSize } from "../../Hooks/useWindowSize";
import { useCarouselSize } from "../../Hooks/useCarouselSize";
import "./Slider.css";
import Carousel from 'react-bootstrap/Carousel';

import { isMobile } from "react-device-detect";

const images = [
    { src: "../../images/mainImage.jpg", alt: "Main" },
    { src: "../../images/SChk.jpg", alt: "Special Chicken" },
    { src: "../../images/GChk.jpg", alt: "Ginger Chicken" },
    { src: "../../images/CChk.jpg", alt: "Chili Chicken" },
];

function Slider() {
    return (

        <Carousel id = "Slider" interval = "2000" variant = "dark">
            <Carousel.Item>
                <img 
                    src={require('../../images/mainImage.jpg')}
                    alt="Main"
                />
            </Carousel.Item>
            <Carousel.Item >
                <img
                    alt="Special chicken" src={require('../../images/SChk.jpg')}
                />
                <Carousel.Caption style={{color: "#ffccff"}}>
                    <h2>Special Chicken Fried Rice</h2>
                    <p>Our best selling dish-Guyanese style chicken fried rice</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    alt="Ginger Chicken" src={require('../../images/GChk.jpg')}
                />

                <Carousel.Caption style={{color: "#ffccff"}}>
                    <h2>Sesame Chicken</h2>
                    <p>Light sauced sweet and tangy chicken cooked with white meat</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img 
                    alt="Chili Chicken" src={require('../../images/CChk.jpg')}
                />
                <Carousel.Caption style={{color: "#ffccff"}}>
                    <h2>Chili Chicken (dry)</h2>
                    <p>Popular Hakka style spicy chicken, can be either gravy or dry </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
    
}

export default Slider;
