import { Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useFirebase from "../../../hooks/useFirebase";

import Spinner from "../Loader/Spinner";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowHeight, setWindowHeight] = useState(false);
  const { user, admin } = useAuth();
  const { isLoading, signOutUser } = useFirebase();

  useEffect(() => {
    const handleScroll = () => {
      setWindowHeight(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    // <div className="fixed top-0 left-0 w-screen">
    <div style={{ zIndex: "999" }} className="w-full z-50">
      <nav
        className={`px-10 sm:px-0 lg:px-10 py-2 md:py-4 lg:py-2 bg-transparent fixed top-0 w-full text-gray-100 bg-gray-200 ${
          !windowHeight && "md:bg-transparent"
        } ${windowHeight && "shadow-md z-10 text-gray-700"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center w-full">
              <NavLink to="/">
                <div className="flex-shrink-0 flex items-center space-x-4">
                  <h2 className="text-white-600 tracking-widest text-2xl sm:text-2xl lg:text-3xl font-bold ">
                  eProperty
                  </h2>
                </div>
              </NavLink>
              <div className="ml-auto hidden md:block">
                <div className="ml-10 flex items-center space-x-2">
                  <NavLink
                    activeClassName="text-teal-400 font-bold"
                    to="/home"
                    className="text-lg hover:text-teal-400 tracking-wide px-3 py-1 rounded-3xl"
                  >
                    Home
                  </NavLink>

                  <NavLink
                    activeClassName="text-teal-400 font-bold"
                    to="/explore"
                    className="text-lg hover:text-teal-400 tracking-wide px-3 py-1 rounded-3xl"
                  >
                    Explore
                  </NavLink>

                  {user?.email && (
                    <NavLink
                      activeClassName="text-teal-400 font-bold"
                      to="/dashboard"
                      className="text-lg hover:text-teal-400 tracking-wide px-3 py-1 rounded-3xl"
                    >
                      Dashboard
                    </NavLink>
                  )}

                  <NavLink
                    activeClassName="text-teal-400 font-bold"
                    to="/about"
                    className="text-lg hover:text-teal-400 tracking-wide px-3 py-1 rounded-3xl"
                  >
                    About Us
                  </NavLink>

                  {user?.email ? (
                    <button
                      onClick={signOutUser}
                      className="btn btn-primary px-2 py-0.5 rounded-full text-lg  "
                    >
                      Logout{" "}
                      <span className="text-sm">
                        (
                        {user?.displayName?.split(" ")[0] ||
                          admin?.name.split(" ")[0]}
                        )
                      </span>
                    </button>
                  ) : (
                    <NavLink className="flex-shrink-0 block" to="login">
                      <button className="btn btn-primary text-lg rounded-full py-1">
                        Log In
                      </button>
                    </NavLink>
                  )}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div
              className="text-gray-700 text-center md:hidden"
              id="mobile-menu"
            >
              <div
                ref-setter={ref}
                className=" px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <NavLink
                  onClick={() => setIsOpen(!isOpen)}
                  activeClassName="text-teal-400 font-bold"
                  to="/home"
                  className="block text-lg tracking-wide px-3 py-1 rounded-3xl"
                >
                  Home
                </NavLink>

                <NavLink
                  onClick={() => setIsOpen(!isOpen)}
                  activeClassName="text-teal-400 font-bold"
                  to="/explore"
                  className="block text-lg tracking-wide px-3 py-1 rounded-3xl"
                >
                  Explore
                </NavLink>

                {user?.email && (
                  <NavLink
                    onClick={() => setIsOpen(!isOpen)}
                    activeClassName="text-teal-400 font-bold"
                    to="/dashboard"
                    className="block text-lg tracking-wide px-3 py-1 rounded-3xl"
                  >
                    Dashboard
                  </NavLink>
                )}

                <NavLink
                  onClick={() => setIsOpen(!isOpen)}
                  activeClassName="text-teal-400 font-bold"
                  to="/about"
                  className="block text-lg tracking-wide px-3 py-1 rounded-3xl"
                >
                  About Us
                </NavLink>

                {user?.email ? (
                  <button
                    onClick={signOutUser}
                    className="btn btn-primary px-2 py-0.5 rounded-full text-lg  "
                  >
                    Logout{" "}
                    <span className="text-sm">
                      (
                      {user?.displayName?.split(" ")[0] ||
                        admin?.name.split(" ")[0]}
                      )
                    </span>
                  </button>
                ) : (
                  <NavLink className="flex-shrink-0 block" to="login">
                    <button className="btn btn-primary text-lg rounded-full py-1">
                      Log In
                    </button>
                  </NavLink>
                )}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
