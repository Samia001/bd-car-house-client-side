import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../../../hooks/useAuth";
import Spinner from "../../../../Shared/Loader/Spinner";
import SingleOrder from "./SingleOrder";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const [isDelete, setIsDelete] = useState(null);

  const deleteOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Delete!",
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
        fetch(`https://frozen-reaches-53021.herokuapp.com/order/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              setIsDelete(!isDelete);
            } else {
              setIsDelete(false);
            }
          });
      }
    });
  };

  const approveProduct = (order) => {
    const updateOrder = { ...order.order };
    updateOrder.status = "shipped";

    if (orders.length !== 0) {
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Approve!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Successfully order status updated",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
          fetch(`https://frozen-reaches-53021.herokuapp.com/order?id=${order._id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updateOrder),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount) {
                setIsDelete(!isDelete);
              } else {
                setIsDelete(false);
              }
            });
        }
      });
    }
  };

  useEffect(() => {
    document.title = "Order List | bd car house";
  }, []);

  useEffect(() => {
    fetch(`https://frozen-reaches-53021.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email, isDelete]);

  if (orders.length === 0)
    return (
      <h1
        data-aos="fade-up"
        data-aos-duration="1500"
        className="text-red-500 text-center py-20 text-3xl"
      >
        No Order Found! <Spinner />
      </h1>
    );

  if (orders.length < 1) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg py-6">
        <div className="block overflow-x-auto mx-6">
          <table
            data-aos="fade-up"
            data-aos-duration="1500"
            className="w-full text-left rounded-lg"
          >
            <thead>
              <tr className="text-gray-700 border border-b-0">
                <th className="px-4 py-3 font-bold">Order By</th>
                <th className="px-4 py-3 font-bold">Service</th>
                <th className="px-4 py-3 font-bold">Email</th>
                <th className="px-4 py-3 font-bold">Status</th>
                <th className="px-4 py-3 font-bold">Action</th>
              </tr>
            </thead>

            {orders?.map((order) => (
              <SingleOrder
                key={order._id}
                order={order}
                deleteOrder={deleteOrder}
                approveProduct={approveProduct}
              />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
