import React, { useState } from "react";

function TempSlide({ image, text }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div
      onClick={() => setIsClicked(!isClicked)}
      className="w-[6.8rem] h-[5.56rem] rounded-[1.25rem] flex items-center justify-center dark:shadow-[-10px_-10px_20px_#272651,10px_10px_20px_#272651] shadow-[-10px_-10px_20px_#FFFFFF,10px_10px_20px_#D3E7F7]"
    >
      <div
        className={`  w-[6.2rem] h-[4.9rem]   border-2   ${
          isClicked ? "border-[#4D478B]" : "border-[#F2F7FB]/10"
        }    flex flex-col items-center justify-around rounded-[1rem] `}
      >
        <img
          className="w-[1.44rem] h-[1.44rem] object-contain"
          src={image}
          alt="appointment"
        ></img>
        <p className="font-[700] px-1 text-[0.75rem] leading-[0.93rem] text-[#4D478B] dark:text-white  text-center">
          {text}
        </p>
      </div>
    </div>
  );
}

export default TempSlide;
