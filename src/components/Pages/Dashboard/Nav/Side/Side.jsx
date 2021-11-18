import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiOutlineUserAdd,
  AiOutlineWallet,
} from "react-icons/ai";
import { BiLogOut, BiMessageRoundedDots } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { FaClipboardList } from "react-icons/fa";
import { GrAdd, GrServices } from "react-icons/gr";
import { useHistory, useRouteMatch } from "react-router";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../../../hooks/useAuth";
import useFirebase from "../../../../../hooks/useFirebase";
import useWindowSize from "../../../../../hooks/useWindowSize";
import Content from "../../Content/Content";

const Side = () => {
  const windowSize = useWindowSize();
  const history = useHistory();
  const [menuSHow, setMenuShow] = useState(false);
  let { path, url } = useRouteMatch();
  const { user, admin } = useAuth();

  const { signOutUser } = useFirebase();

  const menuBar = menuSHow ? (
    <AiOutlineMenuUnfold
      onClick={() => setMenuShow(false)}
      size="2em"
      className="text-pink-700 cursor-pointer"
    />
  ) : (
    <AiOutlineMenuFold
      onClick={() => setMenuShow(true)}
      size="2em"
      className="text-green-700 cursor-pointer"
    />
  );

  return (
    <div>
      <div className="flex items-center justify-between px-10 h-14 bg-white shadow-sm">
        {windowSize.innerWidth < 768 ? (
          menuBar
        ) : (
          <h3 className="text-teal-700 text-3xl font-grandHotel tracking-wider font-bold">
            bd car house
          </h3>
        )}
        <div className="flex items-center p-2 space-x-4">
          <img
            src={user?.photoURL || "https://i.ibb.co/NWjQBKP/review-user.webp"}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="text-lg text-gray-800 font-bold">
              {user?.displayName?.split(" ")[0] || admin?.name}{" "}
              <span className="text-base font-normal italic text-teal-600">
                ({admin?.role || "user"})
              </span>
            </h2>
          </div>
        </div>
      </div>

      <div
        style={{
          transform:
            !menuSHow && windowSize.innerWidth < 768 && "translateX(-100%)",
        }}
        className="transition h-screen p-3 space-y-2 w-60 bg-white text-gray-600 absolute top-14 left-0 border border-r"
      >
        <div className="divide-y divide-gray-300">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            {!(admin?.role === "admin") && (
              <>
                <li>
                  <NavLink
                    onClick={() => setMenuShow(false)}
                    to={`${url}/my-order`}
                    className="flex items-center p-2 space-x-3 rounded-md hover:text-gray-800 hover:font-medium hover:bg-gray-100 transform hover:translate-x-1 transition"
                    activeClassName="text-gray-800 font-medium bg-gray-100 transform translate-x-1"
                  >
                    <CgShoppingCart />
                    <span>My Orders</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    onClick={() => setMenuShow(false)}
                    to={`${url}/payment`}
                    className="flex items-center p-2 space-x-3 rounded-md hover:text-gray-800 hover:font-medium hover:bg-gray-100 transform hover:translate-x-1 transition"
                    activeClassName="text-gray-800 font-medium bg-gray-100 transform translate-x-1"
                  >
                    <AiOutlineWallet />
                    <span>Payment</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    onClick={() => setMenuShow(false)}
                    to={`${url}/review`}
                    className="flex items-center p-2 space-x-3 rounded-md hover:text-gray-800 hover:font-medium hover:bg-gray-100 transform hover:translate-x-1 transition"
                    activeClassName="text-gray-800 font-medium bg-gray-100 transform translate-x-1"
                  >
                    <BiMessageRoundedDots />
                    <span>Review</span>
                  </NavLink>
                </li>
              </>
            )}

            {admin?.role === "admin" && (
              <>
                <li>
                  <NavLink
                    onClick={() => setMenuShow(false)}
                    to={`${url}/order-list`}
                    className="flex items-center p-2 space-x-3 rounded-md hover:text-gray-800 hover:font-medium hover:bg-gray-100 transform hover:translate-x-1 transition"
                    activeClassName="text-gray-800 font-medium bg-gray-100 transform translate-x-1"
                  >
                    <FaClipboardList />
                    <span>Order List</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => setMenuShow(false)}
                    to={`${url}/add-service`}
                    className="flex items-center p-2 space-x-3 rounded-md hover:text-gray-800 hover:font-medium hover:bg-gray-100 transform hover:translate-x-1 transition"
                    activeClassName="text-gray-800 font-medium bg-gray-100 transform translate-x-1"
                  >
                    <GrAdd />
                    <span>Add Service</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => setMenuShow(false)}
                    to={`${url}/make-admin`}
                    className="flex items-center p-2 space-x-3 rounded-md hover:text-gray-800 hover:font-medium hover:bg-gray-100 transform hover:translate-x-1 transition"
                    activeClassName="text-gray-800 font-medium bg-gray-100 transform translate-x-1"
                  >
                    <AiOutlineUserAdd />

                    <span>Make Admin</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => setMenuShow(false)}
                    to={`${url}/manage-service`}
                    className="flex items-center p-2 space-x-3 rounded-md hover:text-gray-800 hover:font-medium hover:bg-gray-100 transform hover:translate-x-1 transition"
                    activeClassName="text-gray-800 font-medium bg-gray-100 transform translate-x-1"
                  >
                    <GrServices />
                    <span>Manage Service</span>
                  </NavLink>
                </li>
              </>
            )}
          </ul>

          <ul className="pt-4 pb-2 space-y-1 text-sm">
            <li onClick={() => history.push("/")}>
              <Link
                onClick={() => setMenuShow(false)}
                to="/"
                className="flex items-center p-2 space-x-3 rounded-md hover:text-gray-800 hover:font-medium hover:bg-gray-100 transform hover:translate-x-1 transition"
              >
                <AiOutlineHome />
                <span>Go to Home</span>
              </Link>
            </li>

            <li
              onClick={signOutUser}
              className="flex items-center p-2 space-x-3 rounded-md cursor-pointer hover:text-gray-800 hover:font-medium hover:bg-gray-100 transform hover:translate-x-1 transition"
            >
              <BiLogOut />
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>

      <Content path={path} />
    </div>
  );
};

export default Side;

/* 


<div className="flex items-center p-2 space-x-4">
          <img
            src="https://source.unsplash.com/100x100/?portrait"
            alt=""
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="text-lg font-bold">Leroy Jenkins (admin)</h2>
          </div>
        </div>




*/
