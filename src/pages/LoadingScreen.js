import outfit from "../assets/images/logo.png";
const LoadingScreen = () => {
  return (
    <div className="w-[100vw] h-[100lvh] flex flex-col items-center justify-center">
      <div className="overflow-y-hidden h-[75px]">
        <div className="word h-[75px] text-[50px] font-bold">
          <br />
          <p className="text-white">Clothes</p>
          <p className="text-black">Virtual</p>
          <p className="text-white">try-on?</p>
          <img className="h-[75px]" src={outfit} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
