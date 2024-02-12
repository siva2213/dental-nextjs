
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useRecoilState } from "recoil";
import {modalState} from "../../atom/ModalState"


function FixedBottom() {
  const router = useRouter();
  const [isOpen,setIsOpen] = useRecoilState(modalState);
    
    const styles = {
        image : "w-[20px] h-[20px]"
  }
  
  return (
    <div className=" flex justify-between items-center px-5 w-full  h-[100px] fixed bottom-0 left-0 right-0 rounded-t-[30px] rounded-b-2xl bg-[#423D80] z-50 ">
      <div className="flex justify-between  w-[80px] ">
        <img className={styles.image} src="/payments/push.png"></img>
        <img className={styles.image} src="/payments/whatsapp.png"></img>
      </div>
      <Link href="/payments?confirmation=true">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#FF8412] max-w-[118px] w-full min-w-[100px]  h-[50px] rounded-full flex justify-center items-center text-white shadow-[0px_0px_20px_0px_#E0965B] "
        >
          <p className="font-[700] text-[13px] leading-[11.6px]">Proceed</p>
        </div>
      </Link>

      <div className="flex justify-between  w-[80px]">
        <img className={styles.image} src="/payments/phone.png"></img>
        
        <div className="w-[70px] h-[70px] shadow-[inset_-4px_-4px_30px_0px_#5A54A0,inset_4px_4px_30px_0px_#211D15] flex justify-center items-center rounded-full mx-4">
          <img className="w-[28px] h-[28px]" src="/mode.png"></img>
        </div>
      </div>
    </div>
  );
}

export default FixedBottom;
