import React, { useEffect } from "react";
import sad from "../../../../../images/sad.png";

const Payment = () => {
  useEffect(() => {
    document.title = "Make Payment | eProperty";
  }, []);

  return (
    <div className="w-2/3 flex flex-col items-center justify-center mx-auto  h-full py-10">
      <h3 className="text-2xl text-red-500">
        No payment method available, we are working on it.
      </h3>
      <img className="h-96" src={sad} alt="" />
    </div>
  );
};

export default Payment;
