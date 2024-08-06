import React, { Component } from "react";
import Slider from "react-slick";
import { Cardlink } from "./Card";

function LazyLoad() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container flex flex-row">
      <Slider {...settings}>
        <div>
          <Cardlink/>
        </div>
        <div>
          <Cardlink/>
        </div>
        <div>
          <Cardlink/>
        </div>
        <div>
          <Cardlink/>
        </div>
      </Slider>
    </div>
  );
}

export default LazyLoad;
