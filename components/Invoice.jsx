import React from "react";
import Footer from "./Footer";
import Coupons from "./invoice/Coupons";
import FixedBottom from "./invoice/FixedBottom";
import ReviewSlide from "./invoice/ReviewSlide";
import TopWithBackAndSetting from "./invoice/TopWithBackAndSetting";

function Invoice() {

    
  return (
    <div>
      <div className="flex flex-col gap-10  bg-[#F2F7FB] p-[1.56rem] text-[#211F2B]  font-['Kumbh_Sans'] ">
        <TopWithBackAndSetting />

        <div className="flex gap-5">
          <img
            className="w-[9.44rem] h-[8.88rem] rounded-l-[6.25rem] rounded-r-[1.25rem] shadow-[-10px_-10px_20px_#FFFFFF,10px_10px_20px_#D3E7F7]"
            src="/invoice/doctor.png"
            alt="doctor"
          ></img>
          <section className="flex flex-col justify-between gap-2">
            <div className="flex flex-col gap-1">
              <h1 className="font-[700] text-[1rem] leading-5">
                Dr. Angelina Clayton
              </h1>
              <p className=" font-[600]  text-[#FF8412] text-[0.813rem] leading-4">
                BDS, MDS
              </p>
              <p className=" font-[600]  text-[#FF8412] text-[0.813rem] leading-4">
                Dental Specialist
              </p>
            </div>

            <div className=" flex justify-around items-center text-center   w-[12.3rem] h-[3.9rem] shadow-[-5px_-5px_10px_#FFFFFF,5px_5px_10px_4px_#D2E1ED] rounded-r-[1.9rem] rounded-l-[1.25rem]">
              <section className="flex flex-col gap-1 font-[700]">
                <p className="text-[1rem] leading-[0.88rem] text-[#FF8412]">
                  4.5
                </p>
                <p className="text-[0.7rem] leading-[0.613rem] font-[700] ">
                  Rating
                </p>
              </section>
              <section className="flex flex-col gap-1 font-[700]">
                <p className="text-[1rem] leading-[0.88rem] text-[#FF8412]">
                  3+
                </p>
                <p className="text-[0.7rem] leading-[0.613rem] font-[700] ">
                  Years Exp
                </p>
              </section>
            </div>
          </section>
        </div>
        <p className="font-[400] leading-4 text-[0.875rem] text-[#83828E]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
          nec.........
          <span className="font-[700] cursor-pointer">KNOW MORE</span>
        </p>
        <div className="flex justify-between     font-[600] leading-4 text-[0.813rem] text-white ">
          <div className=" w-[7.25rem] h-[3.56rem] flex items-center justify-center  rounded-r-[1.9rem] rounded-l-[1.25rem]   bg-[linear-gradient(130.06deg,#ACA4FE_0%,#5C55AB_35.33%,#2B275A_75.68%)]">
            <p>Education</p>
          </div>
          <div className=" w-[7.25rem] h-[3.56rem] flex items-center justify-center  rounded-r-[1.9rem] rounded-l-[1.9rem]   bg-[linear-gradient(130.06deg,#ACA4FE_0%,#5C55AB_35.33%,#2B275A_75.68%)]">
            <p>Awards</p>
          </div>
          <div className=" w-[7.25rem] h-[3.56rem] flex items-center justify-center rounded-r-[1.25rem] rounded-l-[1.9rem]   bg-[linear-gradient(130.06deg,#ACA4FE_0%,#5C55AB_35.33%,#2B275A_75.68%)]">
            <p>Experience</p>
          </div>
        </div>

        {/* *************************************************  BILLING DETAILS *************************************** */}

        <h1 className="caption py-2">Billing Details</h1>
        <div className="h-[32.125rem] flex flex-col justify-between  rounded-[1.875rem] p-7 shadow-[inset_-10px_-10px_20px_#FFFFFF,inset_10px_10px_20px_#D3E7F7]">
          <div className="flex justify-between font-[700] text-[0.938rem] leading-[1.163rem] ">
            <p>Consultation Fees</p>
            <p>Rs. 1000</p>
          </div>
          <div className="relative">
            <div className="flex justify-between font-[700] text-[0.938rem] leading-[1.163rem] ">
              <p>Service Fees</p>
              <p className="line-through">Rs. 100</p>
            </div>
            <div className=" absolute right-0 top-6 flex items-center p-1 rounded-full w-[5.94rem] gap-1 ml-auto text-[#FF8412] font-[800] text-[0.625rem] leading-[0.775rem]   shadow-[-5px_-5px_10px_#FFFFFF,5px_5px_10px_#D2E3F0]">
              <p className="ml-auto">HEALTH100</p>
              <img
                className="w-[0.813rem] h-[0.813rem]"
                src="/home/invoicex.png"
                alt="x"
              ></img>
            </div>
          </div>

          <div className="relative">
            <div className="flex justify-between font-[700] text-[0.938rem] leading-[1.163rem] ">
              <p>Technology Fees</p>
              <p className="line-through">Rs. 100</p>
            </div>
            <div className=" absolute right-0 top-6 flex items-center p-1 rounded-full w-[5.94rem] gap-1 ml-auto text-[#FF8412] font-[800] text-[0.625rem] leading-[0.775rem]   shadow-[-5px_-5px_10px_#FFFFFF,5px_5px_10px_#D2E3F0]">
              <p className="ml-auto">CONSULT100</p>
              <img
                className="w-[0.813rem] h-[0.813rem]"
                src="/home/invoicex.png"
                alt="x"
              ></img>
            </div>
          </div>

          <div className="flex justify-between font-[700] text-[0.938rem] leading-[1.163rem] ">
            <p>Test</p>
            <p>-</p>
          </div>
          <div className="flex justify-between font-[700] text-[0.938rem] leading-[1.163rem] ">
            <p>Sugery</p>
            <p>-</p>
          </div>
          <div className="flex justify-between font-[700] text-[0.938rem] leading-[1.163rem] ">
            <p>Medicine</p>
            <p>-</p>
          </div>

          <div className="w-[20.125rem] h-[4.375rem] flex justify-between px-5 rounded-[3rem] items-center  font-[900] text-[1.25rem] shadow-[-10px_-10px_20px_#FFFFFF,10px_10px_20px_#D3E7F7]">
            <p>Total</p>
            <p>Rs. 1000</p>
          </div>
        </div>
        {/* ************************************************** Timings ***************************************** */}
        <div className="relative  p-5    h-[14rem] rounded-l-[1.875rem] rounded-r-[9.375rem] shadow-[-10px_-10px_20px_#FFFFFF,10px_10px_20px_#D3E7F7]">
          <div className="flex flex-col gap-2">
            <h1 className="font-[700] text-[1.5rem]">16 June, 10:30 am</h1>
            <div className="flex gap-7    font-[700] text-[0.93rem] leading-[1.163rem]">
              <section className="flex flex-col gap-1 w-[7.25rem]">
                <p>Patient</p>
                <p>Consultation</p>
                <p>Problem</p>
                <p>Clinic Address</p>
              </section>
              <section className="  text-[#FF8412] flex flex-col gap-1  ">
                <p>Neil Harsis</p>
                <p>Clinic</p>
                <p>Gum Disease</p>
                <p>Dental Clinic</p>
                <p className="   text-[#83828E] font-[400] text-[0.688rem] leading-[0.85rem] w-[6.45rem]">
                  12/2, Mathura Road, Sector 37, Faridabad - Delhi
                </p>
              </section>
            </div>
          </div>
          <div className="absolute right-8  top-20   flex flex-col justify-center items-center">
            <div className="relative flex items-center justify-center ">
              <img
                className=" w-[3.2rem] h-[3.2rem] "
                src="/home/findellipse.png"
                alt="ellipse"
              ></img>

              <div className=" w-[1.68rem] h-[1.68rem] bg-[#DAEBF7] flex items-center justify-center font-[600] rounded-full absolute ">
                <img
                  className="w-[0.5rem] h-[1rem]  "
                  src="/home/gt.png"
                  alt="gt"
                ></img>
              </div>
            </div>
            <p className=" font-[700] text-[0.75rem] leading-[0.938rem]">Map</p>
          </div>
        </div>
        <div className="h-[3.6rem] text-[1.25rem] leading-5 font-[900] flex text-white items-center justify-center  bg-[linear-gradient(130.06deg,#ACA4FE_0%,#5C55AB_35.33%,#2B275A_75.68%)] shadow-[-10px_-10px_20px_#FFFFFF,10px_10px_20px_4px_#D2E1ED] rounded-[1.875rem]">
          Proceed
        </div>

        {/* **************************************** Coupons ************************************* */}
        <h1 className="caption py-2">Coupons</h1>
        <Coupons />
   
    
      </div>
      {/* ******************************* Reviews ***************************** */}
      <div className="w-screen ">
        <h1 className="caption py-2 pl-[1.56rem] bg-[#F2F7FB] ">Reviews</h1>

        <ReviewSlide />
      </div>
      <Footer />
      <FixedBottom />
    </div>
  );
}

export default Invoice;
