"use client";
import Intro from "./intro";
export default function HomePage() {
  return (
    <>
      <main className="min-w-screen flex min-h-screen overflow-hidden">
        <Intro welcome="Welcome to MyGPA." />
      </main>
    </>
  );
}
