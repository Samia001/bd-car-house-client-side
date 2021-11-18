import React, { useEffect } from "react";
import { useHistory } from "react-router";
import Footer from "../../Shared/Footer/Footer";
import Nav from "../../Shared/Nav/Nav";
import About from "../Home/About/About";
import Reviews from "../Home/Reviews/Reviews";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import AboutUsBanner from "./AboutUsBanner";

const AboutUs = () => {
  const history = useHistory();
  const goTOExplore = () => {
    history.push("/explore");
  };

  useEffect(() => {
    document.title = "About US | eProperty";
  }, []);

  return (
    <div className="overflow-x-hidden">
      <ScrollToTop />

      <Nav />

      <AboutUsBanner />

      <About>
        <div className="flex items-center justify-center">
          <button onClick={goTOExplore} className="btn btn-primary">
            Explore
          </button>
        </div>
      </About>

      <Reviews />
      <Footer />
    </div>
  );
};

export default AboutUs;
