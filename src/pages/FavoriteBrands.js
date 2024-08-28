import React, { useState } from "react";
import Sidebar from "../components/common/Aside";

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
      <section className="bg-[#fff] w-[870px] h-screen"></section>
    </div>
  );
};

export default FavoriteBrands;
