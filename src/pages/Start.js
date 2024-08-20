import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="w-[100vw] h-screen flex justify-center items-center">
      <p className="text-[50px]">test text 123</p>
      <Link to="/main">testlink</Link>
    </div>
  );
};

export default Start;
