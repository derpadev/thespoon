import { Navbar } from "../components/Navbar";
import { useState } from "react";
import ScrollFadeIn from "../components/ScrollFadeIn";

const menu = [
  // Featured / dessert items
  {
    id: 1,
    name: "Mocha Cake",
    price: 9,
    image: "mocha_cake.jpg",
    type: "dessert",
  },
  {
    id: 2,
    name: "Raspberry Mousse Santa Hat",
    price: 9,
    image: "raspberry_mousse_santa_hat.jpg",
    type: "dessert",
  },
  {
    id: 3,
    name: "Cookie Butter Chestnut Mousse",
    price: 9,
    image: "cookie_butter_chestnut_mousse.jpg",
    type: "dessert",
  },
  {
    id: 4,
    name: "Matcha Strawberry Cheesecake",
    price: 9,
    image: "matcha_strawberry_cheesecake.jpg",
    type: "dessert",
  },
  {
    id: 5,
    name: "Flaming Cha Cha",
    price: 9,
    image: "flaming_cha_cha.jpg",
    type: "dessert",
  },
  { id: 6, name: "NO NAME", price: 9, image: "noname.jpg", type: "dessert" },
  {
    id: 7,
    name: "Nutella Bear",
    price: 9,
    image: "nutella_bear.jpg",
    type: "dessert",
  },
  {
    id: 8,
    name: "Apple White Chocolate Mousse",
    price: 9,
    image: "apple_white_chocolate_mousse.jpg",
    type: "dessert",
  },
  {
    id: 9,
    name: "Pumpkin Cheesecake Delight",
    price: 9,
    image: "pumpkin_cheesecake_delight.jpg",
    type: "dessert",
  },
  {
    id: 10,
    name: "Nutella Bear",
    price: 9,
    image: "/nutella_bear.jpg",
    type: "dessert",
  },
  {
    id: 11,
    name: "Ube Cheesecake",
    price: 39,
    image: "/ube_cheesecake.jpg",
    type: "dessert",
  },
  {
    id: 12,
    name: "Lychee Pig",
    price: 9,
    image: "/lychee_pig.jpg",
    type: "dessert",
  },
  {
    id: 13,
    name: "Yuzu Blueberry Mousse",
    price: 45,
    image: "/yuzu_blueberry_mousse.jpg",
    type: "dessert",
  },
  {
    id: 14,
    name: "Dragon Fruit Cheesecake Bear",
    price: 9,
    image: "/dragon_fruit_cheesecake_bear.jpg",
    type: "dessert",
  },

  // Drinks
  {
    id: 15,
    name: "Creme Brulee Matcha Latte",
    price: 6.5,
    image: "/creme_brulee_matcha_latte.jpg",
    type: "drink",
  },
  {
    id: 16,
    name: "Matcha Black Sesame Latte",
    price: 6.5,
    image: "/black_sesame_matcha_latte.jpg",
    type: "drink",
  },
  {
    id: 17,
    name: "Butterfly Calamansi",
    price: 6.5,
    image: "/butterfly_calamansi.jpg",
    type: "drink",
  },
  {
    id: 18,
    name: "Matcha Latte",
    price: 6.5,
    image: "/matcha_latte.jpg",
    type: "drink",
  },
];

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMenu = menu.filter(
    (item) => activeCategory === "All" || item.type === activeCategory
  );

  return (
    <>
      <Navbar />
      <section>
        <div className="text-center">
          <div className="max-w-5xl items-center mx-auto space-y-4 mt-[8rem]">
            <h1 className="opacity-0 animate-fade-in-delay-1 text-5xl font-extrabold font-explora text-yellow-200">
              Menu
            </h1>
            <p className="text-white mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              perferendis sapiente accusamus in eius impedit delectus voluptate
              ipsam minus dolor harum, quam eveniet rerum voluptatem explicabo
              fugit molestias, neque officiis.
            </p>
          </div>
          <div className="opacity-0 animate-fade-in-delay-1 space-x-4">
            <button
              onClick={() => setActiveCategory("All")}
              className={`transition font-semibold border border-yellow-200/30 hover:scale-105 ${
                activeCategory === "All" ? "bg-[#FFD900]/30" : "bg-[#242424]"
              } text-yellow-200 rounded-full px-5 py-2 mt-8`}
            >
              All
            </button>
            <button
              onClick={() => setActiveCategory("dessert")}
              className={`transition font-semibold border border-yellow-200/30 hover:scale-105 ${
                activeCategory === "dessert"
                  ? "bg-[#FFD900]/30"
                  : "bg-[#242424]"
              } text-yellow-200 rounded-full px-5 py-2 mt-8`}
            >
              Desserts
            </button>
            <button
              onClick={() => setActiveCategory("drink")}
              className={`transition font-semibold border border-yellow-200/30 hover:scale-105 ${
                activeCategory === "drink" ? "bg-[#FFD900]/30" : "bg-[#242424]"
              } text-yellow-200 rounded-full px-5 py-2 mt-8`}
            >
              Drinks
            </button>
          </div>
          <div className="opacity-0 animate-fade-in-delay-2 container max-w-6xl mx-auto mt-12 border border-yellow-200/30 bg-[#242424] p-4 rounded-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredMenu.map((item) => (
                <ScrollFadeIn key={item.id}>
                  <div className="rounded-xl hover:scale-105 transition">
                    <div className="h-[300px]">
                      {" "}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover border border-gray-500/30 rounded-xl"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-center text-white pt-2">
                      <h1 className="font-semibold text-xl font-semibold">
                        {item.name}
                      </h1>
                    </div>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
