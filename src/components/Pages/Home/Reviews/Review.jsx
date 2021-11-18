import React from "react";
import Ratings from "../../../Shared/Ratings/Ratings";

const Review = ({ review }) => {
  const { name, img, rating, message } = review;
  return (
    <div className="flex flex-col items-center justify-center mx-2">
      <img className="rounded-full h-20 w-20" src={img} alt="User" />
      <h2 className="text-xl text-teal-600 mt-4">{name}</h2>
      <p className="text-center text-gray-700">{message.slice(0, 60)}</p>
      <Ratings ratings={rating} />
    </div>
  );
};

export default Review;
