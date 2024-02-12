import React, { useState, useEffect } from "react";
import Temperature from "./Temperature";
import TempSlide from "./TempSlide";

function HomeSlider({ isDarkMode }) {
  const length = 1;
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const time = setTimeout(() => {
      setIndex((prev) => (prev === length ? 0 : prev + 1));
    }, 2500);

    return () => {
      clearInterval(time);
    };
  }, [index]);

  return (
    <div className="slideshow overflow-hidden relative -mr-[3.12rem] -left-[1.56rem]    ">
      <div
        className="slideshowSlider whitespace-nowrap  "
        style={
          index !== 0
            ? {
                transform: `translate3d(${-index * 100}%,0,0)`,
                transition: "ease 1000ms",
              }
            : { transform: `translate3d(${-index * 100}%,0,0)` }
        }
      >
        <Temperature isDarkMode={isDarkMode} />
        <div className="inline-block  w-[23.5rem] mx-[1.56rem]">
          <div className="grid grid-cols-3 gap-4  ">
            <TempSlide image="/home/sappointment.png" text="Book Appointment" />
            <TempSlide image="/home/sproblem.png" text="Choose Problem" />
            <TempSlide image="/home/smap.png" text="Clinic Map" />
            <TempSlide image="/home/sdoctor.png" text="Find Your Doctor" />
            <TempSlide image="/home/sinsurence.png" text="Insurence" />
            <TempSlide image="/home/sngo.png" text="Donate To NGO" />
          </div>
        </div>
      </div>
      <div className="flex my-6 rounded-full justify-around items-center m-auto w-[2.2rem] h-[0.7rem] shadow-[inset_-1px_-1px_2px_#FFFFFF,inset_1px_1px_2px_#D3E0EB] dark:bg-[#272651] dark:shadow-none">
        <div
          onClick={() => {
            setIndex(0);
          }}
          className={` ${
            index === 0
              ? "bg-black dark:bg-[#D27D2F] dark:shadow-[0px_0px_10px_#FF8412]"
              : ""
          }  w-[0.44rem] h-[0.44rem] rounded-full shadow-[-1px_-1px_2px_#FFFFFF,1px_1px_2px_#D3E0EB] dark:shadow-none`}
        ></div>
        <div
          onClick={() => {
            setIndex(1);
          }}
          className={` ${
            index === 1
              ? "bg-black dark:bg-[#D27D2F] dark:shadow-[0px_0px_10px_#FF8412]"
              : ""
          }  w-[0.44rem] h-[0.44rem] rounded-full shadow-[-1px_-1px_2px_#FFFFFF,1px_1px_2px_#D3E0EB] dark:shadow-none`}
        ></div>
      </div>
    </div>
  );
}

export default HomeSlider;
