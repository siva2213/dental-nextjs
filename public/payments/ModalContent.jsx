import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../atom/ModalState";

function ModalContent() {
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  return (
    <div className="bg-[#F2F7FB] shadow-[0px_0px_20px_0px_#AEC4D6] p-5 flex flex-col gap-3   ">
      <div className="flex justify-end">
        <img
          onClick={() => setIsOpen(false)}
          className="w-[1.3rem] h-[1.3rem]"
          src="/payments/x.png"
        ></img>
      </div>
      <div className="flex justify-center">
        <img
          className="w-[4.7rem] h-[4rem] "
          src="/payments/confirm_image.png"
        ></img>
      </div>

      <p className="font-[700] leading-[1.25rem] text-center px-4">
        Neil, Your appointment is confirmed with our doctor.
      </p>
      <p className="leading-[1.88rem] text-[1.5rem] font-[700] text-[#FF8412] text-center ">
        10:30 am <span className="text-[#FF841280]/50">|</span> Dr. Angelina
      </p>
      <p className="font-[400] text-[13px] text-center px-14  text-[#83828E]">
        MONDAY, JUNE 16, 2022 12/2, Mathura Road, Sector 37 Faridabad - Delhi
      </p>
      <div className="flex items-center flex-col gap-1">
        <div className="text-white font-[900] text-[1.25rem] leading-6    w-[16.9rem]  h-[3.6rem] shadow-[10px_10px_20px_4px_#D2E1ED,-10px_-10px_20px_0px_#FFFFFF] flex items-center justify-center bg-gradient-to-br from-[#ACA4FE] via-[#5C55AB]  to-[#2B275A] rounded-full ">
          My Appointment
        </div>
        <p className="font-[400] text-[8px] leading-[10px] px-5">
          You can <span className="font-[600]">Cancel</span> or{" "}
          <span className="font-[600] ">Reschedule</span> appointment by
          entering My Appointment, You can also see clinic map and contact
          doctor via Voice call or WhatsApp.
        </p>
      </div>
    </div>
  );
}

export default ModalContent;
