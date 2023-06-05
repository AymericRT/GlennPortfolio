"use client";
import Image from "next/image";
import Years from "./years";
import { motion } from "framer-motion";


export default function Introduction() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="border border-[#565656] rounded-full w-28  mt-10 "
      >
        <div className="flex items-center justify-center text-center text-[11px] space-x-2  text-white my-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>

          <h2 className="font-extralight">INTRODUCE</h2>
        </div>
      </motion.div>
      <div></div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl mt-5 font-sans font-light">
          Hello, I'm <span className="text-[#28e98c]">Glenn Salter</span>,
          Software Engineer and Developer.
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-sm text-[#B3B3B3] mt-10 font-extralight">
          I enjoy solving problems through programming and leveraging
          automation. As there are an infinite amount of problems, my fun never
          ends!
        </h1>
      </motion.div>

      <Years />
    </>
  );
}
