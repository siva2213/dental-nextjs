import type { NextPage } from "next";
import ClinicMap from "../components/home/ClinicMap";
import Appointment from "../components/home/Appointment";
import Top from "../components/home/Top";
import Temperature from "../components/home/Temperature";
import Doctors from "../components/home/Doctors";
import Ratings from "../components/home/Ratings";
import ChooseProblem from "../components/home/ChooseProblem";
import Consultation from "../components/home/Consultation";
import FindDoctor from "../components/home/FindDoctor";
import Insurence from "../components/home/Insurence";
import Ngo from "../components/home/Ngo";
import Bottom from "../components/home/Bottom";
import Footer from "../components/Footer";
import SecurePayments from "../components/home/SecurePayments";
import Slider from "../components/home/Slider";
import Link from "next/link";

import HomeSlider from "../components/home/HomeSlider";
import Head from "next/head";
import { useRecoilState } from "recoil";
import { darkMode } from "../atom/DarkMode";

const Home: NextPage = () => {
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkMode);
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Head>
        <title>ClinicMap | Home</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className=" app flex flex-col  ">
        {/* ************************** Top section *****************/}
        <Top />
        {/* ****************************** Temperature section sider *********** */}
        <HomeSlider isDarkMode={isDarkMode} />

        {/* ************************************** Book Appointment ******************************** */}
        <h1 className="caption">Book Appointment</h1>
        <Appointment isDarkMode={isDarkMode} />
        {/* *************************************** Clinic Map ************************************************ */}
        <h1 className="caption">Clinic Map</h1>
        <ClinicMap />

        {/* ------------------------------  Doctor Ratings -------------------------------- */}
        <h1 className="caption ">Doctor Ratings</h1>
        <div className="ratings_section dark:pb-[52rem]">
          <Ratings
            icon="/home/realself.png"
            heading="8 Out of 10"
            text="Ratings On RealSelf By Our 5768 Patients."
            isDarkMode={isDarkMode}
          />
          <Ratings
            icon="/home/signal.png"
            heading="4.4 Out of 5"
            text="Ratings On RateMDs By Our 3677 Patients."
            isDarkMode={isDarkMode}
          />
          <Ratings
            icon="/home/heart.png"
            heading="8.5 Out of 10 "
            text="Ratings On Healthgrades By Our 8342 Patients."
            isDarkMode={isDarkMode}
          />
          <Ratings
            icon="/home/vitals.png"
            heading=" 4 Out of 5"
            text="Ratings On Vitals By Our 9965 Patients."
            isDarkMode={isDarkMode}
          />
          <Slider />
        </div>
        {/* ******************************************* Choose Problem Section *********************************** */}

        <div className=" dark:absolute dark:p-[1.56rem] dark:pt-[0.7rem] dark:width-[100vw] dark:top-[147rem] dark:left-0 dark:right-0 dark:bg-[#282363]">
          <h1 className="caption pb-[1.56rem] ">Choose Problem</h1>
          <div className="problem_section pb-8">
            <ChooseProblem
              text="Anesthetics"
              icon="/home/panesthetics.png"
              isDarkMode={isDarkMode}
            />
            <ChooseProblem
              text="Braces"
              icon="/home/pbraces.png"
              isDarkMode={isDarkMode}
            />
            <ChooseProblem
              text="Bridges"
              icon="/home/pbridges.png"
              isDarkMode={isDarkMode}
            />
            <ChooseProblem
              text="Cleaning"
              icon="/home/pcleaning.png"
              isDarkMode={isDarkMode}
            />
            <ChooseProblem
              text="Cosmetic Dentistry"
              icon="/home/pcosmetic.png"
              isDarkMode={isDarkMode}
            />
            <ChooseProblem
              text="Crown"
              icon="/home/pcrown.png"
              isDarkMode={isDarkMode}
            />
            <ChooseProblem
              text="Dentreus"
              icon="/home/pdentreus.png"
              isDarkMode={isDarkMode}
            />
            <ChooseProblem
              text="Extraction"
              icon="/home/pextraction.png"
              isDarkMode={isDarkMode}
            />
          </div>
          <Slider />
        </div>

        {/* *********************************** Choose Consultation *********************************************
        <h1 className="caption">Choose Consultation</h1>
        <Consultation /> */}

        {/* **************************************** Find Your Doctor ****************************************** */}
        <h1 className="caption">Find Your Doctor</h1>
        <div className="find_section relative pb-80">
          <FindDoctor image="/home/julie.png" text="Dr. Julie Smith" />
          <FindDoctor image="/home/john.png" text="Dr. John Gibbs" />
          <FindDoctor image="/home/karen.png" text="Dr. Karen Lane" />
          <FindDoctor image="/home/brian.png" text="Dr. Brian Stanley" />
          <Slider />
          <SecurePayments />
        </div>

        {/* ******************************* Doctor of the Month *************************** */}
        <h1 className="caption">Doctor Of The Month</h1>
        <Doctors />

        {/* ********************************************  Insurence ************************************************** */}
        <h1 className="caption">Insurence</h1>
        <div className="insurence_section dark:pb-[38rem] ">
          <Insurence
            icon="/home/hdfc.png"
            text="HDFC Life Insurance Company Ltd."
          />
          <Insurence icon="/home/maxlife.png" text="Max Life Insurance" />
          <Insurence icon="/home/birla.png" text="Birla Sun Life Insurance " />
          <Insurence
            icon="/home/sbi.png"
            text="SBI Life Insurance Company Ltd."
          />
          <Insurence
            icon="/home/indiafirst.png"
            text="IndiaFirst Life Insurance "
          />
          <Insurence
            icon="/home/lic.png"
            text="Life Insurance Corporation of India"
          />
        </div>
        {/* ****************************************** Donate to Ngo ******************************************** */}
        <div className="  dark:absolute dark:p-[1.56rem] dark:pt-[0.7rem] dark:width-[100vw] dark:top-[359rem] dark:left-0 dark:right-0 dark:bg-[#282363]">
          <h1 className="caption pb-[1.56rem]  ">Donate To NGO</h1>
          <div className="ngo_section ">
            <Ngo
              text="Bharati Foundation"
              icon="/home/bharati.png"
              isDarkMode={isDarkMode}
            />
            <Ngo
              text="Ipas Development Foundation"
              icon="/home/ipas.png"
              isDarkMode={isDarkMode}
            />
            <Ngo
              text="Room To Read India Trust"
              icon="/home/room.png"
              isDarkMode={isDarkMode}
            />
            <Ngo
              text="SEWA Rural"
              icon="/home/sewa.png"
              isDarkMode={isDarkMode}
            />
          </div>
        </div>

        <Link className="dark:text-white underline" href="/payments">
          Payments
        </Link>
        <Link className="dark:text-white underline" href="/invoice">
          Invoice
        </Link>
        <Link className="dark:text-white underline" href="/profile">
          Profile
        </Link>
        <Link className="dark:text-white underline" href="/describe">
          describe
        </Link>
        <Link className="dark:text-white underline" href="/navigation">
          Navigaion
        </Link>
        <Link className="dark:text-white underline" href="/insurence">
          insurence
        </Link>
        <Link className="dark:text-white underline" href="/location">
          Location
        </Link>

        {/* ****************************** Fixed Bottom ********************** */}
        <Bottom />
      </div>
      {/* ********************************* Footer ******************************** */}
      <Footer />
    </div>
  );
};

export default Home;
