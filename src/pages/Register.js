import React, { useState } from "react";
import Logo from "../components/layout/Layout";
import images from "../components/common/AssetImg";
import axios from "axios"; // axiosをインポート

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const LoginBox = [
    { name: "name", label: "Name", type: "text" },
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/signup", {
        username: formData.name,
        password: formData.pass,
        mailaddress: formData.email,
      });
      console.log(response.data);
      alert("アカウントが正常に作成されました");
    } catch (error) {
      console.error(error);
      alert("アカウント作成に失敗しました");
    }
  };

  return (
    <div className="w-[100vw] h-screen flex flex-col justify-evenly items-center xl:flex-row">
      <Logo />
      <section>
        <img src={images.RegisterImg} className="w-[330px]" />
      </section>
      <section>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-evenly w-[700px] h-[700px] bg-[#ffffff] rounded-[25px]"
        >
          <p className="text-[48px] font-bold">Register</p>
          <div>
            {LoginBox.map(({ name, label, type }) => (
              <div key={name}>
                <p className="text-[32px] ">{label}</p>
                <input
                  type={type}
                  value={formData[name]}
                  name={name}
                  onChange={handleChange}
                  className="bg-[#CCCCCC] w-[600px] h-[50px] rounded-[10px] "
                />
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="button-shadow2 text-[#fff] text-[64px] font-bold bg-[#626262] w-[300px] h-[100px] rounded-[25px]"
          >
            Register
          </button>
        </form>
      </section>
    </div>
  );
};

export default Register;
