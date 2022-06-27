import React from "react";

const CenterMenu = () => {
  const listStyle = "mr-[3rem] cursor-pointer text-xl";
  return (
    <div className="menu flex mb-6">
      <ul className="flex w-full justify-between">
        <li className={listStyle}>Home</li>
        <li className={listStyle}>About</li>
        <li className={listStyle}>Performer</li>
        <li className={listStyle}>Event Schedule</li>
      </ul>
    </div>
  );
};

export default CenterMenu;
