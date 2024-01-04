"use client";
import Portal from "./portal";
import AOS from "aos";
import "aos/dist/aos.css";
import { spectral } from "../fonts";
import { motion } from "framer-motion";

type ModalProps = {
  toggle: () => void;
  isOpen: boolean;
  gpaType: string;
  gpa: string;
};
export default function Modal(props: ModalProps) {
  const { toggle, isOpen, gpaType, gpa } = props;

  const closeModal = () => {
    toggle();
  };

  return (
    <Portal newDomNode="modal-portal">
      <div
        className={`fixed left-0 top-0 flex h-full w-full touch-pan-x items-center justify-center overflow-hidden
         ${isOpen ? "z-[9999999999]" : "-z-[99999]  "}`}
      >
        <div
          className={`delay-400 absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black opacity-0 transition-opacity duration-[1400ms]
       ${isOpen ? "z-[9999999999] opacity-70" : "-z-[99999]  "}`}
          onClick={closeModal}
        ></div>

        {isOpen && (
          <div
            data-aos="flip-left"
            data-aos-duration="2000"
            data-aos-delay="1800"
            className=" fixed z-[99999999999999999] flex h-2/3 w-2/3 
            justify-center rounded-3xl bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-800
              via-indigo-700 to-violet-700"
          >
            <h1
              className={`text-bold mx-auto mt-8 text-2xl text-white  lg:text-5xl ${spectral.className}`}
            >
              Your {gpaType} is:
            </h1>
          </div>
        )}
      </div>
    </Portal>
  );
}
