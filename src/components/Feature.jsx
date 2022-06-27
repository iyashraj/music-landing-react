import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

const Feature = ({ icon, title }) => {
  const [elementIsVisible, setElementIsVisible] = useState(false);

  const varient = {
    true: {
      transform: "scale(1)",
    },
    false: {
      transform: "scale(0.5)",
    },
  };
  return (
    <VisibilitySensor onChange={(isVisible) => setElementIsVisible(isVisible)}>
      <div className="feature flex item-center justify-center flex-col relative text-center mx-12">
        {/*icon */}
        <motion.div
          variants={varient}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          animate={`${elementIsVisible}`}
          className="icon flex bg-[#081730] justify-center rounded-2xl p-4"
        >
          <img src={require(`../img/${icon}.png`)} alt="" className="w-12" />
        </motion.div>

        <span className="mt-5">{title}</span>

        <span className="text-[#707070] mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ut omnis
          odit commodi. Cupiditate suscipit soluta natu
        </span>
        <span className="text-[#e600ff] underline mt-[3rem] cursor-pointer pb-20">
          Learn More..
        </span>
      </div>
    </VisibilitySensor>
  );
};

export default Feature;
