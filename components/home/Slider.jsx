import React from "react";

function Slider() {
  return (
    <div className="flex rounded-full justify-around items-center m-auto w-[3.8rem] h-[0.7rem] shadow-[inset_-1px_-1px_2px_#FFFFFF,inset_1px_1px_2px_#D3E0EB] dark:bg-[#272651] dark:shadow-none">
      <div className="bg-black w-[0.44rem] h-[0.44rem] rounded-full shadow-[-1px_-1px_2px_#FFFFFF,1px_1px_2px_#D3E0EB] dark:shadow-[0px_0px_10px_#FF8412] dark:bg-[#D27D2F]"></div>
      <div className="w-[0.44rem] h-[0.44rem] dark:bg-[#222146] rounded-full shadow-[-1px_-1px_2px_#FFFFFF,1px_1px_2px_#D3E0EB] dark:shadow-none "></div>
      <div className="w-[0.44rem] h-[0.44rem] dark:bg-[#222146] rounded-full shadow-[-1px_-1px_2px_#FFFFFF,1px_1px_2px_#D3E0EB] dark:shadow-none"></div>
      <div className="w-[0.44rem] h-[0.44rem] dark:bg-[#222146] rounded-full shadow-[-1px_-1px_2px_#FFFFFF,1px_1px_2px_#D3E0EB] dark:shadow-none"></div>
    </div>
  );
}

export default Slider;
