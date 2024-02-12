import React, { useState } from "react";

function Consultation({ isDarkMode }) {
  const [isVoiceClicked, setIsVoiceClicked] = useState(true);
  const [isVideoClicked, setIsVideoClicked] = useState(true);
  const [isClinicClicked, setIsClinicClicked] = useState(true);
  const [isHomeClicked, setIsHomeClicked] = useState(true);

  const styles = {
    div: "flex justify-center flex-col  max-w-[10.8rem] h-[7.8rem] rounded-[1.9rem]  items-center shadow-[10px_10px_20px_0px_#D3E7F6,-10px_-10px_20px_0px_#FFFFFF] dark:shadow-[-10px_-10px_20px_#282750,10px_10px_20px_#1B1B3A] cursor-pointer",
    p: "m-2 font-[900] text-[0.81rem] dark:text-[#83828E] ",
    left: " bg-red-500 bg-[linear-gradient(130.06deg,#ACA4FE_0%,#5C55AB_35.33%,#2B275A_75.68%)] dark:bg-[linear-gradient(113.96deg,#474086_0%,#1F1B59_100%)] rounded-l-[3.75rem] rounded-r-[1.9rem]",
    right:
      " bg-[linear-gradient(130.06deg,#ACA4FE_0%,#5C55AB_35.33%,#2B275A_75.68%)] dark:bg-[linear-gradient(113.96deg,#474086_0%,#1F1B59_100%)] rounded-r-[3.75rem] rounded-l-[1.9rem]",
  };
  return (
    <div className="consultation_section">
      <div
        onClick={() => setIsVoiceClicked(!isVoiceClicked)}
        className={styles.div + (isVoiceClicked && styles.left)}
      >
        <img
          className="m-3 w-[2.1rem] h-[0.94rem]"
          src={isDarkMode ? "/home/voicecall_dark.png" : "/home/voicecall.png"}
          alt="voicecall"
        ></img>
        <p className={styles.p}>Voice Call</p>
      </div>
      <div
        onClick={() => setIsVideoClicked(!isVideoClicked)}
        className={styles.div + (isVideoClicked && styles.right)}
      >
        <img
          className="m-3 w-[1.4rem] h-[1rem]"
          src={isDarkMode ? "/home/videocall_dark.png" : "/home/videocall.png"}
          alt="videocall"
        ></img>
        <p className={styles.p}>Video Call</p>
      </div>
      <div
        onClick={() => setIsClinicClicked(!isClinicClicked)}
        className={styles.div + (isClinicClicked && styles.left)}
      >
        <img
          className="m-3 w-[1.63rem] h-[1.63rem]"
          src={
            isDarkMode ? "/home/visitclinic_dark.png" : "/home/visitclinic.png"
          }
          alt="visitclini"
        ></img>
        <p className={styles.p}>Visit Clinic</p>
      </div>
      <div
        onClick={() => setIsHomeClicked(!isHomeClicked)}
        className={styles.div + (isHomeClicked && styles.right)}
      >
        <img
          className="m-3 w-[1.63rem] h-[1.63rem] "
          src={isDarkMode ? "/home/callhome_dark.png" : "/home/callhome.png"}
          alt="callhome"
        ></img>
        <p className={styles.p}>Call Home</p>
      </div>
    </div>
  );
}

export default Consultation;
