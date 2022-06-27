import React, { useState } from "react";
import MusicPlayer from "./MusicPlayer";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

const Search = () => {
  const [elementIsVisible, setElementIsVisible] = useState(false);

  const bg = {
    true: {
      left: "-44rem",
    },
    false: {
      left: "-50rem",
    },
  };

  const redImg = {
    true: {
      left: "18rem",
    },
    false: {
      left: "16rem",
    },
  };

  const musicImg = {
    true: {
      left: "2rem",
    },
    false: {
      left: "6rem",
    },
  };
  return (
    <div className="search relative h-[65rem] px-20 bg-[#081730] pt-72 pb-40 mt-[-15rem] z-[1] flex items-start justify-between rounded-b-[5rem]">
      {/*left side */}
      <div className="left flex-1">
        <motion.img
          variants={bg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          src={require("../img/backgraphics.png")}
          alt=""
          className="absolute top-[22rem] left-[-47rem]"
        />
        <motion.img
          src={require("../img/d1.png")}
          alt=""
          className="absolute w-64 top-[26rem]"
        />
        <motion.img
          src={require("../img/d2.png")}
          alt=""
          className="absolute w-36 top-[32.7rem] left-[7rem]"
        />
        <motion.img
          variants={redImg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1.2,
            type: "ease-out",
          }}
          src={require("../img/d3.png")}
          alt=""
          className="absolute w-36 top-[33rem] left-[17rem]"
        />
        <motion.img
          variants={musicImg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          src={require("../img/d4.png")}
          alt=""
          className="absolute w-[17rem] top-[50rem] left-[2rem]"
        />
      </div>
      {/*right side */}
      <div className="right flex items-start flex-col justify-start flex-1 h-full  pt-36">
        {/*Search */}
        <div className="searchInput flex justify-start w-full">
          <input
            type="text"
            placeholder="Enter the keyword or URL"
            className="flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-12 "
          />
          {/*SearchIcon */}
          <div className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#f3071d] to-[#e600ff] p-4 h-12">
            <img src={require("../img/search.png")} alt="" className="w-6" />
          </div>
        </div>
        {/*Tild ICon */}
        <div className="tild flex justify-start mt-7 items-center w-full">
          <img src={require("../img/Path 318.png")} alt="" className="w-20" />
        </div>
        {/*Paragraph */}
        <div className="detail flex flex-col mt-5 text-4xl">
          <span>Search Music by</span>
          <span>
            <b>Name or Direct URL</b>
          </span>
          <span className="text-sm mt-3 text-[#4d586a]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Itaque accusamus adipisci deleniti. Aut in <br />
            soluta sed, animi nemo.
          </span>
        </div>
        {/*Music Player */}
        <VisibilitySensor onChange={(isVisible) => setElementIsVisible(isVisible)}>
          <MusicPlayer />
        </VisibilitySensor>
      </div>
    </div>
  );
};

export default Search;
