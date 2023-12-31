"use client";

import { lato } from "./fonts";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { stagger, useAnimate } from "framer-motion";

export default function Button() {
  const [cgpascope, cgpaanimate] = useAnimate();
  const [sgpascope, sgpaanimate] = useAnimate();
  const cgpa = "Find my CGPA";
  const sgpa = "Find my SGPA";

  const onCgpaButtonClick = async () => {
    await cgpaanimate([
      [".cgpaletter", { y: -27 }, { duration: 0.4, delay: stagger(0.05) }],
      [".cgpa-button", { scale: 0.2 }, { duration: 0.1, at: "<" }],
      [".cgpa-button", { scale: 1 }, { duration: 0.05 }],
      [".cgpaletter", { y: 0 }, { duration: 0.0000001, at: 0.05 }],
    ]);
  };

  const onSgpaButtonClick = async () => {
    await sgpaanimate([
      [".sgpaletter", { y: -27 }, { duration: 0.4, delay: stagger(0.05) }],
      [".sgpa-button", { scale: 0.2 }, { duration: 0.1, at: "<" }],
      [".sgpa-button", { scale: 1 }, { duration: 0.05 }],
      [".sgpaletter", { y: 0 }, { duration: 0.0000001, at: 0.05 }],
    ]);
  };
  useEffect(() => {
    AOS.init({
      easing: "ease",
      once: true,
    });
  }, []);
  return (
    <>
      <span ref={cgpascope} className="mx-2">
        <button
          className={`cgpa-button flex h-12 w-40 items-center justify-center border-2 border-sky-600 p-4 shadow-2xl transition-colors hover:bg-sky-50`}
          data-aos="fade-right"
          data-aos-duration="1400"
          onClick={onCgpaButtonClick}
        >
          <span className="relative flex items-center justify-center overflow-hidden bg-transparent">
            {cgpa.split("").map((letter: string, index: number) => (
              <span
                data-letter={letter}
                key={` ${letter + "-" + index}`}
                className={`text-sky-600 ${lato.className} cgpaletter relative inline-block text-lg after:absolute after:left-0 after:top-full after:text-lg after:content-[attr(data-letter)]`}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </span>
        </button>
      </span>
      <span ref={sgpascope} className="mx-2">
        <button
          className={`sgpa-button flex h-12 w-40 items-center justify-center border-2 border-sky-600  p-4 shadow-2xl transition-colors hover:bg-sky-50`}
          data-aos="fade-left"
          data-aos-duration="1400"
          onClick={onSgpaButtonClick}
        >
          <span className="relative flex items-center justify-center overflow-hidden bg-transparent">
            {sgpa.split("").map((letter: string, index: number) => (
              <span
                data-letter={letter}
                key={` ${letter + "-" + index}`}
                className={`text-sky-600 ${lato.className} sgpaletter relative inline-block text-lg after:absolute after:left-0 after:top-full after:text-lg after:content-[attr(data-letter)]`}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </span>
        </button>
      </span>
    </>
  );
}
