import React from "react";
import Footer from "../components/Footer";
import Bottom from "../components/home/Bottom";

import DescTop from "../components/invoice/DescTop";
import More from "../components/invoice/More";
import Ratings from "../components/invoice/Ratings";
import ReviewSlide from "../components/invoice/ReviewSlide";

function Profile() {
  return (
    <div>
      <div className=" flex flex-col gap-6 p-[1.56rem]   bg-[#F2F7FB] ">
        <DescTop />

        <div className="flex justify-between pt-20">
          <img
            className="w-[10.63rem] h-[9.63rem]"
            src="/invoice/doc2.png"
            alt="doc"
          ></img>
          <section className="flex flex-col gap-8 pt-8 ">
            <div className="flex flex-col gap-1 pl-4">
              <h1 className="font-[700] text-[1rem] leading-5">
                Dr. Angelina Clayton
              </h1>
              <p className=" font-[600]  text-[#FF8412] text-[0.813rem] leading-4">
                BDS, MDS
              </p>
              <p className=" font-[600]  text-[#FF8412] text-[0.813rem] leading-4">
                Dental Specialist
              </p>
            </div>

            <div className=" flex justify-around items-center text-center text-white   w-[12.3rem] h-[3.9rem] shadow-[-5px_-5px_10px_#FFFFFF,5px_5px_10px_4px_#D2E1ED] rounded-tl-[6.25rem] rounded-bl-[1.875rem] rounded-r-[1.25rem] bg-[linear-gradient(130.06deg,#ACA4FE_0%,#5C55AB_35.33%,#2B275A_75.68%)]">
              <section className="flex flex-col gap-1 font-[700]">
                <p className="text-[1rem] leading-[0.88rem] ">4.5</p>
                <p className="text-[0.7rem] leading-[0.613rem] font-[700] ">
                  Rating
                </p>
              </section>
              <section className="flex flex-col gap-1 font-[700]">
                <p className="text-[1rem] leading-[0.88rem] ">3+</p>
                <p className="text-[0.7rem] leading-[0.613rem] font-[700] ">
                  Years Exp
                </p>
              </section>
            </div>
          </section>
        </div>

        <h1 className="caption">About</h1>
        <p className="font-[400] leading-[1.063rem] text-[0.875rem] text-[#83828E]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus
        </p>

        {/* ************************************************* Ratings ******************************* */}
        <h1 className="caption">Ratings</h1>
        <Ratings />
        <h1 className="caption">More About Doctor</h1>
        <More title="Education" />
        <More title="Specialization" />
        <More title="Experience" />
        <More title="Achievements" />
        <More title="Membership" />

        <Bottom />
      </div>
      {/* ******************************* Reviews ***************************** */}
      <div className="w-screen ">
        <h1 className="caption py-2 pl-[1.56rem] bg-[#F2F7FB] ">Reviews</h1>

        <ReviewSlide />
      </div>

      <Footer />
    </div>
  );
}

export default Profile;
