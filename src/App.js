import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/Login/Private/PrivateRoute";
import Register from "./components/Login/Login/Register";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import Explore from "./components/Pages/Explore/Explore";
import Home from "./components/Pages/Home/Home";
import NotFound from "./components/Pages/NotFound/NotFound";
import PlaceOrder from "./components/Pages/PlaceOrder/PlaceOrder";
import AuthProvider from "./context/AuthProvider";

AOS.init();

function App() {
  return (
    <div className="flex flex-col min-h-screen font-poppins">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/explore">
              <Explore />
            </Route>

            <PrivateRoute path="/placeOrder/:id">
              <PlaceOrder />
            </PrivateRoute>

            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>

            <Route path="/about">
              <AboutUs />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/register">
              <Register />
            </Route>

            <Route path="/*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
