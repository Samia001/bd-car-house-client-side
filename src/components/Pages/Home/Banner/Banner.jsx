import React from "react";
import { BiArrowFromLeft } from "react-icons/bi";
import { useHistory } from "react-router";
import BannerBG from "../../../../images/main-banner-bg.jpg";
<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
</style>

const Banner = () => {
  const history = useHistory();
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.25),rgba(0,0,0,.25)),url(${BannerBG}) center center/cover fixed no-repeat`,
      }}
      className=""
    >
      <div className="my-container">
        <div className="min-h-screen flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-white text-left"
            >
              <p className="mb-4 text-lg uppercase tracking-wider">
              Explore luxury In Cars Bangladesh

              </p>
              <h2 className="font-grandHotel text-9xl">Luxury cars</h2>

              <button
                onClick={() => history.push("/explore")}
                className="flex items-center justify-center space-x-2 btn btn-primary mt-8 bg-green-700 hover:bg-green-500"
              >
                <span>Explore</span>
                <BiArrowFromLeft size="1.5em" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
