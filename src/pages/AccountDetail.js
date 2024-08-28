import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/common/Aside";
import Logo from "../components/layout/Layout";
import images from "../components/common/AssetImg";

const AccountDetail = () => {
  const UserImg = images.testimg;
  const UserName = "teset";

  return (
    <div className="w-[100vw] h-screen flex flex-col justify-center items-center">
      <Sidebar />
      <Logo />
      <section className="flex flex-col justify-evenly items-center w-[700px] h-[700px] bg-[#fff] rounded-[25px]">
        <div className="flex flex-col items-center justify-center  w-[150px] h-[150px] bg-[#CCCCCC] rounded-[50%]">
          <img src={UserImg} width="100px" />
        </div>
        <div>
          <p className="text-[32px]">Name</p>
          <p className="w-[600px] h-[50px] bg-[#CCCCCC] rounded-[10px] text-[30px]">
            {UserName}
          </p>
        </div>
        <Link
          to="/accountEdit"
          className="w-[300px] h-[100px] bg-[#626262] rounded-[25px] text-[64px] text-center text-[#fff] font-bold button-shadow2"
        >
          Edit
        </Link>
      </section>
    </div>
  );
};

export default AccountDetail;
