import React from "react";

function Footer() {
  return (
    <div className="bg-[#2B275A] flex flex-col p-[1rem] pb-[8rem] gap-8 ">
      <div className="text-white font-[700] text-[0.813rem] leading-4 flex flex-col gap-3">
        <h2 className="text-[#9593AC] font-[600] pb-2">Quick Access</h2>
        <p className="">Home</p>
        <p>Booking</p>
        <p>Doctors List</p>
        <p>Doctor Of The Month</p>
        <p>Problems</p>
        <p>Insurance</p>
      </div>
      <div className="flex gap-2">
        <img
          className="w-[2.5rem] h-[2.5rem]"
          src="/home/smile.png"
          alt="smile"
        ></img>
        <div>
          <h1 className="text-white font-[900] text-[0.94rem] ">
            DOCTOR-DENTIST
          </h1>
          <p className="text-[#FF8412] font-[700] text-[0.75rem]">
            Serving Generations Of People With Quality Healthcare
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className=" flex justify-evenly px-2 items-center w-[6.9rem] h-[2.5rem] rounded-full  shadow-[-5px_-5px_10px_#342F69,5px_5px_10px_#262254]">
          <img
            className="w-[1.125rem] h-[1.125rem]"
            src="/home/cities.png"
            alt="cities"
          ></img>
          <p className="text-white font-[700] text-[0.813rem] leading-[1rem]">
            50 Cities
          </p>
        </div>
        <div className=" flex justify-evenly px-2 items-center w-[8rem] h-[2.5rem] rounded-full  shadow-[-5px_-5px_10px_#342F69,5px_5px_10px_#262254]">
          <img
            className="w-[0.94rem] h-[1.125rem]"
            src="/home/patients.png"
            alt="patients"
          ></img>
          <p className="text-white font-[700] text-[0.813rem] leading-[1rem] whitespace-nowrap">
            1Lakh Patients
          </p>
        </div>
        <div className=" flex justify-evenly px-2 items-center w-[6.9rem] h-[2.5rem] rounded-full  shadow-[-5px_-5px_10px_#342F69,5px_5px_10px_#262254]">
          <img
            className="w-[0.813rem] h-[1.125rem]"
            src="/home/clinics.png"
            alt="clinic"
          ></img>
          <p className="text-white font-[700] text-[0.813rem] leading-[1rem]">
            60 Clinics
          </p>
        </div>
      </div>
      {/* ***********************Play store *************** */}
      <div className="flex gap-5">
        <img
          className="h-[2.18rem] w-[6.9rem] rounded"
          src="/home/google_store.png"
          alt="google"
        ></img>
        <img
          className=" h-[2.18rem] w-[6.9rem] rounded"
          src="/home/apple_store.png"
          alt="apple"
        ></img>
      </div>
      <div className="flex flex-col gap-3 text-white font-[700] text-[0.813rem] leading-4">
        <div>About Us</div>
        <div>Privacy Policy</div>
        <div> Terms and Conditions </div>
      </div>
    </div>
  );
}

export default Footer;
