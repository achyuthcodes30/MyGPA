"use client";
import Intro from "./intro";
import { useState, useEffect } from "react";
import IntroPC from "./intropc";
export default function HomePage() {
  const [isSlim, setSlim] = useState(false);
  const updateMedia = () => {
    if (typeof window !== null && window.innerWidth < 1024) {
      setSlim(true);
    }
  };

  useEffect(() => {
    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);
  return (
    <>
      <main className="min-w-screen flex min-h-screen touch-none overflow-hidden">
        {isSlim ? (
          <Intro welcome="Welcome to MyGPA." />
        ) : (
          <IntroPC welcome="Welcome to MyGPA." />
        )}
      </main>
    </>
  );
}
