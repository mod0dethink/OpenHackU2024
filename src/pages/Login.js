import React, { useState } from "react";
import Logo from "../components/layout/Layout";
import images from "../components/common/AssetImg";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    pass: "",
  });

  const LoginBox = [
    { name: "email", label: "Email", type: "email" },
    { name: "pass", label: "Password", type: "password" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="w-[100vw] h-screen flex flex-col justify-evenly items-center xl:flex-row">
      {" "}
      <Logo />
      <section>
        <form className="flex flex-col items-center justify-evenly w-[700px] h-[700px] bg-[#ffffff] rounded-[25px]">
          <p className="text-[48px] font-bold">Log In</p>
          <div>
            {LoginBox.map(({ key, name, label, type }) => (
              <div key={key}>
                <p className="text-[32px] ">{label}</p>
                <input
                  type={type}
                  value={name.key}
                  name={name}
                  onChange={handleChange}
                  className="bg-[#CCCCCC] w-[600px] h-[50px] rounded-[10px] "
                />
              </div>
            ))}
          </div>
          <button className="button-shadow2 text-[#fff] text-[64px] font-bold bg-[#626262] w-[300px] h-[100px] rounded-[25px]">
            Log in
          </button>
        </form>
      </section>
      <section>
        <img src={images.LoginImg} className="w-[330px]" />{" "}
      </section>
    </div>
  );
};

export default Login;
