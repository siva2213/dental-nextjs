import React, { useState } from "react";

import FixedHeader from "./FixedHeader";

function Top() {
  const [inputText, setInputText] = useState("");

  console.log("Input text : " + inputText);

  return (
    <div className="top_section  ">
      <FixedHeader />
      <div className="flex justify-between pt-[6.3rem]">
        <h1 className=" font-['Kumbh_Sans'] font-[900] text-[1.75rem] leading-[2.2rem] text-[#211F2B] dark:text-white ">
          LET'S <span className="text-[#FF8412]">FIND </span>YOUR CONSULTANT
        </h1>
        <img
          className="w-[4.32rem] h-[4.32rem]"
          src="/home/manpic.png"
          alt="man"
        />
      </div>

      {/* ***************search*********************** */}
      <div className="bg-white dark:bg-[#272651] flex items-center  w-[100%] h-[2.94rem] rounded-[1.88rem] px-3">
        <img
          className="w-[1.25rem] h-[1.25rem] "
          src="/home/search.png"
          alt="search"
        ></img>
        <input
          onChange={(e) => setInputText(e.target.value)}
          className="font-[700] pl-3 outline-none dark:bg-[#272651] "
          placeholder="Search"
        ></input>
      </div>
    </div>
  );
}

export default Top;
