import React from "react";
import logo from "./logo.svg";
import { Counter } from "./components/counter/Counter";
import "./App.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import MUIExamples from "./components/mui-examples";
import LayoutContainer from "./components/layout-examples/holy-grail-layout/LayoutContainer";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <br />
        
      </header> */}

      {/* <CardLayout /> */}
      {/* <LayoutContainer /> */}

      <MUIExamples />
    </div>
  );
}

export default App;
