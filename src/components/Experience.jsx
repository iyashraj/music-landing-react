import React from "react";
import Feature from "./Feature";

const Experience = () => {
  return (
    <div className="experience flex flex-col items-center justify-start px-20 bg-[#020917] pt-72 mt-[-10rem] relative z-[2] rounded-b-[5rem]">
      {/*title icon */}
      <img src={require("../img/Path 318.png")} alt="" className="w-20" />
      {/*heading */}
      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span>An Amazing App Can Change You Daily Life</span>
        <span>
          <b>Music Experience</b>
        </span>
      </div>
      {/*features */}
      <div className="feature flex items-center justify-around mt-24 w-full">
        <Feature icon="Group 2" title="For Live Music" />
        <Feature icon="music icon" title="For Daily Music" />
        <Feature icon="Group 4" title="For Artists" />
      </div>
    </div>
  );
};

export default Experience;
