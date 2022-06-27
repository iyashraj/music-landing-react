import React, { useState } from "react";
import DownloadAds from "./DownloadAds";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

const Hero = () => {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const bg = {
    true: {
      left: "7rem",
    },
    false: {
      left: "19rem",
    },
  };

  const musicPlayer = {
    true: {
      left: "295rem",
    },
    false: {
      left: "235rem",
    },
  };

  const rect = {
    true: {
      left: "11rem",
    },
    false: {
      left: "13rem",
    },
  };

  const heart = {
    true: {
      left: "9rem",
    },
    false: {
      left: "12.5rem",
    },
  };

  return (
    <VisibilitySensor
      onChange={(isVisible) => setElementIsVisible(isVisible)}
      minTopValue={300}
    >
      <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-full h-[35rem] relative z-[3]">
        {/*left side*/}
        <div className="headings flex flex-col items-start justify-center h-full text-5xl gap-1">
          <span>Experience The </span>
          <span className="mb-3">
            <b>Best Quality Music</b>
          </span>
          <span className="text-[15px] text-[#525d6e]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, sed.
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </span>
          <div>
            <div>
              <span className="text-[13px]">
                Download now on IOS and Android
              </span>
              <DownloadAds />
            </div>
          </div>
        </div>
        {/*right side*/}
        <div className="images relative w-[50%] mb-10">
          <motion.img
            variants={bg}
            animate={`${elementIsVisible}`}
            transition={{ duration: 1, type: "ease-out0" }}
            src={require("../img/backgraphics.png")}
            alt="graphics"
            className="mockup absolute top-[-8rem] left-[19rem]"
          />
          <img
            src={require("../img/p 1.png")}
            alt=""
            className="absolute top-[-15rem] h-[34rem] left-[13rem]"
          />
          <motion.img
            variants={musicPlayer}
            animate={`${elementIsVisible}`}
            transition={{ duration: 1, type: "ease-out0" }}
            src={require("../img/p 2.png")}
            alt=""
            className="absolute left-[235px] top-[94px] w-[175px]"
          />
          <motion.img
            variants={rect}
            animate={`${elementIsVisible}`}
            transition={{ duration: 1, type: "ease-out0" }}
            src={require("../img/p 3.png")}
            alt=""
            className="absolute w-[5rem] left-[13rem] top-[12rem]"
          />
          <motion.img
            variants={heart}
            animate={`${elementIsVisible}`}
            transition={{ duration: 1, type: "ease-out0" }}
            src={require("../img/p 4.png")}
            alt=""
            className="absolute w-[5rem] left-[12.5rem] to-[12rem]"
          />
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default Hero;
