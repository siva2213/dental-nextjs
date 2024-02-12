import React, { useState } from "react";

function Coupons() {
  const [c1, setC1] = useState(false);
  const [c2, setC2] = useState(false);
  return (
    <div className="flex flex-col gap-6">
      <div className="  relative">
        <img
          className=" rounded-[1.27rem] shadow-[-10px_-10px_20px_#FFFFFF,10px_10px_20px_#D3E7F7]   "
          src="/invoice/coupon1.png"
          alt="coupon"
        ></img>
        <p className=" absolute top-20   text-white font-[900] leading-[1.88rem]  text-[1.5rem]  -rotate-90  ">
          Rs.100 Off
        </p>
        <p className="absolute top-4 right-24 font-[800] text-[1rem] leading-5 text-white ">
          COUPON
        </p>
        <div className="w-[14.4rem] absolute top-14 right-6">
          <h1 className="font-[900] text-[1.5rem] leading-[1.875rem]">
            CONSULT100
          </h1>
          <p className="font-[700] w-[7rem] pb-1 text-[#83828E] leading-4 text-[0.81rem]">
            Get Discount On Technology Fee
          </p>
          <section className="flex justify-between items-end">
            <p className="font-[700] text-[0.375rem]  leading-[0.47rem] text-[#83828E]">
              T&C Applies*
            </p>
            <div
              onClick={() => setC1(!c1)}
              className={`flex items-center justify-center text-white    w-[7.2rem] h-[2.063rem] rounded-r-[1.875rem] font-[700] text-[0.813rem] leading-[0.69rem] rounded-l-[0.5rem] shadow-[-10px_-10px_10px_#FFFFFF,10px_10px_10px_4px_#D2E1ED]   ${
                c1
                  ? "bg-[linear-gradient(130.06deg,#D4D0FF_0%,#8D88D6_35.33%,#7C76BA_75.68%)] "
                  : "bg-[linear-gradient(130.06deg,#ACA4FE_0%,#5C55AB_35.33%,#2B275A_75.68%)]"
              }   `}
            >
              {c1 ? " APPLIED " : " REDEEM "}
            </div>
          </section>
        </div>
      </div>
      <div className="  relative">
        <img
          className=" rounded-[1.27rem] shadow-[-10px_-10px_20px_#FFFFFF,10px_10px_20px_#D3E7F7]   "
          src="/invoice/coupon1.png"
          alt="coupon"
        ></img>
        <p className=" absolute top-20   text-white font-[900] leading-[1.88rem]  text-[1.5rem]  -rotate-90  ">
          Rs.100 Off
        </p>
        <p className="absolute top-4 right-24 font-[800] text-[1rem] leading-5 text-white ">
          COUPON
        </p>
        <div className="w-[14.4rem] absolute top-14 right-6">
          <h1 className="font-[900] text-[1.5rem] leading-[1.875rem]">
            HEALTH100
          </h1>
          <p className="font-[700] w-[7rem] pb-1 text-[#83828E] leading-4 text-[0.81rem]">
            Get Discount On Service Fee
          </p>
          <section className="flex justify-between items-end">
            <p className="font-[700] text-[0.375rem]  leading-[0.47rem] text-[#83828E]">
              T&C Applies*
            </p>
            <div
              onClick={() => setC2(!c2)}
              className={`flex items-center justify-center text-white    w-[7.2rem] h-[2.063rem] rounded-r-[1.875rem] font-[700] text-[0.813rem] leading-[0.69rem] rounded-l-[0.5rem] shadow-[-10px_-10px_10px_#FFFFFF,10px_10px_10px_4px_#D2E1ED]   ${
                c2
                  ? "bg-[linear-gradient(130.06deg,#D4D0FF_0%,#8D88D6_35.33%,#7C76BA_75.68%)] "
                  : "bg-[linear-gradient(130.06deg,#ACA4FE_0%,#5C55AB_35.33%,#2B275A_75.68%)]"
              }   `}
            >
              {c2 ? " APPLIED " : " REDEEM "}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Coupons;
