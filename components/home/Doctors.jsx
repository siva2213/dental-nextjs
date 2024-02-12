import React from "react";

function Doctors() {
  return (
    <div className="doctor_section dark:text-white">
      <div className=" flex justify-between  ">
        <img
          className="w-[13.8rem]  h-[13.125rem]"
          src="/home/homedoctor.png"
          alt="homedoctor"
        ></img>
        <div className="w-[7.25rem] h-[13.12rem] dark:shadow-[-10px_-10px_20px_#282750,10px_10px_20px_#1B1B3A]  rounded-[1.88rem] flex flex-col justify-center items-center gap-[1.25rem] font-['Kumbh_Sans'] text-center ds font-[800] leading-[0.63rem] text-[0.63rem]">
          <span>
            <p>3+</p>
            <p>Years Exp</p>
          </span>
          <span>
            <p>5K+</p>
            <p>Patients</p>
          </span>
          <span>
            <p>50+</p>
            <p>Awards</p>
          </span>
        </div>
      </div>
      <div className="flex justify-around">
        <section className="flex flex-col text-center gap-1">
          <h1 className="font-[700] leading-5">Dr.Angelina Clayton</h1>
          <p className="font-[600] text-[0.81rem] leading-[1rem] text-[#FF8412]">
            BDS, MDS
          </p>
          <p className="font-[600] text-[0.81rem] leading-[1rem] text-[#FF8412]">
            Dental Specialist
          </p>
        </section>
        <section className="w-[8.5rem]  h-[3.9rem] rounded-l-[1.25rem] rounded-r-[1.88rem] flex items-center justify-center bg-[linear-gradient(130.06deg,#ACA4FE_0%,#5C55AB_35.33%,#2B275A_75.68%)] dark:bg-[linear-gradient(113.96deg,#474086_0%,#1F1B59_100%)]    ">
          <span className=" text-white  text-[0.81] flex flex-col items-center ">
            <p className="text-[1.25rem] font-[700] leading-6">4.5</p>
            <p className="font-[700] leading-3"> Rating</p>
          </span>
        </section>
      </div>
      <p className="text-[0.94rem] leading-[1.1rem] text-[#83828E] max-w-[23rem] font-normal">
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

export default Doctors;
