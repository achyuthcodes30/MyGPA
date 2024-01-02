"use client";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { poppins, spectral, lato } from "../fonts";
import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useAnimate } from "framer-motion";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type Fields = {
  semesters: {
    credits: number | null;
    sgpa: number | null;
  }[];
};

export default function CgpaForm() {
  const semesterRef = useRef<HTMLSpanElement>(null);
  const [calcscope, calcanimate] = useAnimate();
  const [addscope, addanimate] = useAnimate();
  const [rmscope, rmanimate] = useAnimate();

  const handleCalcClick = async () => {
    await calcanimate([
      [".calcbutton", { scale: 0.8 }, { duration: 0.1 }],
      [".calcbutton", { scale: 1 }, { duration: 0.1 }],
    ]);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Fields>();
  const onCalc: SubmitHandler<Fields> = data => console.log(data);

  const [semesterNumber, setSemesterNumber] = useState(1);
  const [semesterTitles] = useAutoAnimate<HTMLDivElement>();
  const [creditsFields] = useAutoAnimate<HTMLDivElement>();
  const [sgpaFields] = useAutoAnimate<HTMLDivElement>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "semesters",
  });

  const addSemester = async () => {
    if (fields.length < 8) {
      append({ credits: null, sgpa: null });
      setSemesterNumber(semesterNumber + 1);
    }
    await addanimate([
      [".addbutton", { scale: 0.8 }, { duration: 0.1 }],
      [".addbutton", { scale: 1 }, { duration: 0.1 }],
    ]);
  };

  const removeSemester = async () => {
    if (fields.length > 1) {
      remove(fields.length - 1);
      setSemesterNumber(semesterNumber - 1);
    }
    await rmanimate([
      [".rmbutton", { scale: 0.8 }, { duration: 0.1 }],
      [".rmbutton", { scale: 1 }, { duration: 0.1 }],
    ]);
  };

  useEffect(() => {
    AOS.init({
      easing: "ease",
      once: true,
    });
  }, []);

  return (
    <div
      className="relative mt-16 lg:mt-12"
      style={{
        height: "90%",
        width: "95%",
        backgroundColor: "transparent",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <form onSubmit={handleSubmit(onCalc)} className="h-full w-full ">
        <span className="flex w-full flex-wrap justify-between">
          <div ref={semesterTitles} className="mb-4">
            <span ref={semesterRef}>
              <h1
                className={`text-2xl text-white underline lg:text-5xl ${poppins.className}`}
                data-aos="fade-down"
                data-aos-duration="1800"
              >
                Semester
              </h1>
            </span>
            <span ref={semesterRef}>
              <h2
                className={`text-xl text-white lg:text-4xl ${spectral.className} mb-5 mt-7 lg:mb-9 lg:mt-9`}
                data-aos="fade-right"
                data-aos-duration="1800"
                data-aos-delay="1400"
              >
                Semester 1
              </h2>
            </span>

            {fields.slice(1, semesterNumber).map((semester, index: number) => (
              <React.Fragment key={index}>
                <h2
                  className={`text-xl text-white lg:text-4xl ${spectral.className} mb-5 lg:mb-8`}
                  key={index}
                >
                  Semester {index + 2}
                </h2>
              </React.Fragment>
            ))}
            <div ref={calcscope}>
              <div
                data-aos="fade-right"
                data-aos-duration="1400"
                data-aos-delay="2400"
                className="calcbutton flex w-[80%] justify-center rounded-full bg-gradient-to-br from-pink-600 to-purple-600 shadow-2xl lg:w-full"
                onClick={handleCalcClick}
              >
                <button
                  className={` text-sm font-semibold text-white lg:p-2 lg:text-lg`}
                  type="submit"
                >
                  Calculate CGPA
                </button>
              </div>
            </div>
          </div>
          <div ref={creditsFields} className="mb-4 max-w-[30%]">
            <span className="flex justify-center" ref={semesterRef}>
              <h1
                className={`text-2xl text-white underline lg:text-5xl ${poppins.className}`}
                data-aos="fade-down"
                data-aos-duration="1800"
              >
                Credits
              </h1>
            </span>
            <span
              className="relative mt-6 block flex w-full justify-center lg:mt-8"
              ref={semesterRef}
            >
              <div
                data-aos="flip-down"
                data-aos-duration="2000"
                data-aos-delay="1400"
                className="-z-2 absolute h-full w-4/5 rounded-xl bg-gradient-to-br from-violet-400 to-rose-300 opacity-75 blur lg:w-full"
              ></div>
              <input
                data-aos="flip-down"
                data-aos-duration="2000"
                data-aos-delay="1400"
                type="number"
                placeholder="Total credits"
                min="0"
                step="0.001"
                {...register(`semesters.0.credits` as const, {
                  required: "Please enter semester credits",
                })}
                className={`h-8 w-4/5 lg:h-10 lg:w-full ${spectral.className} relative rounded-xl text-center`}
              />
            </span>
            {fields.slice(1, semesterNumber).map((semester, index) => (
              <span
                key={index + 1}
                className="relative mt-4 block flex w-full justify-center lg:mt-8"
              >
                <div className="-z-2 absolute h-full w-4/5 rounded-xl bg-gradient-to-br from-violet-400 to-rose-300 opacity-75 blur lg:w-full"></div>
                <input
                  type="number"
                  placeholder="Total credits"
                  min="0"
                  step="0.001"
                  {...register(`semesters.${index + 1}.credits` as const, {
                    required: "Please enter semester credits",
                  })}
                  className={`relative h-8 w-4/5 lg:h-10 lg:w-full ${spectral.className} rounded-xl text-center`}
                />
              </span>
            ))}
            <div ref={addscope}>
              <div
                data-aos="fade-up"
                data-aos-duration="1400"
                data-aos-delay="2400"
                className="addbutton mt-5 flex w-full justify-center rounded-full bg-gradient-to-br from-green-400 to-cyan-600 lg:mt-9"
              >
                <button type="button" onClick={addSemester}>
                  <h1
                    className={` text-center text-sm font-semibold text-white lg:flex lg:flex-row  lg:p-2 lg:text-lg`}
                  >
                    <p>Add&nbsp;</p>
                    <p>semester</p>
                  </h1>
                </button>
              </div>
            </div>
          </div>
          <div ref={sgpaFields} className="mb-4 max-w-[30%]">
            <span className="flex justify-center" ref={semesterRef}>
              <h1
                className={`text-2xl text-white underline lg:text-5xl ${poppins.className}`}
                data-aos="fade-down"
                data-aos-duration="1800"
              >
                SGPA
              </h1>
            </span>
            <span
              ref={semesterRef}
              className="relative mt-6 block flex w-full justify-center lg:mt-8"
            >
              <div
                data-aos="flip-down"
                data-aos-duration="2000"
                data-aos-delay="1400"
                className="-z-2 absolute h-full w-4/5 rounded-xl bg-gradient-to-br from-violet-400  to-rose-300 opacity-75 blur lg:w-full"
              ></div>
              <input
                data-aos="flip-down"
                data-aos-duration="2000"
                data-aos-delay="1400"
                type="number"
                placeholder="SGPA"
                min="0"
                step="0.001"
                {...register("semesters.0.sgpa" as const, {
                  required: "Please enter SGPA",
                })}
                className={`h-8 w-4/5 lg:h-10 lg:w-full ${spectral.className} relative rounded-xl text-center`}
              />
            </span>
            {fields.slice(1, semesterNumber).map((semester, index) => (
              <span
                key={index + 1}
                className="relative mt-4 block flex w-full justify-center lg:mt-8"
              >
                <div className="-z-2 absolute h-full w-4/5 rounded-xl bg-gradient-to-br from-violet-400 to-rose-300 opacity-75 blur lg:w-full"></div>
                <input
                  type="number"
                  placeholder="SGPA"
                  min="0"
                  step="0.001"
                  {...register(`semesters.${index + 1}.sgpa` as const, {
                    required: "Please enter SGPA",
                  })}
                  className={`h-8 w-4/5 lg:h-10 lg:w-full ${spectral.className} relative rounded-xl text-center`}
                />
              </span>
            ))}
            <div ref={rmscope}>
              <div
                data-aos="fade-left"
                data-aos-duration="1400"
                data-aos-delay="2400"
                className="rmbutton mt-5 flex w-full justify-center rounded-full bg-gradient-to-br from-red-600 via-rose-500 to-pink-600 lg:mt-9"
              >
                <button type="button" onClick={removeSemester}>
                  <h1
                    className={` text-center text-sm font-semibold text-white  lg:p-2 lg:text-lg`}
                  >
                    Remove semester
                  </h1>
                </button>
              </div>
            </div>
          </div>
        </span>
      </form>
    </div>
  );
}