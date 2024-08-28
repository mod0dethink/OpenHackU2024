import React, { useState } from "react";
import { Link } from "react-router-dom";
import images from "../components/common/AssetImg";
import Sidebar from "../components/common/Aside";

import Logo from "../components/layout/Layout";

//変数達
/**
 * UserImg = プロフ画像
 * UserName = ユーザーの名前
 * @returns
 */

const AccountEdit = () => {
  //img
  const [UserImg, setUserImg] = useState(images.testimg); // 初期値(ログインしている場合はサーバーから取得したい)

  //サーバーとやり取りする値「UserName(アカウント名),UserImg(ブランドのWeburl)」
  const [formData, setFormData] = useState({
    UserName: "teset", // 初期値(ログインしている場合はサーバーから取得したい)
    UserImg: null,
  });

  //画像を選んだ時の処理---:p---
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUserImg(reader.result);
      };
      reader.readAsDataURL(file);

      setFormData((prevData) => ({
        ...prevData,
        UserImg: file, // ファイルそのものをformDataに格納
      }));
    }
  };

  //inputの値の"入力最中"に更新される関数---:p---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //SAVEボタンが押された際の処理
  const handleSubmit = (e) => {
    e.preventDefault(); // デフォルトのフォーム送信を防止
    console.log(formData.UserName);
    console.log(formData.UserImg);
  };

  return (
    <div className="w-[100vw] h-screen flex flex-col justify-center items-center">
      <Sidebar />
      <Logo />
      <section>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-evenly items-center w-[700px] h-[700px] bg-[#fff] rounded-[25px]"
        >
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
            <input
              type="text"
              onChange={handleChange}
              name="UserName"
              value={formData.UserName}
              className="w-[600px] h-[50px] bg-[#CCCCCC] rounded-[10px] text-[30px]"
            />
          </div>
          <button
            type="submit"
            className="w-[300px] h-[100px] bg-[#626262] rounded-[25px] text-[64px] text-center text-[#fff] font-bold button-shadow2"
          >
            Save
          </button>
        </form>
      </section>
    </div>
  );
};

export default AccountEdit;
