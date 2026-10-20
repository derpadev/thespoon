import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

// Add your dessert images here (stored in public/)
// Temporarily showing only the fall promo — restore the slides below when ready.
// const slides = [
//   "/whole-cakes/ube_cheesecake_big_cake.png",
//   "/whole-cakes/durian_mousse_big_cake.png",
//   "/whole-cakes/heart_shaped_big_cake.png",
// ];
const slides = ["/fall.png"];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // auto-rotate every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <AnimatePresence>
        {slides.map((slide, index) =>
          index === current ? (
            <motion.div
              key={slide}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src={slide}
                alt="Dessert"
                className="absolute inset-0 h-full w-full object-cover object-center"
                decoding="async"
              />
            </motion.div>
          ) : null,
        )}
      </AnimatePresence>

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Heading — top center, below the fixed navbar */}
      <div className="absolute top-44 sm:top-24 md:top-28 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-center whitespace-nowrap drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
        <h1 className="flex items-baseline gap-2 md:gap-4 leading-none">
          <span className="font-pinyon font-normal text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-300 to-amber-400">
            Fall
          </span>
          <span className="font-playfair font-bold uppercase text-4xl md:text-6xl tracking-[0.12em] text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-400 to-orange-500">
            Arrivals
          </span>
        </h1>
        <span className="mt-2 md:mt-3 h-px w-40 md:w-64 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
      </div>

      {/* Logo — top left corner, below the fixed navbar */}
      <img
        src="/thespoon.png"
        alt="The Spoon"
        className="absolute top-20 left-6 md:top-24 md:left-10 z-10 h-24 md:h-36 w-auto object-contain"
      />

      {/* Hero Text */}
      <div className="relative z-10 flex h-full flex-col items-center justify-end pb-16 md:pb-20 text-white text-center px-6">
        <p className="text-lg md:text-xl font-bold max-w-xl translate-y-[6px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
          Contemporary desserts crafted in Stanton, California
        </p>
        <div className="mt-8 flex gap-4">
          <Button
            className="bg-[#F1F5F9] text-black h-auto px-10 py-4 md:px-12 md:py-5 text-lg md:text-xl font-bold rounded-full hover:bg-gray-200"
            onClick={() => {
              const element = document.getElementById("contact");
              const yOffset = -80; // adjust based on navbar height
              const y =
                element.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }}
          >
            Visit Us
          </Button>
          <Button
            asChild
            className="bg-[#F5D76E] text-black h-auto px-10 py-4 md:px-12 md:py-5 text-lg md:text-xl font-bold rounded-full hover:bg-[#EBC95C]"
          >
            <Link to="/menu">Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
