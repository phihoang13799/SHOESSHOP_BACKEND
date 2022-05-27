import "../src/App.css";
import React from "react";
import Nav from "./components/Nav";
import About from "./pages/About";
import Shop from "./components/Shop";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import ItemDetail from "./pages/ItemDetail";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { useState, useEffect } from "react";
import Contact from "./pages/Contact";
import Order from "./pages/Order";
import SlideImage from "./components/SlideImage";
import SignIn from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Provider } from "react-redux";
import stores from "../src/stores/index";
import PublicRoute from "../src/utils/PublicRoute";
import {
  getToken,
  removeUserSession,
  setUserSession,
} from "../src/utils/Common";
import axios from "axios";

const checkAuth = () => {
  console.log(localStorage.getItem("token"));
  if (localStorage.getItem("token") !== null) return true;
  return false;
};
function App() {
  const [authLoading, setAuthLoading] = useState(true);
  const storage = localStorage.getItem("token");
  useEffect(() => {
    checkAuth();
  }, [storage]);

  
  return (
    <div>
      <Router>
        <div class="header">{/* <Nav /> */}</div>
        <div className="App">
          <Routes>
          <Route
              path="/signin"
              element={!checkAuth ? <Navigate to="/" /> : <SignIn />}
            />
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" exact element={<Shop />} />
            <Route path="/:id" element={<ItemDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/order" element={<Order />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
        <div>{/* <Footer /> */}</div>
      </Router>
    </div>
  );
}
function PrivateRoute(...rest) {
  console.log(checkAuth());
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? (
          <SignIn />
        ) : (
          <Navigate
            to={{
              pathname: "/signin",
              state: { from: props.location },
            }}
          />
        )
      }
    ></Route>
  );
}

export default App;
