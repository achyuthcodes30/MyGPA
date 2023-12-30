import Link from "next/link";
import Image from "next/image";
import Intro from "./intro";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./button";
export default function HomePage() {
  return (
    <>
      <main className="min-w-screen flex min-h-screen overflow-hidden">
        <Intro welcome="Welcome to MyGPA." />
      </main>
    </>
  );
}
