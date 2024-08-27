import React from "react";
import LogoImg from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <div className="absolute top-[10px] w-[150px] h-[80px]">
      <img src={LogoImg} />
    </div>
  );
};

export default Logo;
