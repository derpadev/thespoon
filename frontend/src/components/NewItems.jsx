import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

// TODO: Replace these placeholders with the 4 new items.
// Add a photo to frontend/public/ (e.g. "/small-desserts/my-item.jpg")
// and set `image` to that path when ready.
const newItems = [
  {
    id: 1,
    name: "Pumpkin Cheesecake",
    description: "Light, sweet, pumpkin spiced",
    price: "$8",
    image: "/small-desserts/pumpkin_cheesecake.png",
  },
  {
    id: 2,
    name: "Earl Grey Pear",
    description: "Real pear and white chocolate.",
    price: "$8",
    image: "/small-desserts/pear.png",
  },
  {
    id: 3,
    name: "Apple White Chocolate",
    description: "Apple compote and white chocolate.",
    price: "$8",
    image: "/small-desserts/apple_white_chocolate.png",
  },
  {
    id: 4,
    name: "Pumpkin Spice Latte",
    description: "Refreshing pumpkin spice latte",
    price: "$6.5",
    image: "/small-desserts/pumpkin_spice_latte.png",
  },
];

export default function NewItems() {
  return (
    <section id="new-items" className="px-8 py-16 bg-[#F1F5F9]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#F5D76E] font-semibold tracking-widest uppercase text-sm text-center mb-2">
          Just Added
        </p>
        <h3 className="text-gray-800 text-3xl md:text-4xl font-bold text-center mb-12">
          New Items
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="rounded-2xl shadow-md overflow-hidden h-full bg-white">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-neutral-100 flex flex-col items-center justify-center text-gray-400">
                    <Sparkles size={28} />
                    <p className="text-sm mt-2">Photo Coming Soon</p>
                  </div>
                )}
                <CardContent className="p-6">
                  <h4 className="text-xl text-gray-800 font-semibold mb-1">
                    {item.name}
                  </h4>
                  {item.description && (
                    <p className="text-gray-500 text-sm mb-3">
                      {item.description}
                    </p>
                  )}
                  {item.price && (
                    <span className="font-bold text-[#F5D76E] text-lg">
                      {item.price}
                    </span>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
