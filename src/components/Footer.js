import React from "react";
import myLogo from "../img/Revenues.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="myLogo">
        <img style={{ width: 100 }} src={myLogo} alt="logo" />
      </div>
      <p>© Copyright 2023 - Revenues - All rights reserved Revenues</p>
    </div>
  );
};

export default Footer;
