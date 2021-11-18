import React, { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Nav from "../../Shared/Nav/Nav";
import Product from "../../Shared/Product/Product";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ExploreBanner from "./Banner/ExploreBanner";

const Explore = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    document.title = "Explore | eProperty";
    fetch("https://frozen-basin-84194.herokuapp.com/apartments")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="overflow-x-hidden">
      <ScrollToTop />

      <Nav />
      <ExploreBanner />

      <div style={{ padding: "5rem 0" }} className="my-container">
        <div className="text-teal-600 text-4xl text-center mb-10">
          Explore Our Apartments
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products?.map((pd) => (
            <Product key={pd._id} product={pd} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Explore;
