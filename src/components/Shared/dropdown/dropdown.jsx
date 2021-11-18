import React from "react";

const dropdown = () => {
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className="
          bg-purple-500
          text-white
          active:bg-purple-600
          font-bold
          uppercase
          text-xs
          px-4
          py-2
          rounded
          shadow
          hover:shadow-md
          outline-none
          focus:outline-none
          mr-1
          mb-1
          ease-linear
          transition-all
          duration-150
        "
              type="button"
              onclick="openDropdown(event,'dropdown-example-1')"
            >
              Dropdown<i className="fas fa-angle-down ml-2"></i>
            </button>
            <div
              className="
          hidden
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded
          shadow-lg
          mt-1
        "
              id="dropdown-example-1"
            >
              <a
                href="/"
                className="
            text-sm
            py-2
            px-4
            font-normal
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          "
              >
                Action
              </a>
              <a
                href="/"
                className="
            text-sm
            py-2
            px-4
            font-normal
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          "
              >
                Another action
              </a>
              <a
                href="/"
                className="
            text-sm
            py-2
            px-4
            font-normal
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          "
              >
                Something else here
              </a>
              <div
                className="
            h-0
            my-2
            border border-solid border-t-0 border-blueGray-800
            opacity-25
          "
              ></div>
              <a
                href="/"
                className="
            text-sm
            py-2
            px-4
            font-normal
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          "
              >
                Seprated link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dropdown;
