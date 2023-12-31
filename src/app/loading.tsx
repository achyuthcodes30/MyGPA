import { lato } from "./fonts";
export default function Loading() {
  return (
    <main className="min-w-screen flex min-h-screen touch-none items-center justify-center overflow-hidden">
      <section className="relative flex items-center justify-center">
        <h1 className={` mx-[50%] text-4xl ${lato.className}`}>Loading...</h1>
      </section>
    </main>
  );
}
