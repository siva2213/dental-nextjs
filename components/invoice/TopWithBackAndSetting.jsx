import React from "react";

function TopWithBackAndSetting() {
  return (
    <div className=" flex justify-between items-center  ">
      <img
        className="w-[2.125rem] h-[2.125rem]"
        src="/home/back.png"
        alt="home"
      ></img>

      <div className=" bg-[#F2F7FB] text-[#211F2B] gap-[0.1rem]   flex justify-around shadow-[-5px_-5px_10px_#FFFFFF,5px_5px_10px_#D3E7F7] rounded-full w-[17.6rem] h-[2.5rem]">
        <div className=" flex justify-evenly  items-center w-[6.9rem] h-[2.5rem] rounded-full  ">
          <img
            className="w-[1.063rem] h-[1.063rem]"
            src="/home/cities.png"
            alt="cities"
          ></img>
          <p className=" font-[800] text-[0.75rem] leading-[0.93rem] ">
            50 Cities
          </p>
        </div>
        <div className=" flex justify-evenly  gap-1 items-center w-[8rem] h-[2.5rem] rounded-full  ">
          <img
            className="w-[0.94rem] h-[1.063rem]"
            src="/home/patients.png"
            alt="patients"
          ></img>
          <p className=" font-[800] text-[0.75rem] leading-[0.93rem] whitespace-nowrap ">
            1 Lakh Patients
          </p>
        </div>
        <div className=" flex justify-evenly  items-center w-[6.9rem] h-[2.5rem] rounded-full  ">
          <img
            className="w-[0.813rem] h-[1.063rem] "
            src="/home/clinics.png"
            alt="clinic"
          ></img>
          <p className=" font-[800] text-[0.75rem] leading-[0.93rem] ">
            60 Clinics
          </p>
        </div>
      </div>
      <img
        className="w-[1.57rem] h-[1.57rem]"
        src="/home/settings.png"
        alt="settings"
      ></img>
    </div>
  );
}

export default TopWithBackAndSetting;
