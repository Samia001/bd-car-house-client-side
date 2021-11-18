import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Review from "./Review";

const Reviews = () => {
  const [allReview, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://frozen-basin-84194.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    autoplay: true,
    pauseOnHover: true,
    speed: 1000,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 600,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        centerMode: false,
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="bg-gray-50">
      <div className="my-container">
        <h1 className="text-teal-700 text-4xl text-center mb-10">
          Client Reviews
        </h1>

        <Slider {...settings}>
          {allReview?.map((review) => (
            <Review key={review._id} review={review} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
