import React from "react";
import Slider from "react-slick";
const Carousal = ({ data }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="carousal_container">
      <Slider {...settings}>
        {data?.map((item, index) => {
          return (
            <div>
              <h1>{item?.text}</h1>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousal;
