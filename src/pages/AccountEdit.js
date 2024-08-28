import React, { useState } from "react";
import { Link } from "react-router-dom";
import images from "../components/common/AssetImg";
import Sidebar from "../components/common/Aside";

import Logo from "../components/layout/Layout";

const AccountEdit = () => {
  const [UserImg, setUserImg] = useState(images.testimg);
  const UserName = "teset";

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUserImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  //ボタンが押された際の処理
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-[100vw] h-screen flex flex-col justify-center items-center">
      <Sidebar />
      <Logo />
      <section className="flex flex-col justify-evenly items-center w-[700px] h-[700px] bg-[#fff] rounded-[25px]">
        <label className="flex flex-col items-center justify-center  w-[150px] h-[150px] bg-[#CCCCCC] rounded-[50%] overflow-hidden">
          <input
            type="file"
            accept="image/*"
            name="username"
            onChange={handleImageChange}
            className="hidden"
          />
          <img src={UserImg} />
        </label>
        <div>
          <p className="text-[32px]">Name</p>
          <p className="w-[600px] h-[50px] bg-[#CCCCCC] rounded-[10px] text-[30px]">
            {UserName}
          </p>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-[300px] h-[100px] bg-[#626262] rounded-[25px] text-[64px] text-center text-[#fff] font-bold button-shadow2"
        >
          Save
        </button>
      </section>
    </div>
  );
};

export default AccountEdit;
