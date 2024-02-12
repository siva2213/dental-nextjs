import React, { useState } from "react";

function ChooseProblem({ icon, text, isDarkMode }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div
      onClick={() => setIsClicked(!isClicked)}
      className="w-[10.9rem] h-[9.4rem] rounded-[1.9rem] ds relative cursor-pointer dark:shadow-[-10px_-10px_20px_#2D2869,10px_10px_20px_#1D1853]"
    >
      <img
        src={isDarkMode ? "/home/problembox_dark.png" : "/home/problembox.png"}
        alt="problembox"
      ></img>
      <div className="w-[2.32rem] h-[2.32rem] rounded-[0.625rem] bg-[#D9D9D9]/30 absolute flex items-center justify-center top-6 left-4">
        <img
          className="w-[1.6rem] h-[1.6rem] object-contain"
          src={icon}
          alt="problem"
        ></img>
      </div>
      <div
        className={`w-[9px] h-[9px] bg-[#827BD3] ${
          isClicked &&
          "!bg-[#FF8412] shadow-[0px_0px_10px_5px] shadow-[#E0965B]/50"
        } absolute top-5 right-5 rounded-full`}
      ></div>
      <p className="text-center pt-5 font-[700] leading-5 text-[#211F2B] dark:text-white">
        {text}
      </p>
    </div>
  );
}

export default ChooseProblem;
