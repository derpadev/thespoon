import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="px-8 py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/about.jpg"
            alt="Inside The Spoon Dessert Cafe"
            className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          <p className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm mb-2">
            Our Story
          </p>
          <h3 className="text-gray-700 text-4xl font-bold mb-6">About Us</h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Born in the heart of Stanton, California, The Spoon Dessert Cafe
            started with a simple idea — that every dessert should feel like a
            celebration. What began as a small kitchen experiment between
            friends quickly grew into a beloved neighborhood destination.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            We handcraft every mousse, cheesecake, and latte using premium
            ingredients sourced with care. From our signature Ube Cheesecake to
            seasonal creations you won't find anywhere else, each item on our
            menu is designed to surprise and delight.
          </p>
          <div className="flex gap-8">
            <div>
              <p className="text-3xl font-bold text-[#D4AF37]">50+</p>
              <p className="text-gray-500 text-sm">Unique Desserts</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#D4AF37]">100%</p>
              <p className="text-gray-500 text-sm">Made Fresh Daily</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#D4AF37]">5★</p>
              <p className="text-gray-500 text-sm">Customer Love</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}