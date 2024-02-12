import React from 'react'

function Review({image}) {
  return (
    <div className="relative  flex flex-col p-6 gap-3 items-center h-[18.5rem] m-[1.8rem] w-[23rem] rounded-[1.875rem] mt-14 shadow-[-10px_-10px_20px_#FFFFFF,10px_10px_20px_#D3E7F7]">
      <img
        className="absolute -top-20 right-26 w-[12rem] h-[12rem]"
        src={image}
        alt="review1"
      ></img>
      <p className="text-[#83828E] mb-10 ml-auto font-[600] text-[0.625rem] leading-[0.775rem]">
        14 Aug, 7:34pm
      </p>
      <h2 className="font-[700] text-[1rem] leading-5">Melvin Dennis</h2>
      <div className="flex gap-1">
        <img
          className="w-[1.25rem] h-[1.25rem]"
          src="/home/star.png"
          alt="star"
        ></img>
        <img
          className="w-[1.25rem] h-[1.25rem]"
          src="/home/star.png"
          alt="star"
        ></img>
        <img
          className="w-[1.25rem] h-[1.25rem]"
          src="/home/star.png"
          alt="star"
        ></img>
        <img
          className="w-[1.25rem] h-[1.25rem]"
          src="/home/star.png"
          alt="star"
        ></img>
      </div>
      <p className=" w-[18.4rem] text-[#83828E] font-[400] text-[0.63rem] text-center leading-[0.7rem] whitespace-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
        lectus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
        egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse
        ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
        convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
      </p>
    </div>
  );
}

export default Review