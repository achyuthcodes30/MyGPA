import React, { useEffect, useState } from "react";
import "~/styles/intro.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { spectral } from "./fonts";
import Button from "./button";
import HatPic from "../../public/gradgat.jpg";

export default function IntroPC({ welcome }: { welcome: string }) {
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
    setTimeout(() => setShowButton(true), 6000);
  }, []);
  return (
    <div className="min-h-full min-w-full overflow-hidden">
      <div className="image-div absolute mt-28 h-3/4 w-1/2">
        <Image src={HatPic} alt="MyGPA introbg" loading="eager" />
      </div>
      <div className="relative ml-[45%] mt-[20%]">
        <motion.span
          variants={container}
          initial="hidden"
          animate="visible"
          className="container flex items-center justify-center"
        >
          {welcome
            .split("")
            .slice(0, 10)
            .map((char: string, index: number) => (
              <motion.span
                key={index}
                className={`el-${index} change-style relative text-6xl ${spectral.className}`}
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
                className={`el-${index + 10} change-style relative text-6xl ${
                  spectral.className
                }`}
                variants={child}
                custom={index * 10 + 1}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
        </motion.span>
        <span className="relative mt-16 flex flex-wrap items-center justify-center">
          {showbutton && <Button />}
        </span>
      </div>
    </div>
  );
}
