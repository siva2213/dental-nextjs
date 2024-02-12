import React, { useState } from 'react'

function More({ title}) {
    const [isClicked,setIsClicked] = useState(false)
  return (
    <div
      onClick={() => setIsClicked(!isClicked)}
      className={` ${
        isClicked
          ? "h-[11.4rem] rounded-l-[5.7rem] justify-around "
          : "h-[5.3rem] rounded-l-[2.66rem]  flex gap-4 px-6 "
      }   ds  rounded-r-[1.88rem] flex items-center  `}
    >
      <div className="w-[2.9rem] h-[2.9rem] shadow-[inset_-2px_-2px_4px_#FFFFFF,inset_2px_2px_4px_#D3E7F6] rounded-full flex">
        <div className=" w-[1.7rem] h-[1.7rem]  bg-[linear-gradient(47.78deg,#FFFFFF_0%,#D3E7F6_95.6%)] rounded-full m-auto flex">
          <img
            className="m-auto h-[0.44rem] w-[0.88rem]"
            src={isClicked ? "/invoice/up.png" : "/invoice/down.png"}
            alt="up"
          ></img>
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="font-[700] text-[1rem] leading-5">{title}</h2>
        {isClicked && (
          <p className="text-[#83828E] font-[400] text-[0.625rem] leading-[0.69rem] w-[16.8rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.Sed
            dignissim.
          </p>
        )}
      </div>
    </div>
  );
}

export default More