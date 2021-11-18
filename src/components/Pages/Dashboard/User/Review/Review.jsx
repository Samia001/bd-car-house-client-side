import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import { List, ListItem, Range } from "tailwind-mobile/react";
import useAuth from "../../../../../hooks/useAuth";

const Review = () => {
  const { user } = useAuth();
  const [rating, setRating] = useState(4.7);
  const [review, setReview] = useState({
    name: user?.displayName || user?.email?.split("@")[0],
    rating: rating + "",
    email: user?.email,
    message: "",
    img: "",
  });

  useEffect(() => {
    document.title = "Make Review | eProperty";
  }, []);

  const history = useHistory();

  const onChangeHandler = (e) => {
    const filed = e.target.name;
    const value = e.target.value;
    const newReview = { ...review };
    newReview[filed] = value;
    newReview.img =
      user?.photoURL || "https://i.ibb.co/NWjQBKP/review-user.webp";
    newReview.rating = rating.toString();
    setReview(newReview);
  };

  const formSubmit = (e) => {
    e.preventDefault();

    fetch("https://frozen-reaches-53021.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (1) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thanks for review us 💌 ",
            showConfirmButton: false,
            timer: 1500,
          });
          history.push("/");
        }
      });
  };

  return (
    <div>
      <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
        <form
          data-aos="fade-up"
          data-aos-duration="1500"
          onSubmit={formSubmit}
          className="mb-0 space-y-6"
        >
          <div className="w-full">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <div className="mt-1">
              <input
                value={user?.displayName || user?.email?.split("@")[0]}
                readOnly
                onBlur={onChangeHandler}
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="focus:ring-teal-600 focus:border-teal-600 rounded-lg w-full"
              />
            </div>
          </div>

          <div className="w-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <div className="mt-1">
              <input
                value={user?.email}
                readOnly
                onBlur={onChangeHandler}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="focus:ring-teal-600 focus:border-teal-600 rounded-lg w-full"
              />
            </div>
          </div>

          <div className="w-full">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Feedback
            </label>
            <div className="mt-1">
              <textarea
                onBlur={onChangeHandler}
                id="message"
                name="message"
                autoComplete="message"
                required
                className="focus:ring-teal-600 focus:border-teal-600 rounded-lg w-full"
              />
            </div>
          </div>

          <div className="w-full items-center grid grid-cols-6">
            <h4 className="col-span-6 md:col-span-2 text-xl font-semibold">
              Rating: {rating}
            </h4>
            <List
              className="col-span-6 md:col-span-4 text-xl font-semibold md:px-10"
              style={{ margin: "0 10px" }}
            >
              <ListItem
                innerClassName="flex space-x-4 "
                innerChildren={
                  <>
                    <span>0</span>
                    <Range
                      onBlur={onChangeHandler}
                      name="rating"
                      value={rating}
                      step={0.1}
                      min={0}
                      max={5}
                      onChange={(e) => setRating(e.target.value)}
                    />
                    <span>5</span>
                  </>
                }
              />
            </List>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Send Us
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Review;
