import React, { useState } from "react";
import Sidebar from "../components/common/Aside";
import images from "../components/common/AssetImg";

const FavoriteBrands = () => {
  const [formData, setFormData] = useState({
    Bname: "",
    BUrl: "",
  });

  const BrandSaveValue = [
    { name: "BName", label: "Brand Name", type: "text" },
    { name: "BUrl", label: "URL", type: "url" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //FavoriteBrandListの値
  const Brandlist = [
    { name: "AIVER", url: "https://aiver.online/" },
    { name: "gibous", url: "https://gibous.store/" },
    { name: "Casper John", url: "https://www.casperjohn.com/" },
  ];

  return (
    <div className="w-[100vw] h-screen flex justify-end items-center space-x-[300px]">
      <Sidebar />
      <section className="bg-[#fff] w-[500px] h-[600px] rounded-[25px] flex flex-col justify-center items-center">
        <form className="flex flex-col items-center space-y-[50px]">
          <p className="text-center text-[48px]">Favorite Brands</p>
          <div>
            {BrandSaveValue.map(({ value, type, label, name }) => (
              <label key={value}>
                <p>{label}</p>
                <input
                  type={type}
                  name={name}
                  value={value}
                  onChange={handleChange}
                  className="bg-[#CCCCCC] w-[400px] h-[50px] rounded-[10px]"
                />
              </label>
            ))}
          </div>
          <button
            type="submit"
            className="button-shadow2 bg-[#626262] text-[#fff] text-[64px] font-bold font-[Jockey-One] w-[300px] h-[100px] rounded-[25px]"
          >
            Save
          </button>
        </form>
      </section>

      <section className="bg-[#fff] w-[870px] h-screen flex flex-col items-center justify-start">
        <div className="text-[48px] font-bold h-[200px] flex flex-col justify-center">
          FavoriteBrands
        </div>
        <div className="overflow-y-auto w-[770px]">
          {Brandlist.map(({ name, url, index }) => (
            <button
              key={index}
              className="flex justify-between items-center w-[100%] h-[100px] border-t border-solid border-[#CCCCCC]"
            >
              <img src={images.Favorite} className="w-[40px] h-[36px]" />
              <p className="text-[32px]">{name}</p>
              <img src={images.Next} className="w-[25px] h-[40px]" />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FavoriteBrands;
