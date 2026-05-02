import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

// Add your dessert images here (stored in public/)
const slides = [
  "/mothersday.png",
  "/yuzu_blueberry_mousse.jpg",
  "/ube_cheesecake.jpg",
  "/mocha_cake.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const isMothersDaySlide = slides[current] === "/mothersday.png";

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
              className={`absolute inset-0 ${
                slide === "/mothersday.png" ? "bg-neutral-950" : ""
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src={slide}
                alt={slide === "/mothersday.png" ? "Mother's Day" : "Dessert"}
                className={
                  slide === "/mothersday.png"
                    ? "absolute top-15 bottom-4 left-4 right-4 h-full w-full object-contain object-center sm:bottom-6 sm:left-6 sm:right-6"
                    : "absolute inset-0 h-full w-full object-cover object-center"
                }
                decoding="async"
                fetchPriority={slide === "/mothersday.png" ? "high" : "auto"}
              />
            </motion.div>
          ) : null,
        )}
      </AnimatePresence>

      {/* Overlay for text readability — lighter on promo slide so artwork reads */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          isMothersDaySlide ? "bg-black/30" : "bg-black/40"
        }`}
      />

      {/* Hero Text — hidden on Mother's Day slide so the promo art is unobstructed */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-white text-center px-6">
        {!isMothersDaySlide && (
          <>
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
          </>
        )}
      </div>
    </section>
  );
}
