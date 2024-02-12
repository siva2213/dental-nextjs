import React from "react";
import Bottom from "../components/home/Bottom";
import TopWithBackAndSetting from "../components/invoice/TopWithBackAndSetting";

function Insurence() {
  const styles = {
    div: "w-[100%] h-[2.94rem] rounded-[1.87rem] shadow-[5px_5px_5px_0px_#D3E7F6,-5px_-5px_5px_0px_#FFFFFF] flex items-center px-4 ",
    image: "w-[1.25rem] h-[1.25rem] mr-3 ",
    input:
      "outline-none bg-inherit font-[700] leading-[1.25rem] px-3 border-l-[0.0875rem] border-[#C5D9E9] h-full",
  };
  return (
    <div className="flex flex-col gap-8 pb-28 p-[1.56rem]">
      <TopWithBackAndSetting />
      <div className="flex items-center gap-6">
        <div className="w-[7.75rem] h-[7.75rem] flex  ds rounded-[1.88rem]">
          <img
            className=" m-auto object-contain w-[5.3rem] h-[5.3rem]"
            src="/navigation/bharati.png"
            alt="bharati"
          ></img>
        </div>
        <h1 className="font-[700] text-[1rem] leading-5">Bharati Foundation</h1>
      </div>
      <p className=" text-[#83828E]  font-[400] text-[0.94rem] leading-[1.063rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus
      </p>
      <div className="flex relative h-[2.8rem] items-center ">
        <img
          className="w-[2.8rem] h-[2.8rem] absolute left-0"
          src="/navigation/1.png"
          alt="img"
        ></img>
        <img
          className="w-[2.8rem] h-[2.8rem] absolute left-6"
          src="/navigation/2.png"
          alt="img"
        ></img>
        <img
          className="w-[2.8rem] h-[2.8rem] absolute left-12"
          src="/navigation/3.png"
          alt="img"
        ></img>

        <p className="mt-auto pl-24  font-[700] text-[0.625rem] leading-[0.78rem]">
          +743
        </p>
        <p className="font-[700] pl-4 text-[1.25rem] leading-[1.56rem]">
          742 people selected this{" "}
        </p>
      </div>
      <h1 className="caption pb-5">Reviews</h1>

      <div className="flex justify-between">
        <div className="w-[10.9rem] h-[18.5rem] ds skew-y-12 rounded-[1.25rem]  p-4 relative">
          <div className=" -skew-y-12 flex flex-col gap-2">
            <img
              className="w-[3.88rem] h-[3.88rem] absolute -top-10 right-11"
              src="/invoice/r1.png"
              alt="r1"
            ></img>
            <h1 className="font-[700] text-[1rem] leading-[1.25rem] pt-12">
              Melvin Dennis
            </h1>
            <p className="font-[300] text-[0.625rem] leading-3 text-[#83828E] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra.
            </p>
            <p className="font-[500] text-[0.5rem] leading-[0.625rem] ml-auto pt-10">
              12 Fed, 3:46pm
            </p>
          </div>
        </div>
        <div className="w-[10.9rem] h-[18.5rem] ds skew-y-12 rounded-[1.25rem]  p-4 relative">
          <div className=" -skew-y-12 flex flex-col gap-2">
            <img
              className="w-[3.88rem] h-[3.88rem] absolute -top-10 right-11"
              src="/invoice/r2.png"
              alt="r1"
            ></img>
            <h1 className="font-[700] text-[1rem] leading-[1.25rem] pt-12">
              Maria
            </h1>
            <p className="font-[300] text-[0.625rem] leading-3 text-[#83828E] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra.
            </p>
            <p className="font-[500] text-[0.5rem] leading-[0.625rem] ml-auto pt-10">
              12 Fed, 3:46pm
            </p>
          </div>
        </div>
      </div>

      {/* ********************************************* donate form **************************** */}
      <h1 className="caption">Donate Form</h1>
      <Bottom />
      <div className="flex flex-col gap-5">
        <div className={styles.div}>
          <img className={styles.image} src="/home/name.png" alt="name"></img>
          <input className={styles.input} placeholder="Enter Patient Name*" />
        </div>
        <div className={styles.div}>
          <img
            className={styles.image}
            src="/invoice/email.png"
            alt="name"
          ></img>
          <input className={styles.input} placeholder="Enter Email*" />
        </div>
        <div className={styles.div}>
          <img
            className={styles.image}
            src="/invoice/phone.png"
            alt="name"
          ></img>
          <input className={styles.input} placeholder="Enter Patient Name*" />
        </div>
        <div className="w-[100%] h-[3.56rem] flex justify-center items-center bg-[linear-gradient(130.06deg,#ACA4FE_0%,#5C55AB_35.33%,#2B275A_75.68%)] shadow-[-10px_-10px_20px_0px_#FFFFFF,10px_10px_20px_4px_#D2E1ED] rounded-full ">
          <p className="font-[900] text-white text-[1.25rem] leading-[a.5rem] ">
            Submit
          </p>
        </div>
      </div>
    </div>
  );
}

export default Insurence;
