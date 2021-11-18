import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Spinner from "../../../Shared/Loader/Spinner";
import Product from "../../../Shared/Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("https://frozen-basin-84194.herokuapp.com/apartments?limit=6")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  if (products.length < 1) {
    return <Spinner />;
  }

  return (
    <div className="py-20">
      <div className="my-container">
        <h3 className="text-teal-600 text-4xl mb-10 text-center">
          Our Popular Apartment
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products?.map((pd) => (
            <Product key={pd._id} product={pd} />
          ))}
        </div>

        <div
          onClick={() => history.push("/explore")}
          className="flex items-center justify-center mt-10"
        >
          <button className="btn btn-primary inline-block">
            See All Apartments
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
