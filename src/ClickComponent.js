import React from "react";
import { motion } from "framer-motion";

const ClickComponent = () => {
  return (
    <motion.div
      // variants={variants}
      // animate={isClicked ? "clicked" : "notClicked"}
      // transition={{ duration: 0.5 }}
      className="absolute bottom-0 rounded-2xl bg-slate-200 w-full h-full z-10 cursor-pointer"
    >
      <div className="px-2 py-4 bg-white rounded-2xl">
        <div className="flex justify-between w-full z-20 mb-2">
          <h1 className="font-semibold text-sm">Villa Banovi</h1>
          <div className="flex">
            <span className="text-sm font-semibold">$225</span>
            <span className="text-sm font-light">/night</span>
          </div>
        </div>
        <div>
          <div className="flex gap-2 justify-between">
            <div className="flex gap-2">
              <span className="text-xs">Rating</span>
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
                    fill="#00000"
                    d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                  />
                </svg>
                <span className="text-xs font-semibold">Paris, France</span>
              </div>
            </div>
            {/* {isHover && ( */}
          </div>
          {/* )} */}
        </div>
      </div>
      <motion.div
        className="overflow-y-auto max-h-[208.72px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div>hhhhhhh</div>
        <div>hhhhhhh</div>
        <div>hhhhhhh</div>
        <div>hhhhhhh</div>
        <div>hhhhhhh</div>
        <div>hhhhhhh</div>
        <div>hhhhhhh</div>
        <div>hhhhhhh</div>
        <div>hhhhhhh</div>
        <div>hhhhhhh</div>
        <div>hhhhhhh</div>
        <div>hhhhhhh</div>
        <div>hhhhhhh</div>
        <div>hhhhhhh</div>
      </motion.div>
      <div className="absolute bottom-0 w-full border border-t py-2 px-3 bg-white rounded-2xl">
        <button className="bg-lime-500 focus:outline-none font-semibold rounded-lg text-xs p-2 dark:bg-lime-500 w-full my-2">
          Reserve
        </button>
      </div>
    </motion.div>
  );
};

export default ClickComponent;
