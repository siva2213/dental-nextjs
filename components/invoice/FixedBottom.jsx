import React from "react";

function FixedBottom() {
  return (
    <div className=" fixed_bottom px-3 scale-y-[75%] bottom-[-0.9rem]  ">
      <div className="flex flex-col items-center gap-2 text-center">
        <div className=" flex  w-[2.82rem] h-[2.82rem] rounded-full bg-[#423D80] shadow-[inset_-4px_-4px_30px_#5A54A0,inset_4px_4px_30px_#211D56]">
          <img
            className=" m-auto w-[1.3rem] h-[1.25rem]"
            src="/home/moon.png"
            alt="moon"
          ></img>
        </div>
        <p className="text-white font-[700] text-[0.625rem] leading-[0.65rem] whitespace-nowrap ">
          Dark Mode
        </p>
      </div>
      <div className="flex gap-2 flex-col items-center ]">
        <div className="flex rounded-full w-[2.82rem] h-[2.82rem] bg-[rgba(66,61,128,0.05)] shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.08),inset_2px_2px_4px_rgba(0,0,0,0.1)]">
          <img
            className="m-auto w-[1.25rem] h-[1.25rem]"
            src="/invoice/home.png"
            alt="home"
          ></img>
        </div>
        <p className="text-white font-[700] text-[0.625rem] leading-[0.775rem]">
          Home
        </p>
      </div>
      <div className="flex gap-2 flex-col items-center">
        <div className="flex rounded-full w-[2.82rem] h-[2.82rem] bg-[rgba(66,61,128,0.05)] shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.08),inset_2px_2px_4px_rgba(0,0,0,0.1)]">
          <img
            className="m-auto w-[1.25rem] h-[1.25rem]"
            src="/home/whatsapp.png"
            alt="whatsapp"
          ></img>
        </div>
        <p className="text-white font-[700] text-[0.625rem] leading-[0.775rem]">
          Whatsapp
        </p>
      </div>

      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="flex rounded-full w-[2.82rem] h-[2.82rem] bg-[rgba(66,61,128,0.05)] shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.08),inset_2px_2px_4px_rgba(0,0,0,0.1)]">
          <img
            className="m-auto w-[1.25rem] h-[1.25rem]"
            src="/home/phoneicon.png"
            alt="phoneicon"
          ></img>
        </div>
        <p className="text-white font-[700] text-[0.625rem] leading-[0.775rem]">
          Call
        </p>
      </div>
      <div className=" flex items-center justify-center rounded-full bg-[#423D80]  w-[7.4rem] h-[3.125rem] shadow-[inset_-4px_-4px_30px_#5A54A0,inset_4px_4px_30px_#211D56] text-white font-[700] text-[1rem] leading-[0.84rem]  ">
        {" "}
        Proceed{" "}
      </div>
    </div>
  );
}

export default FixedBottom;
