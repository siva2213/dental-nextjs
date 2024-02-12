import React from "react";
import { useRecoilState } from "recoil";
import { darkMode } from "../../atom/DarkMode";

export default function Bottom() {
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkMode);
  return (
    <div className=" fixed_bottom dark:bg-[#272651] scale-y-[75%] bottom-[-1rem]  ">
      <div className="flex gap-6 pt-1">
        <div className="flex  flex-col items-center ">
          <div className="flex rounded-full w-[2.82rem]  h-[2.82rem] bg-[rgba(66,61,128,0.05)] shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.08),inset_2px_2px_4px_rgba(0,0,0,0.1)]">
            <img
              className="m-auto w-[1rem] h-[1.25rem]"
              src="/home/mapicon.png"
              alt="booking"
            ></img>
          </div>
          <p className="text-white font-[700] text-[0.625rem] leading-[0.775rem]">
            DR.Julie
          </p>
          <div className="flex items-center gap-1  text-white font-[700] text-[0.625rem] leading-[0.775rem]">
            Delhi{" "}
            <p className=" rounded-full  w-[0.313rem] h-[0.313rem] bg-[#FF8412] shadow-[0px_0px_5px_2px_rgba(224,150,91,0.61)]"></p>
          </div>
        </div>

        <div className="flex gap-2 flex-col items-center ]">
          <div className="flex rounded-full w-[2.82rem] h-[2.82rem] bg-[rgba(66,61,128,0.05)] shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.08),inset_2px_2px_4px_rgba(0,0,0,0.1)]">
            <img
              className="m-auto w-[1.25rem] h-[1.07rem]"
              src="/home/booking.png"
              alt="booking"
            ></img>
          </div>
          <p className="text-white font-[700] text-[0.625rem] leading-[0.775rem]">
            Booking
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div
          onClick={() => {
            setIsDarkMode(!isDarkMode);
          }}
          className=" flex   w-[4.31rem] h-[4.125rem] rounded-full bg-[#423D80] dark:bg-[#D27D2F] dark:shadow-[inset_-4px_-4px_30px_#FF7B00,inset_4px_4px_30px_#D06400] shadow-[inset_-4px_-4px_30px_#5A54A0,inset_4px_4px_30px_#211D56]"
        >
          <img
            className=" m-auto w-[1.7rem] h-[1.7rem]"
            src="/home/moon.png"
            alt="moon"
          ></img>
        </div>
        <p className="text-white font-[700] text-[0.5rem] leading-[0.65rem] ">
          Dark Mode
        </p>
      </div>
      <div className="flex gap-6">
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

        <div className="flex justify-between flex-col items-center">
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
      </div>
    </div>
  );
}
