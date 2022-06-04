import React from "react";
import { useWindowSize } from "../../Hooks/useWindowSize";
import { useCarouselSize } from "../../Hooks/useCarouselSize";
import "./Slider.css";
import Carousel from 'react-bootstrap/Carousel';

import { isMobile } from "react-device-detect";

const aspectRatio = 1200 / 800;

const images = [
    { src: "../../images/mainImage.jpg", alt: "Main" },
    { src: "../../images/SChk.jpg", alt: "Special Chicken" },
    { src: "../../images/GChk.jpg", alt: "Ginger Chicken" },
    { src: "../../images/CChk.jpg", alt: "Chili Chicken" },
];

function Slider() {
    return (

        <Carousel interval = "2000" variant = "light">
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
                    <h1>Special Chicken Fried Rice</h1>
                    <h4>desc</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    alt="Ginger Chicken" src={require('../../images/GChk.jpg')}
                />

                <Carousel.Caption style={{color: "#ffccff"}}>
                    <h1>Ginger Chicken</h1>
                    <h4>desc</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img 
                    alt="Chili Chicken" src={require('../../images/CChk.jpg')}
                />
                <Carousel.Caption style={{color: "#ffccff"}}>
                    <h1>Chili Chicken (dry)</h1>
                    <h4>desc</h4>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
    
}

export default Slider;
