import React from "react";
import { useRecoilState } from "recoil";
import { darkMode } from "../../atom/DarkMode.js";
import fixed_header from "../../images/fixed_header.png";
import fixed_header_dark from "../../images/fixed_header_dark.png";

function FixedHeader() {
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkMode);
  return (
    <div
      className=" fixed left-0 right-0  h-[4rem] z-50   text-black dark:text-white "
      style={{
        backgroundImage: `url(${
          isDarkMode ? fixed_header_dark.src : fixed_header.src
        })`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 97%",
      }}
    >
      <img
        className="relative top-[1.4rem] left-[1.6rem] h-[1.6rem] w-[1.6rem]"
        src={isDarkMode ? "/home/menu_dark.png" : "/home/menu.png"}
      ></img>
      <img
        className=" h-[1.6rem] w-[1.6rem] top-[-0.1rem] left-[23.7rem] relative "
        src={isDarkMode ? "/home/settings_dark.png" : "/home/settings.png"}
      ></img>
      <div className=" relative bg-[#F2F7FB] dark:bg-[#272651] top-[-0.7rem]  left-[4rem] flex justify-around shadow-[0px_0px_10px_rgba(0,0,0,0.15)] rounded-full  w-[18.7rem] h-[2rem]">
        <div className=" flex justify-evenly px-2 items-center w-[6.9rem]  rounded-full  ">
          <img
            className="w-[1.125rem] h-[1.125rem]"
            src="/home/cities.png"
            alt="cities"
          ></img>
          <p className=" font-[800] text-[0.625rem] leading-[0.8rem] ">
            50 Cities
          </p>
        </div>
        <div className=" flex justify-evenly px-2 gap-1 items-center w-[8rem]  rounded-full  ">
          <img
            className="w-[0.94rem] h-[1.125rem]"
            src="/home/patients.png"
            alt="patients"
          ></img>
          <p className=" font-[800] text-[0.625rem] leading-[0.8rem] whitespace-nowrap ">
            1 Lakh Patients
          </p>
        </div>
        <div className=" flex justify-evenly px-2  items-center w-[6.9rem] rounded-full  ">
          <img
            className="w-[0.813rem] h-[1.125rem]"
            src="/home/clinics.png"
            alt="clinic"
          ></img>
          <p className=" font-[800] text-[0.625rem] leading-[0.8rem] ">
            60 Clinics
          </p>
        </div>
      </div>
    </div>
  );
}

export default FixedHeader;
