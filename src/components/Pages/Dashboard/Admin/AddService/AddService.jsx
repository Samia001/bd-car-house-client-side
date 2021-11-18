import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import { List, ListItem, Range } from "tailwind-mobile/react";

const AddService = () => {
  const history = useHistory();
  const [price, setPrice] = useState(150);
  const [newProduct, setNewProduct] = useState({
    img: "https://i.ibb.co/zHVPbpp/19-300x300.jpg",
    img2: "https://i.ibb.co/5FYfYXr/19-19-300x300.jpg",
  });

  useEffect(() => {
    document.title = "Add Service | bd car house";
  }, []);

  const handleOnBlur = (e) => {
    const product = { ...newProduct };
    product[e.target.name] = e.target.value;
    product.ratings = (Math.random() * 5).toFixed(2);
    setNewProduct(product);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Add new item!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Successfully added new service",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });

        history.push("/dashboard");

        fetch("https://frozen-reaches-53021.herokuapp.com/cars", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newProduct),
        });
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
          action="#"
          method="POST"
        >
          <div className="w-full">
            <label
              htmlFor="productName"
              className="block text-sm font-medium text-gray-700"
            >
              Product Name
            </label>
            <div className="mt-1">
              <input
                onBlur={handleOnBlur}
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
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Product Description
            </label>
            <div className="mt-1">
              <textarea
                onBlur={handleOnBlur}
                id="descriptions"
                name="descriptions"
                autoComplete="descriptions"
                required
                className="focus:ring-teal-600 focus:border-teal-600 rounded-lg w-full"
              />
            </div>
          </div>

          <div className="w-full items-center grid grid-cols-6">
            <h4 className="col-span-6 md:col-span-2 text-xl font-semibold">
              Price: ${price}
            </h4>
            <List
              className="col-span-6 md:col-span-4 text-xl font-semibold "
              style={{ margin: "0 10px" }}
            >
              <ListItem
                innerClassName="flex space-x-4 "
                innerChildren={
                  <>
                    <span>$0</span>
                    <Range
                      onBlur={handleOnBlur}
                      name="price"
                      value={price}
                      step={1}
                      min={0}
                      max={500}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    <span>$500</span>
                  </>
                }
              />
            </List>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center space-x-4">
            <div className="w-full">
              <label
                htmlFor="img"
                className="block text-sm font-medium text-gray-700"
              >
                Image URL-1
              </label>
              <div className="mt-1">
                <input
                  onBlur={handleOnBlur}
                 
                  type="text"
                  id="img"
                  name="img"
                  autoComplete="img"
                  required
                  className="focus:ring-teal-600 focus:border-teal-600 rounded-lg w-full"
                />
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="img2"
                className="block text-sm font-medium text-gray-700"
              >
                Image URL-2
              </label>
              <div className="mt-1">
                <input
                  onBlur={handleOnBlur}
                 
                  type="text"
                  id="img2"
                  name="img2"
                  autoComplete="img2"
                  required
                  className="focus:ring-teal-600 focus:border-teal-600 rounded-lg w-full"
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
