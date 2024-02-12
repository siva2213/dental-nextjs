import React from "react";
import Pinputs from "../components/payments/Pinputs";
import FixedBottom from "../components/payments/FixedBottom";
import Modal from "../components/payments/Modal";
import { useRecoilState } from "recoil";
import { modalState } from "./../atom/ModalState";
import FixedHeader from "../components/home/FixedHeader";

function Payments() {
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  return (
    <div
      className={`p-[1.563rem]  flex  flex-col gap-6 bg-[#F2F7FB] min-h-screen font-['Kumbh_Sans'] text-[#211F2B] pb-[10rem] ${
        isOpen && "blur "
      } `}
    >
      {/* ***************************** fixed Header ***************** */}
      {/* <FixedHeader /> */}

      <div className="flex justify-between ">
        <img
          className="w-[2.125rem] h-[2.125rem]"
          src="/home/back.png"
          alt="home"
        ></img>
        <img
          className="w-[1.57rem] h-[1.57rem]"
          src="/home/settings.png"
          alt="settings"
        ></img>
      </div>

      {/* ************************* Card ******************** */}
      <div className="w-[23.5rem] h-[13.5rem]  rounded-[1.3rem] p-6 flex flex-col justify-between bg-red-30 bg-[linear-gradient(130.06deg,#ACA4FE_0%,#5C55AB_35.33%,#2B275A_75.68%)]">
        <div className="flex justify-between">
          <img
            className="w-[3.8rem] h-[2.6rem]"
            src="/payments/rings.png"
            alt="rings"
          ></img>
          <img
            className="w-[3.8rem] h-[2.6rem]"
            src="/payments/sqbox.png"
            alt="sqbox"
          ></img>
        </div>
        <div
          className="flex justify-between font-[700] text-[1.5rem] leading-[1.9rem] text-[#EAEAF4]"
          style={{ textShadow: "-1px -1px 4px #746EBD, 1px 1px 4px #3F3A84" }}
        >
          <p>1234</p>
          <p>5678</p>
          <p>9876</p>
          <p>4356</p>
        </div>
        <div
          className="flex justify-between  text-[#EAEAF4]"
          style={{ textShadow: "-1px -1px 4px #746EBD, 1px 1px 4px #3F3A84" }}
        >
          <p className="font-[700] text-[1.5rem] leading-[1.9rem]">
            Nicholous Lodge
          </p>
          <p className="font-[400] leading-[1.57rem] text-[1.25rem]">07/24</p>
        </div>
      </div>
      <div></div>
      <h1 className="caption">Payment Methods</h1>
      <div className="flex flex-col gap-5">
        <Pinputs
          icon="/payments/cash.png"
          text="Pay At Clinic"
          heading="Cash"
        />
        <Pinputs
          icon="/payments/upi.png"
          text="GooglePay, PhonePe,."
          heading="UPI"
        />
        <Pinputs
          icon="/payments/bank.png"
          text="All Indian Banks"
          heading="Net Banking"
        />
        <Pinputs
          icon="/payments/wallet.png"
          text="All Indian Banks"
          heading="Wallet"
        />
        <Pinputs
          icon="/payments/credit.png"
          text="Visa, Master.."
          heading="Card"
        />
      </div>
      <div className="h-[3.57rem]  flex justify-center items-center border rounded-full bg-[linear-gradient(130.06deg,#ACA4FE_0%,#5C55AB_35.33%,#2B275A_75.68%)]  shadow-[10px_10px_20px_4px_#D2E1ED,-10px_-10px_20px_0px_#FFFFFF] text-white caption ">
        Confirm
      </div>
      <Modal></Modal>
      <FixedBottom />
    </div>
  );
}

export default Payments;
