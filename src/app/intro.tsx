"use client";

import React, { useEffect, useState, useRef, ReactElement } from "react";
import "~/styles/intro.css";
import Image from "next/image";
import { delay, motion } from "framer-motion";
import { spectral } from "./fonts";
import Button from "./button";

export default function Intro({ welcome }: { welcome: string }) {
  const [showbutton, setShowButton] = useState(false);
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.1 + 0.1 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 60,
      },
    },
    hidden: {
      opacity: 0,
      x: 0,
      y: 50,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 60,
      },
    },
  };

  useEffect(() => {
    setTimeout(() => setShowButton(true), 7000);
  }, []);

  return window.innerWidth < 680 ? (
    <div className="min-h-full min-w-full overflow-hidden">
      <Image
        src="/introbg.jpg"
        objectFit="cover"
        fill={true}
        alt="MyGPA introbg"
      />
      <motion.span
        variants={container}
        initial="hidden"
        animate="visible"
        className="container mt-[9rem] flex items-center justify-center"
      >
        {welcome
          .split("")
          .slice(0, 10)
          .map((char: string, index: number) => (
            <motion.span
              key={index}
              className={`el-${index} change-style relative text-4xl ${spectral.className}`}
              variants={child}
              custom={index + 1}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        {welcome
          .split("")
          .slice(10, 17)
          .map((char: string, index: number) => (
            <motion.span
              key={index}
              className={`el-${index + 10} change-style relative text-4xl ${
                spectral.className
              }`}
              variants={child}
              custom={index * 10 + 1}
              style={{
                marginRight: `-0.17%`,
                paddingLeft: "0.3%",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
      </motion.span>
      <span className="relative mt-16 flex flex-wrap items-center justify-center">
        {showbutton && <Button />}
      </span>
    </div>
  ) : (
    <>
      <Image
        src="/introbgpc.jpg"
        objectFit="cover"
        fill={true}
        alt="MyGPA introbg"
      />
      <motion.span
        variants={container}
        initial="hidden"
        animate="visible"
        className="container mb-60 ml-[40rem] flex items-center justify-center"
      >
        {welcome
          .split("")
          .slice(0, 10)
          .map((char: string, index: number) => (
            <motion.span
              key={index}
              className={`el-${index} change-style relative text-6xl`}
              variants={child}
              custom={index + 1}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        {welcome
          .split("")
          .slice(10, 17)
          .map((char: string, index: number) => (
            <motion.span
              key={index}
              className={`el-${
                index + 10 // Indices start from 11 now
              } change-style relative mr-[0.007%] text-6xl`} //slight margin to prevent overlapping when bg darkens.
              variants={child}
              custom={index * 10 + 1}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
      </motion.span>
    </>
  );
}
