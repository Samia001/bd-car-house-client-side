import React from "react";
import show from "../.../../../../../images/show.jpg";

const About = ({ children }) => {
  return (
    <div className="bg-gray-50">
      <div className="my-container">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div data-aos="fade-right" data-aos-duration="1500" className="p-10">
            <h3 className="text-5xl py-2 text-gray-800 font-grandHotel">
              What's bd car house
            </h3>
            <p className="text-gray-700">
            bd car house is Bangladesh's leading property site — the best place to search, whether you are investing, buying your own home, or looking for a place to rent. At PropertyGuru, you can find thousands of properties for sale and rent with detailed information about each property, including maps and photos.
            </p>
          </div>

          <div data-aos="fade-left" data-aos-duration="1500" className="p-10">
            <div className="w-full overflow-hidden rounded-lg">
              <img
                className="w-full h-full object-cover transform transition hover:scale-110"
                src={show}
                alt=""
              />
            </div>
          </div>
        </div>

        <div data-aos="flip-right" data-aos-duration="1500" className="">
          {children}
        </div>
      </div>
    </div>
  );
};

export default About;
