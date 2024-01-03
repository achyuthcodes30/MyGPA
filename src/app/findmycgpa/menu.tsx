"use client";
import React, { useState, useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/menu.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { spectral } from "../fonts";

type MenuProps = {
  link1: string;
  link2: string;
};

function Menu(props: MenuProps) {
  const { link1, link2 } = props;
  let linkerinit = [""];
  if (link2) {
    linkerinit = link2.split("").slice(-4);
  }
  let linkertext = "";

  if (linkerinit && linkerinit.length > 0) {
    for (const char of linkerinit) {
      if (char) {
        linkertext += char.toLowerCase();
      }
    }
  }
  const router = useRouter();
  const aniref = useRef(null);
  const [rotation, setRotation] = useState(false);
  const rotateOnClick = () => {
    setRotation(!rotation);
  };
  useEffect(() => {
    AOS.init({
      easing: "ease",
      once: true,
    });
  }, []);
  return (
    <div className="absolute h-full w-full" ref={aniref}>
      <div
        data-aos="fade-down-right"
        data-aos-duration="1400"
        className="absolute z-[99999]"
      >
        <div
          className={` absolute h-auto w-auto cursor-pointer rounded-br-full bg-white pb-4 pl-1 pr-4 pt-3 lg:pb-6 lg:pl-2 lg:pr-6 lg:pt-4`}
          onClick={rotateOnClick}
        >
          <div
            className={`ease space-y-1.5 transition-transform duration-300 lg:space-y-2 ${
              rotation ? `rotate-90 ` : ` `
            }`}
          >
            <span className=" relative block h-0.5 w-6 rounded-full bg-gray-400 lg:h-1 lg:w-8"></span>
            <span className="relative block h-0.5 w-6 rounded-full bg-gray-400 lg:h-1 lg:w-8"></span>
            <span className="relative block h-0.5 w-6 rounded-full bg-gray-400 lg:h-1 lg:w-8"></span>
          </div>
        </div>
      </div>
      <Link href="../" className="absolute z-[99999999]">
        <span
          className={`absolute left-[4.5vw] top-[4vh] z-[99999999] -rotate-[48deg] text-xl text-black lg:left-[6vw] lg:top-[15vh] lg:rotate-0 lg:text-4xl
         ${spectral.className} ${
           rotation
             ? "opacity-100 transition-all duration-[1800ms]"
             : " opacity-0 transition-all duration-300"
         }`}
          style={{ fontWeight: 800 }}
        >
          {link1}
        </span>
      </Link>
      <Link href={`../findmy${linkertext}`}>
        <span
          className={`absolute left-[8vw] top-[10vh] z-[999] -rotate-[48deg] text-xl text-black lg:left-[15vw] lg:top-[50vh] lg:rotate-0 lg:text-4xl
         ${spectral.className} ${
           rotation
             ? " opacity-100 transition-all duration-[2000ms] "
             : "duration-[0.0001ms]transition-all opacity-0"
         }`}
          style={{ fontWeight: 800 }}
        >
          {link2}
        </span>
      </Link>
      <nav
        id="nav"
        className={` absolute inset-0 overflow-hidden transition-all duration-1000 ${
          rotation ? "visible z-[100]" : " invisible -z-[1] "
        }`}
      >
        <ul>
          <li className="shape-circle circle-one curser-pointer">
            <Link
              href={`../findmy${linkertext}`}
              className="absolute z-[20] h-full w-full"
            ></Link>
          </li>

          <li className="shape-circle circle-one curser-pointer">
            <Link href="../" className="absolute z-[20] h-full w-full"></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
