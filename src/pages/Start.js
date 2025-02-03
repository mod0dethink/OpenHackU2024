import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logo.png";
import Startimg from "../assets/images/Startimg.png";
import mana from "../assets/images/20240705_Manami_Sorami-139.jpg";
import see from "../assets/images/see.png";
import yuzu from "../assets/images/yuzu.png";
import yuzu_b from "../assets/images/yuzu_b.png";

const Start = () => {
  return (
    <div
      className="relative section-bg-setting w-[100vw] h-screen flex justify-between items-center"
      style={{ backgroundImage: `url(${see})` }}
    >
      <Link
        to="https://dawn-waiting.com"
        className="absolute z-[5] top-0 left-0 w-full h-[60px] flex justify-between px-[20px] items-center"
      >
        <p className="text-[30px] palast-variable-italic">DAWN</p>
        <img className="h-full" src={yuzu_b} alt="" />
      </Link>
      <p className="title-hover text-vertical absolute top-[10%] right-[40%] tracking-[10px] kiwi-maru-regular text-[25px] bg-white py-[30px]">
        あなたの明日を変える一着を
      </p>
      <Link
        to="https://dawn-waiting.com"
        className="dawn-url tracking-[5px] border-l-white border-l-solid border-l-[1px] flex flex-col justify-center items-center"
      >
        dawn-waiting.com
      </Link>

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

      <section className="flex flex-col justify-center items-center flex-1  text-[16px] kiwi-maru-regular">
        <div className="tracking-[5px] relative flex flex-col items-center justify-center tracking-[2px]  text-center space-y-[50px] h-[65lvh] w-[12%] text-black text-vertical">
          <p className=" absolute top-0 left-0 title-bg-style py-[20px]">
            洋服のサイズ感を簡単チェック！
          </p>

          <p className="title-bg-style py-[20px]">あなたにピッタリの一着を</p>

          <p className="absolute bottom-0 right-0 title-bg-style py-[20px] ">
            スマートに見つけよう。
          </p>
        </div>
      </section>
      <section className="flex-1 flex flex-col items-center justify-center kiwi-maru-regular">
        {/**     <div className="flex ">
          <p className="bb-text">明</p>
          <p className="bb-text">日</p>
          <p className="bb-text">は</p>
          <p className="bb-text">何</p>
          <p className="bb-text">を</p>
          <p className="bb-text">着</p>
          <p className="bb-text">て</p>
          <p className="bb-text">い</p>
          <p className="bb-text">こ</p>
          <p className="bb-text">う</p>
          <p className="bb-text">。</p>
        </div>*/}
        <img className="h-[100px]" src={Logo} alt="" />
        <Link
          to="/main"
          className="btn-ani text-[#ffffff] text-[50px]  min-w-[250px] border-[1px] border-white  text-center kinuta-maruminfuji-stdn"
        >
          START
        </Link>
      </section>
    </div>
  );
};

export default Start;
