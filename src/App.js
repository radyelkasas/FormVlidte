import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <Home />
      <Card />
      <div className="card-back">
        <img src="./images/bg-card-back.png" />
      </div>
    </div>
  );
};

export default App;
