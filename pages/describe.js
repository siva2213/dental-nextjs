import React from "react";
import DescRating from "../components/invoice/DescRating";
import DescTop from "../components/invoice/DescTop";
import FixedBottom from "../components/home/Bottom";

function Desc() {
  return (
    <div className="bg-[#F2F7FB] flex flex-col pb-[10rem] text-[#211F2B] gap-6 w-full min-h-full p-[1.56rem] ">
      <DescTop />
      <div className="pt-[5rem] flex justify-between items-end">
        <div className="h-[6.4rem] w-[4.25rem] ds flex gap-2 mb-5 flex-col items-center justify-center text-white font-[700] rounded-[6.25rem] bg-[linear-gradient(130.06deg,#ACA4FE_0%,#5C55AB_35.33%,_#2B275A_75.68%)]">
          <img
            className="w-[1rem] h-[1rem]"
            src="/invoice/star.png"
            alt="star"
          ></img>
          <p className="text-[1rem] leading-[0.9rem]">4.5</p>
          <p className="text-[0.7rem] leading-[0.62rem]">Rating</p>
        </div>

        <div>
          <img
            className="w-[10.6rem] h-[14.5rem] mb-4  shadow-[-10px_-10px_20px_#FFFFFF,10px_10px_20px_#D3E7F7] rounded-[6.25rem]"
            src="/invoice/docround.png"
            alt="doctor"
          ></img>
          <div className="flex flex-col gap-1 text-center">
            <h1 className="font-[700] text-[1rem] leading-5">
              Dr. Angelina Clayton
            </h1>
            <p className=" font-[600]  text-[#FF8412] text-[0.813rem] leading-4">
              BDS, MDS
            </p>
            <p className=" font-[600]  text-[#FF8412] text-[0.813rem] leading-4">
              Dental Specialist
            </p>
            <p className=" font-[600]  text-[#FF8412] text-[0.813rem] leading-4">
              Delhi
            </p>
          </div>
        </div>

        <div className="h-[6.4rem] w-[4.25rem] flex gap-2 mb-5 ds flex-col items-center justify-center text-white font-[700] rounded-[6.25rem] bg-[linear-gradient(130.06deg,#ACA4FE_0%,#5C55AB_35.33%,_#2B275A_75.68%)]">
          <img
            className="w-[1rem] h-[1rem]"
            src="/invoice/exp.png"
            alt="star"
          ></img>
          <p className="text-[1rem] leading-[0.9rem]">4.5</p>
          <p className="text-[0.7rem] leading-[0.62rem]">Rating</p>
        </div>
      </div>
      <h1 className="caption">About</h1>
      <p className=" text-[#83828E] font-[400] text-[0.94rem] leading-[1.063rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus
      </p>
      <DescRating image="/invoice/r1.png" icon="/invoice/i1.png" />
      <DescRating image="/invoice/r1.png" icon="/invoice/i1.png" />
      <DescRating image="/invoice/r1.png" icon="/invoice/i1.png" />
      <DescRating image="/invoice/r1.png" icon="/invoice/i1.png" />
      <FixedBottom />
    </div>
  );
}

export default Desc;
