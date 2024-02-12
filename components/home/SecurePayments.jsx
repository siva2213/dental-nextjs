import React from "react";

function SecurePayments() {
  return (
    <div className="absolute bottom-0 bg-[#2B275A] dark:bg-[#222146] -right-[1.56rem] -left-[1.56rem] p-1 ">
      <h1 className="text-white font-[900] text-[1rem] leading-5 p-4">
        {" "}
        Secured Payments
      </h1>

      <div className="grid grid-cols-2 gap-9 max-w-[40%]  p-4">
        <div className="w-[3.125rem] h-[2rem] bg-[#F2F7FB] flex items-center justify-center rounded-[0.625rem]">
          <img src="/home/gpay.png" alt="gapy"></img>
        </div>

        <div className="w-[3.125rem] h-[2rem] bg-[#F2F7FB] flex items-center justify-center rounded-[0.625rem]">
          <img src="/home/paytm.png" alt="gapy"></img>
        </div>
        <div className="w-[3.125rem] h-[2rem] bg-[#F2F7FB] flex items-center justify-center rounded-[0.625rem]">
          <img src="/home/phonepe.png" alt="gapy"></img>
        </div>
        <div className="w-[3.125rem] h-[2rem] bg-[#F2F7FB] flex items-center justify-center rounded-[0.625rem]">
          <img src="/home/upi.png" alt="gapy"></img>
        </div>
        <div className="w-[3.125rem] h-[2rem] bg-[#F2F7FB] flex items-center justify-center rounded-[0.625rem]">
          <img src="/home/master.png" alt="gapy"></img>
        </div>
        <div className="w-[3.125rem] h-[2rem] bg-[#F2F7FB] flex items-center justify-center rounded-[0.625rem]">
          <img src="/home/rupay.png" alt="gapy"></img>
        </div>
      </div>
      <img
        className=" absolute bottom-0 right-[7rem]    w-[10rem]"
        src="/home/p1.png"
        alt="payment"
      ></img>
      <img
        className="absolute top-0 right-0  w-[10rem]"
        src="/home/p2.png"
        alt="payment"
      ></img>
    </div>
  );
}

export default SecurePayments;
