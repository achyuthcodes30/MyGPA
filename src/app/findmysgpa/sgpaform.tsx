{
  /* "use client";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { poppins, spectral, lato } from "../fonts";
import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useAnimate } from "framer-motion";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type Fields = {
  courses: {
    title: string | null;
    credits: number | null;
    grade: string | null;
  }[];
};

export default function SgpaForm() {
  const courseRef = useRef<HTMLSpanElement>(null);
  const [calcscope, calcanimate] = useAnimate();
  const [addscope, addanimate] = useAnimate();
  const [rmscope, rmanimate] = useAnimate();

  const handleCalcClick = async () => {
    await calcanimate([
      [".calcbutton", { scale: 0.9 }, { duration: 0.2 }],
      [".calcbutton", { scale: 1 }, { duration: 0.2 }],
    ]);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Fields>();
  const onCalc: SubmitHandler<Fields> = data => {
    console.log(data);
  };

  const [courseNumber, setCourseNumber] = useState(1);
  const [courseTitles] = useAutoAnimate<HTMLDivElement>();
  const [creditsFields] = useAutoAnimate<HTMLDivElement>();
  const [gradeFields] = useAutoAnimate<HTMLDivElement>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "courses",
  });

  const addCourse = async () => {
    if (fields.length < 8) {
      append({ title: null, credits: null, grade: null });
      setCourseNumber(courseNumber + 1);
    }
    await addanimate([
      [".addbutton", { scale: 0.9 }, { duration: 0.2 }],
      [".addbutton", { scale: 1 }, { duration: 0.2 }],
    ]);
  };

  const removeCourse = async () => {
    if (fields.length > 1) {
      remove(fields.length - 1);
      setCourseNumber(courseNumber - 1);
    }
    await rmanimate([
      [".rmbutton", { scale: 0.9 }, { duration: 0.2 }],
      [".rmbutton", { scale: 1 }, { duration: 0.2 }],
    ]);
  };

  useEffect(() => {
    AOS.init({
      easing: "ease",
      once: true,
    });
  }, []);
}
*/
}
