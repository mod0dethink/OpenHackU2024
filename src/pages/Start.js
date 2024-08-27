import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logo.png";
import Startimg from "../assets/images/Startimg.png";
import testImg from "../assets/images/testimg.png";

const Start = () => {
  return (
    <div className="background-linear w-[100vw] h-screen flex justify-evenly items-center">
      {/*
      <p className="text-[50px]">OUTFIT</p>
      <p>our development page</p>

      <Link
        to="/main"
        className="border-solid border-[2px] text-[50px] bg-[#a3a] text-[#fff] px-[50px]"
      >
        Main page
      </Link>
      */}

      <section className="flex flex-col">
        <div className="flex flex-col items-center text-center space-y-[50px]">
          <img src={Logo} className="max-w-[150px]" />
          <p className="space-y-[15px]">
            あなたの日常をサポートするアプリです。
            <br />
            タスク管理からリマインダー設定まで、シンプルで直感的な操作で、
            <br />
            あなたの時間を有効に活用しましょう。
            <br />
            今すぐ、効率的な一日を始めてください！
            <br />
          </p>
          <Link
            to="/main"
            className="button-shadow text-[#626262] text-[64px] bg-[#fff] min-w-[300px] rounded-[25px]"
          >
            START
          </Link>
        </div>
      </section>
      <section>
        <img src={Startimg} width="400" />
      </section>
    </div>
  );
};

export default Start;
