import React, { useEffect } from "react";
import useAuth from "../../../../hooks/useAuth";
import userImg from "../../../../images/review_user.png";

const UserProfile = () => {
  const { user, admin } = useAuth();

  useEffect(() => {
    document.title = "User Dashboard | bd car house";
  }, []);

  return (
    <div className=" flex min-h-screen items-center justify-center">
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="-mt-32 text-center flex-col flex items-center justify-center space-y-4"
      >
        <img
          className="h-20 w-20 rounded-full"
          src={user?.photoURL || userImg}
          alt=""
        />
        <h2 className="text-3xl">Hi, {user?.displayName || admin?.name}</h2>
      </div>
    </div>
  );
};

export default UserProfile;
