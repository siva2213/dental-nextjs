import React, { useState } from "react";

function Ngo({ text, icon, isDarkMode }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="w-[10.9rem]  h-[13.2rem] rounded-[1.9rem]    shadow-[10px_10px_20px_0px_#D3E7F6,-10px_-10px_20px_0px_#FFFFFF] dark:shadow-[-10px_-10px_20px_#2D2869,10px_10px_20px_#1D1853] flex flex-col justify-between items-center">
      <div className="pt-[1rem]">
        <img
          className=" w-[3.3rem] h-[3.3rem] object-contain  "
          src={icon}
          alt="icon"
        ></img>
      </div>

      <div className="w-[10.9rem] h-[8.2rem] rounded-[1.9rem]   flex flex-col  items-center justify-center dark:bg-[linear-gradient(113.96deg,#474086_0%,#1F1B59_100%)]   bg-[linear-gradient(130.06deg,#ACA4FE_0%,#5C55AB_35.33%,#2B275A_75.68%)]  ">
        <div
          onClick={() => setIsClicked(!isClicked)}
          className="relative flex items-center"
        >
          <img
            className="w-[2.7rem] h-[2.7rem] "
            src={isDarkMode ? "/home/ngoellipse_dark.png" : "/home/ngoellipse.png"}
            alt="ngoellipse"
          ></img>
          {isClicked && (
            <div className="w-[0.8rem] h-[0.8rem] bg-[#FF8412] right-[0.96rem] absolute rounded-full shadow-[0px_0px_10px_5px] shadow-[#FF8412]/60 "></div>
          )}
        </div>

        <div className="leading-[1.25rem] flex justify-center items-center text-center  text-white font-[700] min-h-[3.4rem] ">
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
}

export default Ngo;
