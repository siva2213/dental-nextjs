import React from "react";

function NavBottom() {
    return (
      <div className="bg-[#2B275A] flex flex-col  ">
        <div className=" p-4 flex items-center ">
          <div className="flex flex-col gap-3">
            <h1 className="text-[#FF8412]   font-[600] leading-5 text-[1rem]">
              For full access download app now!
            </h1>
            <div className="text-white flex gap-3">
              <div className="flex items-center gap-1">
                <div className="w-[1.2rem] h-[1.2rem] rounded-full flex shadow-[-2px_-2px_4px_#322E64,2px_2px_4px_#211D4D]">
                  <img
                    className="w-[0.56rem] h-[0.56rem] m-auto "
                    src="/navigation/appointmento.png"
                    alt="appoint"
                  ></img>
                </div>
                <p className="font-[600] text-[0.625rem] leading-3">
                  Appointment Details
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[1.2rem] h-[1.2rem] rounded-full flex shadow-[-2px_-2px_4px_#322E64,2px_2px_4px_#211D4D]">
                  <img
                    className="w-[0.56rem] h-[0.56rem] m-auto "
                    src="/navigation/persono.png"
                    alt="appoint"
                  ></img>
                </div>
                <p className="font-[600] text-[0.625rem] leading-3">
                  Editing Profile
                </p>
              </div>
            </div>
            <div className="text-white flex gap-3">
              <div className="flex items-center gap-1">
                <div className="w-[1.2rem] h-[1.2rem] rounded-full flex shadow-[-2px_-2px_4px_#322E64,2px_2px_4px_#211D4D]">
                  <img
                    className="w-[0.56rem] h-[0.56rem] m-auto "
                    src="/navigation/paymento.png"
                    alt="appoint"
                  ></img>
                </div>
                <p className="font-[600] text-[0.625rem] leading-3">
                  Payment Details
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[1.2rem] h-[1.2rem] rounded-full flex shadow-[-2px_-2px_4px_#322E64,2px_2px_4px_#211D4D]">
                  <img
                    className="w-[0.56rem] h-[0.56rem] m-auto "
                    src="/navigation/doctoro.png"
                    alt="appoint"
                  ></img>
                </div>
                <p className="font-[600] text-[0.625rem] leading-3">
                  Doctor Details
                </p>
              </div>
            </div>
          </div>
          <div className="ml-auto flex flex-col gap-2">
            <img
              className="w-[5.625rem] h-[1.88rem]"
              src="/home/google_store.png"
              alt="google"
            ></img>
            <img
              className="w-[5.625rem] h-[1.88rem]"
              src="/home/apple_store.png"
              alt="google"
            ></img>
          </div>
        </div>
        <img className="h-[8rem] w-[24.3rem] mx-auto" src="/navigation/pic.png" alt="nav"></img>
      </div>
    );
}

export default NavBottom;
