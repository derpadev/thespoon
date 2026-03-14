import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

// Add your dessert images here (stored in public/images/)
const slides = ["yuzu_blueberry_mousse.jpg", "/ube_cheesecake.jpg", "/mocha_cake.jpg"];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <AnimatePresence>
        {slides.map((slide, index) =>
          index === current ? (
            <motion.img
              key={slide}
              src={slide}
              alt="Dessert"
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          ) : null,
        )}
      </AnimatePresence>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Text */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-white text-center px-6">
        <img
          src="/thespoon.png"
          alt="The Spoon"
          className="h-80 md:h-[28rem] w-auto object-contain mb-4"
        />
        <p className="text-lg md:text-xl max-w-xl">
          Contemporary desserts crafted in Stanton, California
        </p>
        <div className="mt-8 flex gap-4">
          <Button
            className="bg-[#FFF7E8] text-black px-6 py-3 rounded-md hover:bg-gray-200"
            onClick={() => {
              const element = document.getElementById("menu");
              const yOffset = -80; // adjust based on navbar height
              const y =
                element.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }}
          >
            View Menu
          </Button>
          <Button
            className="bg-[#D4AF37] text-black px-6 py-3 rounded-md bg-[#D4AF37] hover:bg-[#bfa134]"
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
        </div>

        {/* Navigation dots */}
        <div className="flex gap-2 mt-6">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-3 w-3 rounded-full cursor-pointer transition ${
                i === current ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
