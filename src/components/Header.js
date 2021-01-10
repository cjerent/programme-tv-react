import React from "react";

const Header = (props) => {
  const { logo, maintitle } = props;
  return (
    <div className="header">
      <img src={logo} alt="logo-m6" />
      <h1>{maintitle}</h1>
    </div>
  );
};

export default Header;
