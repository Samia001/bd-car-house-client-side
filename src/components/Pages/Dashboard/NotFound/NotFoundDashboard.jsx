import React from "react";
import { Link } from "react-router-dom";
import p404 from "../../../../images/404.png";

const NotFoundDashboard = () => {
  return (
    <div className="py-20">
      <div className="w-full md:2/3 lg:w-1/2 mx-auto">
        <h2 className="text-center text-red-500 text-3xl">
          Ops! Page not found. Go back and try again!
        </h2>

        <div className="flex items-center justify-center mt-4">
          <Link to="/dashboard" className="btn btn-primary">
            Go Dashboard
          </Link>
        </div>

        <img src={p404} alt="" />
      </div>
    </div>
  );
};

export default NotFoundDashboard;
