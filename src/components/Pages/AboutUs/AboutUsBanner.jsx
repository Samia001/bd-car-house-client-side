import React from "react";
import BannerBg from "../../../images/newslatter-bg.jpg";

const AboutUsBanner = () => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.25),rgba(0,0,0,.25)),url(${BannerBg}) center center/cover fixed no-repeat`,
      }}
      className="z-0"
    >
      <div className="my-container">
        <div
          style={{ minHeight: "60vh" }}
          className="flex items-center justify-center"
        >
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-white text-left flex items-center justify-center flex-col"
          >
            <p className="text-center space-y-2 text-5xl uppercase tracking-widest ">
              <span className="inline-block"> Welcome to our Service</span>
              <br />
              <span className="inline-block">Next to your door</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
