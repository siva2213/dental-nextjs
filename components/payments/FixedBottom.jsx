import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../atom/ModalState";

function FixedBottom() {
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  return (
    <div className=" flex justify-between items-center px-5 w-full  h-[6.25rem] fixed bottom-0 left-0 right-0 rounded-t-[1.9rem] rounded-b-2xl bg-[#423D80] z-50 ">
      <div className="flex justify-between  w-[5rem] ">
        <img
          className="w-[1.25rem] h-[1.25rem]"
          src="/payments/push.png"
          alt="push"
        ></img>
        <img
          className="w-[1.25rem] h-[1.25rem]"
          src="/payments/whatsapp.png"
          alt="whatsapp"
        ></img>
      </div>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#FF8412] max-w-[7.4rem] w-full min-w-[6.25rem]  h-[3.13rem] rounded-full flex justify-center items-center text-white shadow-[0px_0px_20px_0px_#E0965B] "
      >
        <p className="font-[700] text-[0.81rem] leading-[0.725]">Proceed</p>
      </div>

      <div className="flex justify-between  w-[5rem]">
        <img
          className="w-[1.25rem] h-[1.25rem]"
          src="/payments/phone.png"
          alt="phone"
        ></img>

        <div className="w-[4.4rem] h-[4.4rem] shadow-[inset_-4px_-4px_30px_0px_#5A54A0,inset_4px_4px_30px_0px_#211D15] flex justify-center items-center rounded-full mx-4">
          <img
            className="w-[1.75rem] h-[1.75rem]"
            src="/home/mode.png"
            alt="mode"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default FixedBottom;
