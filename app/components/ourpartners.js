import { Container } from "react-bootstrap";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ourpartners () {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };
    return (
        <Container>
            <div className="partnersection">
                <h2>Our Partners</h2>
                <Slider {...settings}>
                    <div>
                        <Image src={'/../img/AHT.jpeg'} width={200} height={100} alt="AHT Logo"></Image>
                    </div>
                    <div>
                        <Image src={'/../img/azim-premji.jpeg'} width={140} height={100} alt="Azim Premji Logo"></Image>
                    </div>
                    <div>
                        <Image src={'/../img/edelgive.jpeg'} width={140} height={100} alt="Edelgive Logo"></Image>
                    </div>
                    <div>
                        <Image src={'/../img/ford.jpeg'} width={150} height={100} alt="Ford Logo"></Image>
                    </div>
                    <div>
                        <Image src={'/../img/fwwb-logo.jpg'} width={170} height={100} alt="FWWB Logo"></Image>
                    </div>
                    <div>
                        <Image src={'/../img/godrej.jpg'} width={120} height={100} alt="Godrej Logo"></Image>
                    </div>
                    <div>
                        <Image src={'/../img/htparekh.png'} width={140} height={100} alt="HT Parekh Logo"></Image>
                    </div>
                    <div>
                        <Image src={'/../img/idfc-logo.jpg'} width={140} height={100} alt="IDFC Logo"></Image>
                    </div>
                    <div>
                        <Image src={'/../img/wipro.jpeg'} width={160} height={100} alt="Wipro Logo"></Image>
                    </div>
                </Slider>
            </div>
        </Container>
    );
}