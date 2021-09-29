import logo from './logo.svg';
import React from "react";
import ReactDOM from "react-dom";
import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";
import Optin from "./components/Optin/Optin";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
         FastCloud Website Under Maintenance
          <br />
          We'll be right back
        </h1>
        <Timer />
        <Optin />
        <Preloader />
      </div>
    </div>
  );
}

export default App;
