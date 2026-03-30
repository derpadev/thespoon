import { motion } from "framer-motion";
import { MapPin, Phone, PartyPopper } from "lucide-react";

const options = [
  {
    icon: MapPin,
    title: "In-Store",
    description: "Walk in and explore our full menu. Enjoy your dessert fresh at our Stanton cafe!",
    cta: "Get Directions",
    href: "https://www.google.com/maps/place/The+Spoon/@33.7971664,-117.9947788,17z",
  },
  {
    icon: Phone,
    title: "Call Ahead",
    description: "Browse our online menu. Call ahead to reserve your order and pickup your dessert!",
    cta: "Browse Menu",
    href: "#menu",
  },
  {
    icon: PartyPopper,
    title: "Catering & Events",
    description: "Hosting a party or special occasion? Let us create a custom message on your dessert!",
    cta: "Contact Us",
    href: "#contact",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function OrderOptions() {
  return (
    <section id="order" className="px-8 py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm text-center mb-2">
          How to Order
        </p>
        <h3 className="text-gray-800 text-3xl md:text-4xl font-bold text-center mb-14">
          Ordering Options
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {options.map((option, i) => (
            <motion.div
              key={option.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-5">
                <option.icon size={28} className="text-[#D4AF37]" />
              </div>
              <h4 className="text-gray-800 text-xl font-bold mb-3">{option.title}</h4>
              <p className="text-gray-500 leading-relaxed mb-6 flex-1">{option.description}</p>
              <a
                href={option.href}
                target={option.href.startsWith("http") ? "_blank" : undefined}
                rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1 text-[#D4AF37] font-semibold hover:underline transition"
              >
                {option.cta} &rarr;
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
