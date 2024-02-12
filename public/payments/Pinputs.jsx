import React, { useState } from "react";

function Pinputs({ icon }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div
      onClick={() => setIsClicked(!isClicked)}
      className="flex flex-col gap-1 cursor-pointer"
    >
      <div className="h-[65px] max-w-[368px] flex justify-between items-center ds rounded-full px-2">
        <div className=" flex items-center gap-4  ">
          <div className=" flex w-[49px] h-[49px] items-center justify-center  shadow-[2px_2px_6px_0px_#D3E7F6,-2px_-2px_6px_0px_#FFFFFF] rounded-xl rounded-bl-[30px] rounded-tl-[30px]  ">
            <img className="w-[20px] h-[20px] object-contain" src={icon}></img>
          </div>
          <div className="w-[156px] ">
            <h2 className="font-[700] leading-[19px]">Cash</h2>
            <p className="font-[600] text-[12px] leading-[14.5px] text-[#83828E]">
              Pay At Clinic
            </p>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <img className="w-[32px] h-[32px] " src="/payments/ellipse.png"></img>
          {isClicked && (
            <div className="w-[12px] h-[12px] bg-[#FF8412] rounded-full absolute shadow-[0px_0px_6px_1px_#E0965B] "></div>
          )}
        </div>
      </div>
      <p className="font-[600] text-[10px] leading-[12.4px] px-3">
        Choose <span className="text-[#FF8412]">Cash-Pay at clinic</span>{" "}
        ,Currently UPI is unavailable
      </p>
    </div>
  );
}

export default Pinputs;
