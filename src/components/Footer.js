import React from "react";
import myLogo from "../img/logoRevenues.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="myLogo">
        <img style={{ width: 100 }} src={myLogo} alt="logo" />
      </div>
      <p>© Copyright 2023 - Matheus - All rights reserved Matheus</p>
    </div>
  );
};

export default Footer;
