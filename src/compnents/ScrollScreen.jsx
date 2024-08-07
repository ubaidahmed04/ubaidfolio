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
    <div className={`slider-container ${bgClass} py-5 px-4  `}>
      <span className="text-2xl font-bold text-teal-200 my-3">Projects</span>
      <Slider {...settings} className=" gap-3 ">
        <div className="   px-3">
          <ProjectCard/>
        </div>
        <div className="  px-3">
        <ProjectCard/>
        </div>
        <div className="  px-3">
        <ProjectCard/>
        </div>
        <div className="  px-3">
        <ProjectCard/>
        </div>
        <div className="  px-3">
        <ProjectCard/>
        </div>
      
      </Slider>
    </div>
  );
}

export default AutoPlay;
