import React from "react";

function DescRating({ image, icon }) {
  return (
    <div className="h-[17.125rem] w-[23rem] rounded-[1.9rem] ds p-6 flex justify-between ">
      <div className="flex flex-col justify-between items-center text-[#FF8412]">
              <div className=" w-[8.25rem] h-[8.25rem] ds rounded-full flex relative ">
                  <img className="absolute scale-95" src="/invoice/ellipse.png" alt="ellipse"></img>
          <p className="m-auto font-[700] text-[1.5rem] leading-[1.875rem]">
            4
          </p>
        </div>
        <img className="w-[1.88rem] h-[1.88rem]" src={icon} alt="icon"></img>
        <h1 className="font-[800] text-[1.25rem] leading-6">Implant</h1>
      </div>

      <div className="flex flex-col gap-3">
        <img className="w-[2.81rem] h-[2.81rem]" src={image} alt="author"></img>
        <h1 className="font-[700] leading-5 text-[1rem] ">Melvin Dennis</h1>
        <p className="w-[10.2rem] font-[300] text-[0.625rem] leading-3 text-[#83828E]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra.
        </p>
      </div>
    </div>
  );
}

export default DescRating;
