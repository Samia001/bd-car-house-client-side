import React from "react";
import { Route, Switch } from "react-router";
import useAuth from "../../../../hooks/useAuth";
import AdminRoute from "../../../Login/Login/Private/AdminRoute";
import AddService from "../Admin/AddService/AddService";
import Admins from "../Admin/MakeAdmin/Admins";
import ManageService from "../Admin/ManageService/ManageService";
import OrderList from "../Admin/OrderList/OrderList";
import NotFoundDashboard from "../NotFound/NotFoundDashboard";
import MyOrder from "../User/MyOrder/MyOrder";
import Payment from "../User/Payment/Payment";
import Review from "../User/Review/Review";
import UserProfile from "../UserProfile/UserProfile";

const Content = ({ path }) => {
  const { admin } = useAuth();

  return (
    <div className="ml-0 md:ml-60 px-10 bg-teal-50 pt-10 pb-20 min-h-screen">
      <Switch>
        <Route exact path={path}>
          <UserProfile />
        </Route>

        {!(admin?.role === "admin") && (
          <>
            <Route path={`${path}/my-order`}>
              <h2 className="text-5xl text-gray-600 py-4">My Order</h2>
              <MyOrder />
            </Route>

            <Route path={`${path}/review`}>
              <h2 className="text-3xl text-gray-600 py-4">Please Review Us</h2>
              <Review />
            </Route>

            <Route path={`${path}/payment`}>
              <Payment />
            </Route>
          </>
        )}

        <AdminRoute path={`${path}/order-list`}>
          <h2 className="text-4xl text-gray-600 py-4">Order List</h2>
          <OrderList />
        </AdminRoute>

        <AdminRoute path={`${path}/add-service`}>
          <h2 className="text-4xl text-gray-600 py-4">Add a new Service</h2>
          <AddService />
        </AdminRoute>

        <AdminRoute path={`${path}/manage-service`}>
          <h2 className="text-4xl text-gray-600 py-4">Manage Service</h2>
          <ManageService />
        </AdminRoute>

        <AdminRoute path={`${path}/make-admin`}>
          <h2 className="text-3xl text-gray-600 py-4">Create New Admin</h2>
          <Admins />
        </AdminRoute>

        <Route path={`${path}/*`}>
          <NotFoundDashboard />
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
