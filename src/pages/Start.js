import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="w-[100vw] h-screen flex flex-col justify-center items-center">
      <p className="text-[50px]">OUTFIT</p>
      <p>our development page</p>

      <Link
        to="/main"
        className="border-solid border-[2px] text-[50px] bg-[#a3a] text-[#fff] px-[50px]"
      >
        Main page
      </Link>
    </div>
  );
};

export default Start;
