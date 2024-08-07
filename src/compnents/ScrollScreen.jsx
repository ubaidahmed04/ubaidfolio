import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProjectCard } from "./ProjectCard";
import './Styles.css'
function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    
  };
  const bgClass = `bg-[var(--theme-color)]`;

  return (
    <div className={`slider-container ${bgClass} p-5 px-4 gap-3`}>
      <Slider {...settings} className="">
        <div className=" ml-3">
          <ProjectCard/>
        </div>
        <div className="  ml-3">
        <ProjectCard/>
        </div>
        <div className="  ml-8">
        <ProjectCard/>
        </div>
        <div className="  ml-8">
        <ProjectCard/>
        </div>
        <div className="  ml-8">
        <ProjectCard/>
        </div>
      
      </Slider>
    </div>
  );
}

export default AutoPlay;
