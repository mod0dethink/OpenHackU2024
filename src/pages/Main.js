import React from "react";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import modelPath from "../assets/models/Merged.glb"; // インポート

import Sidebar from "../components/common/Aside";
import Logo from "../components/layout/Layout";

import images from "../components/common/AssetImg";

const Model = ({ url }) => {
  const gltf = useLoader(GLTFLoader, url);

  // モデルの位置を調整
  gltf.scene.position.set(0, 1, 0); // キャンバスの中心に配置
  // モデルのスケールを調整
  gltf.scene.scale.set(0.02, 0.02, 0.02);
  // モデルの回転を調整して正面を向くようにする
  gltf.scene.rotation.set(0, 0, 0); // Y軸を中心に180度回転

  return <primitive object={gltf.scene} />;
};

const Main = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedClothes, setSelectedClothes] = useState("");
  //バックエンド用
  //性別選択のステータス(name=sex)
  const genderOptions = [
    { value: "male", label: "Male", imageSrc: images.man },
    { value: "female", label: "Female", imageSrc: images.woman },
  ];
  //服選択のステータス(name=clothes)
  const clothesOptions = [
    { value: "shirt", imageSrc: images.shirt },
    { value: "sweat", imageSrc: images.sweat },
    { value: "pants", imageSrc: images.pants },
    { value: "skirt", imageSrc: images.skirt },
  ];

  //数値設定
  const SizeName = [
    "Body Height / 自分の身長",
    "Body Width / 自分の身幅",
    "Sholder Width / 肩幅",
    "Sleeve length / 袖丈",
    "width / 身幅",
    "Outseam / 総丈",
  ];
  const StateImg = [
    images.Height,
    images.Wight,
    "",
    "",
    images.Outseam,
    images.Length,
  ];

  const [numbers, setNumbers] = useState({
    body_height: "", //body_height
    body_width: "", //body_width
    sholder: "", //肩幅
    sleeve: "", //袖丈
    width: "", //身幅
    height: "", //総丈
  });

  //(入力時に状態を更新)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNumbers((prevNumbers) => ({
      ...prevNumbers,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Current status:");
    console.log("Selected gender:", selectedGender);
    console.log("Selected clothes:", selectedClothes);
    console.log("Numbers:", numbers);
  };

  //ラジオボタン用のCSS
  const buttonStyles =
    "flex flex-col justify-center items-center w-[60px] h-[60px] peer-checked:border-solid peer-checked:border-[1px] peer-checked:border-[#000] peer-checked:rounded-[10px]";

  /*---blender---*/

  return (
    <div className=" w-[100vw] h-screen flex flex-col justify-evenly items-center xl:flex-row">
      <Sidebar />
      <Logo />
      {/*blender*/}
      <section className="bg-[#fff] text-[50px] rounded-[25px] min-w-[500px] min-h-[350px] xl:w-[700px] xl:h-[800px]">
        <Canvas
          style={{
            width: "100%",
            height: "100%",
            background: "#fff",
          }}
          camera={{ position: [0, 0, 5], fov: 50 }}
        >
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <Model url={modelPath} />
          <OrbitControls
            minPolarAngle={Math.PI / 2} // 最小の縦回転角度を設定
            maxPolarAngle={Math.PI / 2}
            enablePan={false} // パン（移動）を無効にする
            enableZoom={false} // ズームを無効にする
          />
        </Canvas>
      </section>
      {/*ステータス設定*/}
      <section className="min-w-[500px] min-h-[400px] xl:w-[700px] xl:h-[800px]">
        <form
          onSubmit={handleSubmit}
          className="xl:bg-[#00000000] bg-[#fff] rounded-[25px] flex flex-col xl:justify-between w-[100%] h-[100%]"
        >
          {/*性別や服の種類を選択するセクション*/}
          <div className="flex justify-around items-center bg-[#fff] rounded-[25px] min-w-[300px] min-h-[200px] xl:w-[700px] xl:h-[350px]">
            <div className="flex flex-col space-y-10">
              {/*性別選択*/}
              <div>
                <p>Male / Female</p>
                <div className="flex space-x-4">
                  {genderOptions.map(({ value, label, imageSrc }) => (
                    <label key={value}>
                      <input
                        type="radio"
                        name="sex"
                        value={value}
                        className="hidden peer"
                        onChange={() => setSelectedGender(value)}
                        checked={selectedGender === value}
                      />{" "}
                      <div className={buttonStyles}>
                        <img src={imageSrc} width="35px" />
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              {/*服の種類選択*/}
              <div>
                <p>Items</p>
                <div className="flex space-x-4">
                  {clothesOptions.map(({ value, label, imageSrc }) => (
                    <label key={value}>
                      <input
                        type="radio"
                        name="clothes"
                        value={value}
                        className="hidden peer"
                        onChange={() => setSelectedClothes(value)}
                        checked={selectedClothes === value}
                      />{" "}
                      <div className={buttonStyles}>
                        <img src={imageSrc} width="50px" />
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-[250px] h-[250px] rounded-[50%] bg-[#9E9E9E]">
              <img src={images.testimg} className="w-[100px] h-[100px]" />
            </div>
          </div>
          {/*服の細かな数字、等を指定する*/}
          <div className="flex flex-col justify-center items-center grid grid-cols-3 grid-rows-2 gap-6y bg-[#fff] rounded-[25px] min-w-[300px] min-h-[200px] xl:w-[700px] xl:h-[400px]">
            {Object.keys(numbers).map((key, index) => (
              <div
                key={key}
                className="flex flex-col justify-center items-center space-y-[20px]"
              >
                <p className="text-[20px]">{SizeName[index]}</p>
                <div className="flex space-x-10">
                  <img src={StateImg[index]} className="h-[70px]" />
                  <input
                    type="number"
                    id={key}
                    name={key}
                    value={numbers[key]}
                    onChange={handleChange}
                    className="bg-[#D9D9D9] w-[80px] h-[50px]"
                  />
                </div>
              </div>
            ))}
            <div className="w-[100%] flex justify-end">
              <button className="button-shadow2 text-[#fff] text-[32px] font-bold bg-[#626262] w-[150px] h-[50px] rounded-[25px]">
                Go
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Main;
