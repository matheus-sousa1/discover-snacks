import React from "react";

import microwave from "../img/microondas.png";
import meat from "../img/carne.png";
import leftovers from "../img/sobras.png";

import "../App.css";

export default function SampleNextArrow() {
  return (
    <div>
      <div className="content-slide">
        <h3> </h3>
        <img style={{ width: 100 }} src={microwave} alt="microondas" />
      </div>
      <div className="content-slide">
        <h3> </h3>

        <img style={{ width: 100 }} src={leftovers} alt="sobras" />
      </div>
      <div className="content-slide">
        <h3> </h3>

        <img style={{ width: 100 }} src={meat} alt="carne" />
      </div>
    </div>
  );
}
