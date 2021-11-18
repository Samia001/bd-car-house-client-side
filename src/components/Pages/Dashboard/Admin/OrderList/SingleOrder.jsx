import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const SingleOrder = ({ order, deleteOrder, approveProduct }) => {
  return (
    <tbody>
      <tr className="w-full font-light text-gray-600 whitespace-no-wrap border">
        <td className="px-4 py-4">{order.order.name}</td>
        <td className="px-4 py-4">{order.product.name}</td>
        <td className="px-4 py-4">{order.email}</td>
        <td className="px-4 py-4">
          <span
            className={`text-sm ${
              order.order.status === "pending" ? "bg-red-500" : "bg-green-500"
            } text-white rounded-full px-2 py-1`}
          >
            {order.order.status}
          </span>
        </td>
        <td className="text-center py-4">
          <div className="flex items-center space-x-4 text-2xl">
            <span
              onClick={() => approveProduct(order)}
              className="fill-current text-green-500 material-icons cursor-pointer"
            >
              <TiTick />
            </span>

            <span
              onClick={() => deleteOrder(order._id)}
              className="fill-current text-red-500 material-icons cursor-pointer"
            >
              <MdDeleteOutline />
            </span>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default SingleOrder;
