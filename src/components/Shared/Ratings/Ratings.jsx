import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const Ratings = ({ ratings }) => {
  const numRating = +ratings; // 3.82
  const ratingFloor = Math.floor(numRating); // 3
  const ratingRound = Math.round(numRating); // 4

  const halfStart = ratingRound - ratingFloor; // 1
  const star = 5 - ratingRound; // 1

  return (
    <div className="flex items-center justify-center space-x-1 text-yellow-400">
      {[...Array(ratingFloor)].map((_, i) => (
        <BsStarFill key={i} />
      ))}

      {[...Array(halfStart)].map((_, i) => (
        <BsStarHalf key={i} />
      ))}

      {[...Array(star)].map((_, i) => (
        <BsStar key={i} />
      ))}
    </div>
  );
};

export default Ratings;
