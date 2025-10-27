import React from "react";
import Slider from "react-slick";
import list from "../data/list.json";
import Cards from "./Cards";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Freebook() {
  const filterData = list.filter((data) => data.category === "Free");

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-8 px-4 mt-10">
      <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>

      <Slider {...settings}>
        {filterData.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </Slider>
    </div>
  );
}

export default Freebook;
