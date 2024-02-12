import React, { useEffect } from "react";
import Review from "./Review";

function ReviewSlide() {
  const [index, setIndex] = React.useState(0);
  const arr = ["/home/review1.png", "/home/review2.png"];
  useEffect(() => {
    console.count("useEffect runs");
    const time = setTimeout(() => {
      setIndex((prev) => {
        return prev === arr.length - 1 ? 0 : prev + 1;
      });
    }, 2500);
    return () => {
      clearInterval(time);
      console.count(" useeffect cleaner function ");
    };
  }, [index, arr.length]);
  return (
    <div className="slideshow overflow-hidden bg-[#F2F7FB]    ">
      <div
        className={`slideshowSlider whitespace-nowrap   `}
        style={
          index !== 0
            ? {
                transform: `translate3d(${-index * 100}%,0,0)`,
                transition: "ease 1000ms",
              }
            : { transform: `translate3d(${-index * 100}%,0,0)` }
        }
      >
        {arr.map((src, index) => (
          <div className="inline-block ">
            <Review key={index + src} image={src} />
          </div>
        ))}
      </div>
      <div className="flex my-6 rounded-full justify-around items-center m-auto w-[2.2rem] h-[0.7rem] shadow-[inset_-1px_-1px_2px_#FFFFFF,inset_1px_1px_2px_#D3E0EB]">
        <div
          onClick={() => {
            setIndex(0);
          }}
          className={` ${
            index === 0 ? "bg-black" : ""
          }  w-[0.44rem] h-[0.44rem] rounded-full shadow-[-1px_-1px_2px_#FFFFFF,1px_1px_2px_#D3E0EB]`}
        ></div>
        <div
          onClick={() => {
            setIndex(1);
          }}
          className={` ${
            index === 1 ? "bg-black" : ""
          }  w-[0.44rem] h-[0.44rem] rounded-full shadow-[-1px_-1px_2px_#FFFFFF,1px_1px_2px_#D3E0EB]`}
        ></div>
      </div>
    </div>
  );
}

export default ReviewSlide;
