import { useEffect, useState } from "react";

export const ImageCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === items.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="relative max-w-full mx-auto h-[500px] aspect-[21/9]">
        {items.map((item, index) => (
          <img
            key={item.id}
            src={item.image}
            alt={item.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
