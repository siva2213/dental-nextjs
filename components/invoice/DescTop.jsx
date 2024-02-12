import React from 'react'

function DescTop() {
  return (
    <div className=" fixed left-[1.56rem] w-[23.6rem] h-[3.5rem] right-[1.56rem] flex justify-around items-center bg-[#3E387C] py-2  rounded-full pr-[0.2rem] z-50  ">
      <img
        className="w-[2.125rem] h-[2.125rem]"
        src="/invoice/backw.png"
        alt="home"
      ></img>

      <div className=" bg-[#3E387C] text-white gap-[0.1rem]   flex justify-around shadow-[0px_0px_8px_3px_#332E64] rounded-full w-[20.2rem] h-[2.5rem]">
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
 
    </div>
  );
}

export default DescTop