import React from "react";

function Temperature({ isDarkMode }) {
  const temperature = "13°C";

  return (
    <div className="inline-block   px-[1.56rem]">
      <div className="temperature_section  w-[23.5rem]  ">
        <div>
          <div className="w-[12.8rem]  h-[8.5rem] bg-[linear-gradient(130.06deg,#ACA4FE_0%,#5C55AB_35.33%,#2B275A_75.68%)] dark:bg-[linear-gradient(113.96deg,#474086_0%,#1F1B59_100%)] rounded-[1.9rem] p-[1rem] mb-[1.3rem]">
            <div className="flex justify-between">
              <p className="text-[#FFFFFF] font-[800] text-[2rem]">
                {temperature}
              </p>
              <img
                className="w-[3.2rem]  h-[2.2rem] "
                src="/home/cloud.png"
                alt="cloud"
              ></img>
            </div>
            <section className="text-white py-3 ">
              <h1 className="font-[700] text-xl leading-6">Temperature</h1>
              <p>current</p>
            </section>
          </div>

          <div className="flex gap-5 ml-10">
            <img
              className="w-[1.5rem] h-[1.75rem]"
              src={isDarkMode ? "/home/t1_dark.png" : "/home/t1.png"}
              alt="t1"
            ></img>
            <div className="w-[2.8rem] h-[1.75rem] bg-[#4472B8] rounded-[1.9rem] relative flex justify-around items-center">
              <p className="text-white font-[600] text-[13px]">On</p>
              <div className="w-[1.25rem] h-[1.25rem] rounded-full bg-white"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1 dark:text-white ">
          <p className="font-[400]">High</p>
          <p className="w-[1px]  h-[9.9rem] border-r-[1.4px] border-dashed border-[#211F2B] dark:border-white"></p>
          <p className="font-[400]">Low</p>
        </div>
        <div className="w-[4.25rem]  bg-[linear-gradient(180deg,#FF8412_0%,#B55700_100%)]  h-[13rem] rounded-full border-[3px] border-white relative z-10 ">
          {/* <div className=" absolute   -z-10 h-[13rem] w-[4.25rem] scale-[0.95] rounded-full   bg-[linear-gradient(180deg,#FF8412_0%,#B55700_100%)]"></div> */}
          <div className="flex flex-col items-center gap-4 pt-14 z-">
            <div className="w-[18px] h-[18px] bg-white rounded-full flex justify-center items-center">
              <img
                className="w-[11px] h-[11px]"
                src="/home/carbon_temperature-hot.png"
                alt="carbon"
              ></img>
            </div>

            <h1>{temperature}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Temperature;
