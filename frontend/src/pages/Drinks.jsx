import { ImageCarousel } from "../components/carousel";

const drinks = [
  {
    id: 1,
    name: "Creme Brulee Matcha Latte",
    price: 6.5,
    image: "/creme_brulee_matcha_latte.jpg",
  },
  {
    id: 2,
    name: "Matcha Black Sesame Latte",
    price: 6.5,
    image: "/black_sesame_matcha_latte.jpg",
  },
  {
    id: 3,
    name: "Butterfly Calamansi",
    price: 6.5,
    image: "/butterfly_calamansi.jpg",
  },
  {
    id: 4,
    name: "Matcha Latte",
    price: 6.5,
    image: "/matcha_latte.jpg",
  },
];

export const Drinks = () => {
  return (
    <>
      <section>
        <div>
          <div className="h-[500px]">
            <img
              src="/yogurt_berry_cake.jpg"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="h-[300px]">
          <div className="text-center mt-14">
            <h1 className="text-5xl font-extrabold font-pinyon">Drink Menu</h1>
            <p className="text-gray-800 mt-6 max-w-5xl mx-auto">
              Indulge your sweet tooth with our delightful desserts, crafted to
              perfection with rich flavors and fresh ingredients. From classic
              favorites to unique creations, each treat is designed to satisfy
              and inspire every craving.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {drinks.map((item) => (
              <div key={item.id} className="rounded-xl hover:scale-105">
                <div className="h-[300px]">
                  {" "}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover border rounded-xl"
                    loading="lazy"
                  />
                </div>
                <div className="text-center p-4">
                  <h1 className="font-semibold text-xl font-semibold">
                    {item.name}
                  </h1>
                  <p className="text-gray-600 mt-1">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
