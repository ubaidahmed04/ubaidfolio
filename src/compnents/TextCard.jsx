import React, { useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function TextCard() {
  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(600);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="p-9 rounded-lg flex justify-center items-center">
      <div
        style={{ width: width + "px" }}
        className={`transition-all ${display ? "block" : "hidden"}`}
      >
        <Slider {...settings}>
          <div className="p-4 flex flex-col  bg-[#373737] rounded-lg h-[180px] shadow-sm">
            <span className="text-md font-sans text-teal-200  ">ReactJS</span> <br />
            <span className="text-teal-200">Lorem ipsum, dolor Lorem ipsum, dolor Lorem ipsum, dolor.</span>

          </div>
          <div className="p-4 flex flex-col bg-[#373737] border-cyan-900 h-[180px]  rounded-lg shadow-sm">
            <span className="text-md font-sans text-teal-200  ">ReactJS</span> <br />
            <span className="text-teal-200">Lorem ipsum, dolor Lorem ipsum, dolor Lorem ipsum, dolor.</span>
          </div>
          <div className="p-4 flex flex-col bg-[#373737] border-cyan-900 h-[180px]  rounded-lg shadow-sm">
            <span className="text-md font-sans text-teal-200  ">ReactJS</span> <br />
            <span className="text-teal-200">Lorem ipsum, dolor Lorem ipsum, dolor Lorem ipsum, dolor.</span>
          </div>
          <div className="p-4 flex flex-col bg-[#373737] border-cyan-900 h-[180px]  rounded-lg shadow-sm">
            <span className="text-md font-sans text-teal-200  ">ReactJS</span> <br />
            <span className="text-teal-200">Lorem ipsum, dolor Lorem ipsum, dolor Lorem ipsum, dolor.</span>
          </div>
          <div className="p-4 flex flex-col bg-[#373737] border-cyan-900 h-[180px]  rounded-lg shadow-sm">
            <span className="text-md font-sans text-teal-200  ">ReactJS</span> <br />
            <span className="text-teal-200">Lorem ipsum, dolor Lorem ipsum, dolor Lorem ipsum, dolor.</span>
          </div>
          <div className="p-4 flex flex-col bg-[#373737] border-cyan-900 h-[180px]  rounded-lg shadow-sm">
            <span className="text-md font-sans text-teal-200  ">ReactJS</span> <br />
            <span className="text-teal-200">Lorem ipsum, dolor Lorem ipsum, dolor Lorem ipsum, dolor.</span>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default TextCard;
