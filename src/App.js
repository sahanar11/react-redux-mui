import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import CounterHome from "./components/counter/Counter";

import ECommerceHome from "./components/ecommerce/home";
import AboutUs from "./components/ecommerce/about-us";
import Signup from "./components/ecommerce/signup";
import UserService from "./services/ecommerce/UserService";

function App() {
  useEffect(() => {
    UserService.getUserDatabase();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="counter" element={<CounterHome />} />
        <Route path="ecommerce">
          <Route path="*" element={<ECommerceHome />} />
          <Route path="home" element={<ECommerceHome />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
