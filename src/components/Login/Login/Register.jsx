import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { GrClose } from "react-icons/gr";
import { Link, useHistory } from "react-router-dom";
import useSignMethod from "../../../hooks/useSignMethod";

const Register = () => {
  const { handleNewUserWithEmail } = useSignMethod();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    document.title = "Register | eProperty";
  }, []);

  const onSubmit = async (data) => {
    const fullName = data.fName + " " + data.lName;
    handleNewUserWithEmail(data.email, data.password, fullName);
  };

  return (
    <div className="bg-teal-50">
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-lg mx-auto rounded-lg shadow-xl overflow-hidden py-10 px-20 bg bg-white relative z-2">
          <div
            onClick={() => history.push("/")}
            className="absolute top-2 left-0 btn px-4 animate-bounce "
          >
            <GrClose size="1.5em" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="">
              <h2 className="text-teal-700 text-2xl font-bold text-center">
                Register
              </h2>
              <p className="text-teal-600 text-center ">Happy to have you!</p>
            </div>

            <div className="grid items-center grid-cols-6 gap-6 space-y-2">
              <div className="relative col-span-6 md:col-span-3">
                <input
                  {...register("fName")}
                  id="fName"
                  name="fName"
                  type="text"
                  className="h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-teal-600 focus:ring-0 border-0"
                  placeholder="john@doe.com"
                />
                <label
                  htmlFor="fName"
                  className="absolute left-0 top-3 text-gray-600 text-sm transition-all"
                >
                  Last Name
                </label>
              </div>
              <div className="relative col-span-6 md:col-span-3">
                <input
                  {...register("lName")}
                  id="lName"
                  name="lName"
                  type="text"
                  className="h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-teal-600 focus:ring-0 border-0"
                  placeholder="john@doe.com"
                />
                <label
                  htmlFor="lName"
                  className="absolute left-0 top-3 text-gray-600 text-sm transition-all"
                >
                  Last Name
                </label>
              </div>

              <div className="relative col-span-6">
                <input
                  {...register("email")}
                  id="email"
                  name="email"
                  type="email"
                  className="h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-teal-600 focus:ring-0 border-0"
                  placeholder="john@doe.com"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-3 text-gray-600 text-sm transition-all"
                >
                  Email address
                </label>
              </div>

              <div className="relative col-span-6">
                <input
                  required
                  {...register("password")}
                  type="password"
                  name="password"
                  id="password"
                  placeholder=" "
                  className="h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-teal-600 focus:ring-0 border-0"
                />
                <label
                  htmlFor="password"
                  className="absolute left-0 top-3 text-gray-600 text-sm transition-all"
                >
                  Password
                </label>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button className="btn btn-primary" type="submit">
                Register
              </button>
            </div>

            <p className="text-center">
              Already registered?{" "}
              <Link
                className="text-teal-700 hover:text-teal-500 no-underline"
                to="login"
              >
                Login Here.
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
