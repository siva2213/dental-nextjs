import React, { useState } from "react";

function Pinputs({ icon,text,heading }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div
      onClick={() => setIsClicked(!isClicked)}
      className="flex flex-col gap-1 cursor-pointer "
    >
      <div className="h-[4.1rem]  flex justify-between items-center ds rounded-full px-2 w-[100%]">
        <div className=" flex items-center gap-4  ">
          <div className=" flex w-[3.1rem] h-[3.1rem] items-center justify-center  shadow-[2px_2px_6px_0px_#D3E7F6,-2px_-2px_6px_0px_#FFFFFF] rounded-xl rounded-bl-[1.9rem] rounded-tl-[1.9rem]  ">
            <img
              className="w-[1.25rem] h-[1.25rem] object-contain"
              src={icon}
              alt="icon"
            ></img>
          </div>
          <div className="w-[9.75rem] ">
            <h2 className="font-[700] leading-[1.2rem]">{heading}</h2>
            <p className="font-[600] text-[0.75rem] leading-[0.91rem] text-[#83828E]">
              {text}
            </p>
          </div>
        </div>
        <div className="relative flex justify-center items-center px-3">
          <img
            className="w-[2.5rem] h-[2.5rem] "
            src="/payments/ellipse.png"
            alt="ellipse"
          ></img>
          {isClicked && (
            <div className="w-[0.75rem] h-[0.75rem] bg-[#FF8412] rounded-full absolute shadow-[0px_0px_6px_1px_#E0965B] "></div>
          )}
        </div>
      </div>
      {heading !== "Cash" && isClicked &&  (
        <p className="font-[600] text-[0.625rem] leading-[0.75rem] px-3">
          Choose <span className="text-[#FF8412]">Cash-Pay at clinic</span>{" "}
          ,Currently {heading} is unavailable
        </p>
      )}
    </div>
  );
}

export default Pinputs;
