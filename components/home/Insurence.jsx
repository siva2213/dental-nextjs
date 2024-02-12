import React, { useState } from "react";
import { darkMode } from "../../atom/DarkMode.js";
import { useRecoilState } from "recoil";

function Insurence({ icon, text }) {
  const [isClicked, setIsClicked] = useState(false);
  const [isDarkMode, setDarkMode] = useRecoilState(darkMode);

  return (
    <div className="w-[23.3rem] h-[6.83rem] rounded-[1.875rem] shadow-[10px_10px_20px_0px_#D3E7F6,-10px_-10px_20px_0px_#FFFFFF] dark:shadow-[-10px_-10px_20px_#282651,10px_10px_20px_#1B1A3C] flex items-center justify-between relative  ">
      <div className="h-[6.83rem] flex items-center justify-between">
        <img
          className="w-[6rem] h-[2.1rem] object-contain "
          src={icon}
          alt="icon"
        ></img>
      </div>

      <div className=" h-[6.83rem] w-[17rem] rounded-[1.875rem] p-[1.25rem] shadow-[inset_10px_10px_20px_0px_#D3E7F6,inset_-10px_-10px_20px_0px_#FFFFFF] dark:shadow-[inset_-10px_-10px_20px_#282750,inset_10px_10px_20px_#1B1B3A] flex justify-between items-center   ">
        <p className="max-w-[10.63rem]  font-[700] text-[1rem] leading-[1.25rem] dark:text-white">
          {text}
        </p>
        <div
          onClick={() => setIsClicked(!isClicked)}
          className="relative  flex items-center "
        >
          <img
            className="w-[2.7rem] h-[2.7rem] "
            src={
              isDarkMode ? "/home/ellipse_dark.png" : "/home/ellipsewhite.png"
            }
            alt="ellipse White"
          ></img>
          {isClicked && (
            <div className="w-[0.7rem] h-[0.7rem] right-[0.98rem] top-[0.99rem] rounded-full bg-[#FF8412] absolute shadow-[0px_0Px_10px_5px] shadow-[#FF8412]/60 "></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Insurence;
