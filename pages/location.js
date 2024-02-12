import React from "react";
import Bottom from "../components/home/Bottom";

function Location() {
  return (
    <div className="flex flex-col gap-6 pb-28 p-[1.56rem]">
      <div className="flex justify-between">
        <img
          className="w-[2.125rem] h-[2.15rem]"
          src="/home/back.png"
          alt="back"
        ></img>
        <p className="caption">Location</p>
        <img
          className=" w-[1.56rem] h-[1.56rem]"
          src="/home/settings.png"
          alt="settings"
        ></img>
      </div>
      <img src="/invoice/map.png" alt="map"></img>
      <div className="ds h-[7.2rem] rounded-[1.85rem] gap-4 flex items-center p-4">
        <img
          className="w-[4.7rem] h-[4.7rem]"
          alt="build"
          src="/invoice/building.png"
        ></img>
        <div>
          <h1 className="font-[700] text-[0.94rem] leading-[1.163rem]">
            Dental Clinic
          </h1>
          <p className="text-[#83828E] text-[0.7rem] leading-[0.85rem] w-[9.7rem]">
            12/2, Mathura Road, Sector 37, Faridabad - Delhi
          </p>
        </div>
        <section className="h-[4.8rem] w-[2.25rem] ds ml-auto rounded-full flex flex-col gap-4 items-center justify-center">
          <img
            className="w-[1rem] h-[1rem]"
            src="/invoice/phone2.png"
            alt="phone"
          ></img>
          <img
            className="w-[1rem] h-[1rem]"
            src="/invoice/msg.png"
            alt="phone"
          ></img>
        </section>
      </div>
      <div className="flex justify-between">
        <div className="w-[4.8rem] h-[4.8rem] ds flex flex-col items-center rounded-[1.25rem] justify-center gap-2">
          <img
            className="w-[1.25rem] h-[1.25rem]"
            src="/invoice/services.png"
            alt="services"
          ></img>
          <p className="text-[#83828E] font-[600] text-[0.625rem] leading-3">
            Services
          </p>
        </div>
        <div className="w-[4.8rem] h-[4.8rem] ds flex flex-col items-center rounded-[1.25rem] justify-center gap-2">
          <img
            className="w-[1.25rem] h-[1rem]"
            src="/invoice/reviews.png"
            alt="services"
          ></img>
          <p className="text-[#83828E] font-[600] text-[0.625rem] leading-3">
            Reviews
          </p>
        </div>
        <div className="w-[4.8rem] h-[4.8rem] ds flex flex-col items-center rounded-[1.25rem] justify-center gap-2">
          <img
            className="w-[1.25rem] h-[1.25rem]"
            src="/invoice/ratings.png"
            alt="services"
          ></img>
          <p className="text-[#83828E] font-[600] text-[0.625rem] leading-3">
            Ratings
          </p>
        </div>
        <div className="w-[4.8rem] h-[4.8rem] ds flex flex-col items-center rounded-[1.25rem] justify-center gap-2">
          <img
            className="w-[1.25rem] h-[1.25rem]"
            src="/invoice/photos.png"
            alt="services"
          ></img>
          <p className="text-[#83828E] font-[600] text-[0.625rem] leading-3">
            Photos
          </p>
        </div>
      </div>
      <Bottom />
    </div>
  );
}

export default Location;
