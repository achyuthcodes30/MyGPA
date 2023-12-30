"use client";

import { lato } from "./fonts";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Button() {
  useEffect(() => {
    AOS.init({
      easing: "ease",
      once: true,
    });
  }, []);
  return (
    <>
      <span className="mx-2">
        <button
          className={`cool-button relative flex h-12 w-40 items-center justify-center  border-2 border-sky-600 p-4 shadow-xl`}
          data-aos="fade-right"
          data-aos-duration="1400"
        >
          <span className={`text-cyan-600 ${lato.className} text-lg`}>
            Find my CGPA
          </span>
        </button>
      </span>
      <span className="mx-2">
        <button
          className={`cool-button relative flex h-12 w-40 items-center justify-center  border-2 border-sky-600 p-4 shadow-xl`}
          data-aos="fade-left"
          data-aos-duration="1400"
        >
          <span className={`text-cyan-600 ${lato.className} text-lg`}>
            Find my SGPA
          </span>
        </button>
      </span>
    </>
  );
}
