import React, { useState } from "react";
import { motion } from "framer-motion";
import picture from "./appartement-paris-x1651287435459.png";
import ClickComponent from "./ClickComponent";

const variants = {
  clicked: { height: "100%", overflow: "none" },
  notClicked: { height: "121.6px", overflow: "none" },
};

function App() {
  const [isHover, setIsHover] = useState(true);

  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="">
      <div className="relative w-[250px] h-[350px] shadow-xl rounded-3xl">
        <img
          src={picture}
          alt=""
          className="h-full object-cover w-full rounded-3xl"
        />
        <div className="w-full h-full absolute top-0">
          {/* <motion.div
            initial={{ height: "37.6px" }}
            whileHover={{ height: "121.6px", overflow: "none" }}
            className="absolute bottom-0 translate-x-3 w-[90%] overflow-hidden"
          > */}
          {isClicked ? (
            <ClickComponent />
          ) : (
            <motion.div
              onClick={handleClick}
              variants={variants}
              animate={isClicked ? "clicked" : "notClicked"}
              transition={{ duration: 0.5 }}
              className={
                isClicked
                  ? "absolute bottom-0 py-2 px-2 rounded-2xl bg-transparent backdrop-blur-sm w-full h-full z-10 cursor-pointer"
                  : "absolute bottom-0 translate-x-3 py-2 px-2 rounded-2xl bg-transparent backdrop-blur-sm mb-2 w-[90%] z-10 h-full cursor-pointer"
              }
            >
              <div className="flex justify-between w-full z-20 mb-2">
                <h1 className="text-white font-semibold text-sm">
                  Villa Banovi
                </h1>
                <div className="flex">
                  <span className="text-white text-sm font-semibold">$225</span>
                  <span className="text-white text-sm font-light">/night</span>
                </div>
              </div>
              <div className="">
                <div className="flex gap-2 mb-8">
                  <span className="text-xs text-white">Rating</span>
                  <div className="max-w-10 flex items-center">
                    <progress value={4} max={5} className="max-w-full" />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      width="12"
                      height="12"
                    >
                      <path
                        fill="#ffffff"
                        d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                      />
                    </svg>
                    <span className="text-xs text-white font-semibold">
                      Paris, France
                    </span>
                  </div>
                  {isHover && (
                    <motion.button
                      initial={{ x: "100px" }}
                      animate={{ x: 0 }}
                      transition={{ duration: 1.7 }}
                      className="text-white bg-gray-900 focus:outline-none font-thin rounded-lg text-xs p-2 dark:bg-gray-900"
                    >
                      Reserve
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
          {/* </motion.div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
