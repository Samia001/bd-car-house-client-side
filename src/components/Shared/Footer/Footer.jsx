import React from "react";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsPaypal,
  BsTwitter,
} from "react-icons/bs";
import {
  FaCcDiscover,
  FaCcJcb,
  FaCcMastercard,
  FaCcVisa,
  FaEnvelope,
} from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-10 w-full">
      <div className="my-container">
        <div className="grid space-y-4 space-x-4 grid-cols-1 md:grid-cols-3">
          <div
            data-aos="flip-right"
            data-aos-duration="1500"
            className="space-y-2"
          >
            <h2 className="text-white text-3xl font-bold font-grandHotel tracking-widest">
              <span className="text-teal-600">e </span>Property
            </h2>
            <p>
            bd car house is Bangladesh's leading property site — the best place to search, whether you are investing, buying your own home, or looking for a place to rent. At PropertyGuru, you can find thousands of properties for sale and rent with detailed information about each property, including maps and photos.
            </p>
            <div className="flex space-x-4">
              <BsFacebook className="transition text-xl cursor-pointer hover:text-orange" />
              <BsGithub className="transition text-xl cursor-pointer hover:text-orange" />
              <BsTwitter className="transition text-xl cursor-pointer hover:text-orange" />
              <BsLinkedin className="transition text-xl cursor-pointer hover:text-orange" />
            </div>
          </div>

          <div
            data-aos="flip-up"
            data-aos-duration="1500"
            className="flex md:justify-center"
          >
            <div className="">
              <h3 className="text-3xl mb-2">Quick Links</h3>
              <div className="flex flex-col list-none">
                <li className="flex items-center space-x-1 group">
                  <MdNavigateNext />
                  <Link className="transition group-hover:text-orange" to="/">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="flex items-center space-x-1 group">
                  <MdNavigateNext />
                  <Link className="transition group-hover:text-orange" to="/">
                    About Us
                  </Link>
                </li>
                <li className="flex items-center space-x-1 group">
                  <MdNavigateNext />
                  <Link className="transition group-hover:text-orange" to="/">
                    Latest News
                  </Link>
                </li>
                <li className="flex items-center space-x-1 group">
                  <MdNavigateNext />
                  <Link className="transition group-hover:text-orange" to="/">
                    Subscribe
                  </Link>
                </li>
                <li className="flex items-center space-x-1 group">
                  <MdNavigateNext />
                  <Link className="transition group-hover:text-orange" to="/">
                    Our Policies
                  </Link>
                </li>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-duration="1500" className="">
            <h3 className="text-3xl mb-2">Newsletter</h3>
            <p>
              Join us on a Villa Park Stadium Tour and Step behind the scenes.
            </p>

            <div className="flex space-x-1 items-center rounded-lg p-2 border-2 border-lightBlue mt-4">
              <FaEnvelope className="text-lg text-lightBlue" />
              <input
                className="bg-transparent w-full focus:outline-none border-none focus:ring-0 px-2"
                type="text"
                placeholder="Your Email:"
              />
            </div>
            <button className="bg-teal-600 text-gray-700 font-bold outline-none border-2 border-darkBlue rounded-lg px-6 py-2 mt-2 w-full shadow-lg hover:text-white hover:bg-teal-700 hover:border-teal-700">
              Subscribe
            </button>
          </div>
        </div>

        <hr className="my-6" />

        <div
          data-aos="flip-down"
          data-aos-duration="1500"
          className="flex items-center justify-between"
        >
          <p className="text-gray-200 text-sm">
            &copy;2021-2022{" "}
            <span className="text-white text-sm font-bold">
              <span className="text-teal-600">e </span>Property
            </span>
            <br />
            
          </p>

          <div className="flex flex-col items-center text-xl text-darkBlue">
            <h2 className="text-lg mb-1">We Accept</h2>
            <div className="flex items-center space-x-4">
              <FaCcVisa />
              <BsPaypal />
              <FaCcMastercard />
              <FaCcJcb />
              <FaCcDiscover />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
