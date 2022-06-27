import React from "react";
import CenterMenu from "./CenterMenu";

const header = () => {
  return (
    <div className="header bg-[#081730] flex items-center justify-between px-[5rem] pt-[2rem] text-[0.8rem]">
      {/* Logo */}
      <img src={require("../img/MuzicLogo.png")} alt="logo" className="logo w-[42px] h-[42px] mb-6 cursor-pointer"/>
      {/* Side Menu */}
      <CenterMenu />
      {/* Buttons */}
      <div className="buttons flex">
      <button className="border-[2px] border-gray-600 rounded-lg mr-[3rem] cursor-pointer text-xl px-6 py-2 mb-6 hover:text-white font-[600] hover:bg-[#a31c98]">Log in</button>
      <button className="border-[2px] border-gray-600 rounded-lg mr-[3rem] cursor-pointer text-xl px-6 py-2 mb-6 hover:text-white font-[600] hover:bg-[#a31c98]">Sign up</button>
      </div>
    </div>
  );
};

export default header;
