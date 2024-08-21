import React from "react";
import Sidebar from "../components/common/Aside";

const Main = () => {
  return (
    <div className="w-[100vw] h-screen flex justify-center items-center">
      <Sidebar />
      <section className="text-[50px]">Main</section>
    </div>
  );
};

export default Main;
