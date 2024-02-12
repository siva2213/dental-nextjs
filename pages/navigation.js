import React from "react";
import NavBottom from "../components/invoice/NavBottom";

import TopWithBackAndSetting from "../components/invoice/TopWithBackAndSetting";

function Navigation() {
  return (
    <div className="bg-[#F2F7FB] pb-14 text-[#211F2B]">
      <div className=" p-[1.56rem] flex flex-col gap-12 pb-10  text-[#211F2B]">
        <TopWithBackAndSetting />
        <div className="flex items-center gap-6 ">
          <img
            className="w-[5.9rem] h-[5.9rem] ds rounded-full"
            src="/invoice/avatar.png"
            alt="avatar"
          ></img>
          <h2 className="font-[800] text-[1.25rem] leading-[1.6rem]">Guest</h2>
          <div className="flex items-center ml-auto justify-center text-white font-[700] rounded-full leading-[1.163rem] w-[7.5rem] h-[2.6rem]   bg-[linear-gradient(130.06deg,#ACA4FE_0%,#5C55AB_35.33%,#2B275A_75.68%)]">
            Login
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="ds rounded-full flex h-[3.125rem] items-center gap-4 px-4 pl-8">
            <img
              className="w-[1.25rem] h-[1.125rem]"
              src="/invoice/appointment.png"
              alt="appoint"
            ></img>
            <h1 className="font-[600] text-[1.125rem] leading-[1.4rem]">
              Upcoming Appointments
            </h1>
            <div className="ml-auto w-[1.875rem] h-[1.875rem]   shadow-[inset_-2px_-2px_4px_#FFFFFF,inset_2px_2px_4px_#D3E7F6,3px_3px_4px_#D3E7F6,-3px_-3px_4px_#FFFFFF] rounded-full flex">
              <div className="w-[1.063rem] h-[1.063rem] bg-[linear-gradient(135deg,#FFFFFF_0%,#D3E7F6_100%)] rounded-full m-auto flex ">
                <img
                  className="m-auto w-[0.313rem] h-[0.625rem] "
                  src="/invoice/gt.png"
                  alt="gt"
                ></img>
              </div>
            </div>
          </div>
          <div className="ds rounded-full flex h-[3.125rem] items-center gap-4 px-4 pl-8">
            <img
              className="w-[1.25rem] h-[1.125rem]"
              src="/invoice/prev.png"
              alt="appoint"
            ></img>
            <h1 className="font-[600] text-[1.125rem] leading-[1.4rem]">
              Upcoming Appointments
            </h1>
            <div className="ml-auto w-[1.875rem] h-[1.875rem] shadow-[inset_-2px_-2px_4px_#FFFFFF,inset_2px_2px_4px_#D3E7F6,3px_3px_4px_#D3E7F6,-3px_-3px_4px_#FFFFFF] rounded-full flex">
              <div className="w-[1.063rem] h-[1.063rem] bg-[linear-gradient(135deg,#FFFFFF_0%,#D3E7F6_100%)] rounded-full m-auto flex ">
                <img
                  className="m-auto w-[0.313rem] h-[0.625rem] "
                  src="/invoice/gt.png"
                  alt="gt"
                ></img>
              </div>
            </div>
          </div>
          <div className="ds rounded-full flex h-[3.125rem] items-center gap-4 px-4 pl-8">
            <img
              className="w-[1.25rem] h-[1.5rem]"
              src="/invoice/terms.png"
              alt="appoint"
            ></img>
            <h1 className="font-[600] text-[1.125rem] leading-[1.4rem]">
              Privacy, Terms & Condition
            </h1>
            <div className="ml-auto w-[1.875rem] h-[1.875rem] shadow-[inset_-2px_-2px_4px_#FFFFFF,inset_2px_2px_4px_#D3E7F6,3px_3px_4px_#D3E7F6,-3px_-3px_4px_#FFFFFF] rounded-full flex">
              <div className="w-[1.063rem] h-[1.063rem] bg-[linear-gradient(135deg,#FFFFFF_0%,#D3E7F6_100%)] rounded-full m-auto flex ">
                <img
                  className="m-auto w-[0.313rem] h-[0.625rem] "
                  src="/invoice/gt.png"
                  alt="gt"
                ></img>
              </div>
            </div>
          </div>
          <div className="ds rounded-full flex h-[3.125rem] items-center gap-4 px-4 pl-8">
            <img
              className="w-[1.25rem] h-[1.55rem]"
              src="/invoice/logout.png"
              alt="appoint"
            ></img>
            <h1 className="font-[600] text-[1.125rem] leading-[1.4rem]">
              Log Out
            </h1>
            <div className="ml-auto w-[1.875rem] h-[1.875rem] shadow-[inset_-2px_-2px_4px_#FFFFFF,inset_2px_2px_4px_#D3E7F6,3px_3px_4px_#D3E7F6,-3px_-3px_4px_#FFFFFF] rounded-full flex">
              <div className="w-[1.063rem] h-[1.063rem] bg-[linear-gradient(135deg,#FFFFFF_0%,#D3E7F6_100%)] rounded-full m-auto flex ">
                <img
                  className="m-auto w-[0.313rem] h-[0.625rem] "
                  src="/invoice/gt.png"
                  alt="gt"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ************************************ Bottom **********************************/}

      <NavBottom />
    </div>
  );
}

export default Navigation;
