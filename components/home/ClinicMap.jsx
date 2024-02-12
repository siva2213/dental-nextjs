import React from "react";

function ClinicMap() {
  return (
    <div className="clinic_map ">
      <div className="flex gap-[1.3rem]">
        <img
          className="w-[10.81rem] h-[7.75rem] dark:bg-[linear-gradient(113.96deg,rgba(51,44,108,0.5)_0%,rgba(19,16,64,0.5)_100%)]  "
          src="/home/clinic.png"
          alt="clinic"
        ></img>
        <div className=" flex flex-col gap-[1rem] ">
          <div>
            <h2 className="font-[700] text-[1rem] leading-[1.162] dark:text-white ">
              Dental Clinic
            </h2>
            <span className=" text-[#FF8412] font-[400] text-[0.69rem] ">
              12/2, Mathura Road, Sector 37, Faridabad - Delhi
            </span>
          </div>

          <div className=" w-[8.5rem] dark:bg-[#222146] h-[3rem] rounded-l-[0.625rem] rounded-r-[1.875rem]  flex justify-center items-center   bg-[linear-gradient(130.06deg,#ACA4FE_0%,#5C55AB_35.33%,#2B275A_75.68%)]">
            <p className="font-[700]  text-white ">Open Map</p>
          </div>
        </div>
      </div>

      <div className="bg-[#2B275A] dark:bg-[#1D1C43] absolute top-[11rem] -left-[1.56rem] -right-[1.56rem] ">
        <div className="flex">
          <div className="flex flex-col gap-3 max-w-[55%] pl-[1rem] py-[1.5rem]">
            <div className="flex items-center gap-2 ">
              <img
                className="w-[1.25rem] h-[1.25rem]"
                src="/home/smile.png"
                alt="smile"
              ></img>

              <h1 className="text-white font-[900] text-[1rem] leading-5 ">
                DOCTOR-DENTIST
              </h1>
            </div>
            <p className="font-[300] text-[0.625rem] max-w-[20rem] text-white  leading-[0.78rem] pb-8   ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>

            <div className="flex gap-5 pb-4">
              <img
                className="h-[1.8rem] w-[5.5rem] rounded"
                src="/home/google_store.png"
                alt="google"
              ></img>
              <img
                className=" h-[1.8rem] w-[5.5rem] rounded"
                src="/home/apple_store.png"
                alt="apple"
              ></img>
            </div>
          </div>
          <div className="">
            <img
              className="absolute right-0 bottom-0 w-[21rem]   "
              src="/home/smartphone.png"
              alt="phone"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClinicMap;
