import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import userImg from "../../../../../images/review_user.png";

const SingleAdmin = ({ user, makeAdmin }) => {
  return (
    <tbody>
      <tr className="w-full font-light text-gray-600 whitespace-no-wrap border">
        <td className="px-4 py-4">
          <img className="h-10 w-10 rounded-full" src={userImg} alt="" />
        </td>
        <td className="px-4 py-4">{user.name}</td>
        <td className="px-4 py-4">{user.email}</td>
        <td className="px-4 py-4">
          <span
            className={`text-sm ${
              user.role ? "bg-green-500" : "bg-yellow-500"
            } text-white rounded-full px-2 py-1`}
          >
            {user.role ? user.role : "basic"}
          </span>
        </td>
        <td className="text-center mx-auto py-4">
          <div
            onClick={() => makeAdmin(user)}
            className="flex items-center justify-center space-x-4 text-sm"
          >
            <span className="flex items-center justify-between space-x-2 text-green-500 cursor-pointer">
              <BsPencilSquare size="1.2em" /> <span>Make Admin</span>
            </span>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default SingleAdmin;
