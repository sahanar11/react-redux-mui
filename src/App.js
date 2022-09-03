import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import CounterHome from "./components/counter/Counter";

import ECommerceHome from "./components/ecommerce/home";
import AboutUs from "./components/ecommerce/about-us";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="counter" element={<CounterHome />} />
        <Route path="ecommerce">
          <Route path="*" element={<ECommerceHome />} />
          <Route path="home" element={<ECommerceHome />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
