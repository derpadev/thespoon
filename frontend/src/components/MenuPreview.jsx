import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import desserts from "@/data/menu.json";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const previewItems = desserts.filter((d) => d.image).slice(0, 6);

export default function MenuPreview() {
  return (
    <section id="menu" className="px-8 py-16 bg-[#FFF7E8]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm text-center mb-2">
          What We Offer
        </p>
        <h3 className="text-gray-800 text-3xl md:text-4xl font-bold text-center mb-12">
          Our Menu
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {previewItems.map((dessert) => (
            <motion.div
              key={dessert.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="rounded-2xl shadow-md overflow-hidden">
                <img
                  src={dessert.image}
                  alt={dessert.name}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h4 className="text-xl text-gray-800 font-semibold mb-1">{dessert.name}</h4>
                  <p className="text-gray-400 text-sm mb-3">{dessert.category}</p>
                  <span className="font-bold text-[#D4AF37] text-lg">{dessert.price}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-semibold px-8 py-3 rounded-2xl hover:bg-[#bfa134] transition"
          >
            View Full Menu <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
