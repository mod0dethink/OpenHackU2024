import React from "react";
import Sidebar from "../components/common/Aside";
import Logo from "../components/layout/Layout";

const Main = () => {
  return (
    <div className=" text-[#fff] w-[100vw] h-screen flex flex-col justify-evenly items-center xl:flex-row">
      <Sidebar />
      <Logo />
      <section className="bg-[#fff] text-[50px] rounded-[25px] min-w-[450px] min-h-[350px] xl:w-[700px] xl:h-[800px]"></section>
      <section className="min-w-[450px] min-h-[350px] xl:w-[700px] xl:h-[800px]">
        <form className="flex xl:flex-col xl:justify-between w-[100%] h-[100%]">
          <div className="bg-[#fff] rounded-[25px] min-w-[300px] min-h-[350px] xl:w-[700px] xl:h-[350px]">
            text
          </div>
          <div className="bg-[#fff] rounded-[25px] min-w-[300px] min-h-[350px] xl:w-[700px] xl:h-[400px]">
            text
          </div>
        </form>
      </section>
    </div>
  );
};

export default Main;
