import React, { useEffect } from "react";
import { useHistory } from "react-router";
import Footer from "../../Shared/Footer/Footer";
import Nav from "../../Shared/Nav/Nav";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import Products from "./Products/Products";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  const history = useHistory();
  useEffect(() => {
    document.title = "Home | bd car house";
  }, []);

  return (
    <div className="overflow-x-hidden">
      <ScrollToTop />
      <Nav />
      <Banner />
      <Categories />
      <About>
        <div className="flex items-center justify-center">
          <button
            onClick={() => history.push("/about")}
            className="btn btn-primary"
          >
            About Us
          </button>
        </div>
      </About>

      <Products />

      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
