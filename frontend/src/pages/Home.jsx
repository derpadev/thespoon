import { Link } from "react-router-dom";
import { ImageCarousel } from "../components/carousel";

const featured = [
  { id: 1, name: "Nutella Bear", price: 9, image: "nutella_bear.jpg" },
  { id: 2, name: "Ube Cheesecake", price: 39, image: "ube_cheesecake.jpg" },
  { id: 3, name: "Lychee Pig", price: 9, image: "lychee_pig.jpg" },
  {
    id: 4,
    name: "Yuzu Blueberry Mousse",
    price: 45,
    image: "yuzu_blueberry_mousse.jpg",
  },
];

export const Home = () => {
  return (
    <>
      <section>
        <div>
          <div className="h-[500px]">
            <img
              src="interior.png"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="h-[300px]">
          <div className="text-center mt-14">
            <h1 className="text-5xl font-extrabold font-pinyon">
              Featured Products
            </h1>
            <p className="text-gray-800 mt-6 max-w-5xl mx-auto">
              Our featured products highlight our most popular and carefully
              crafted selections, made with high-quality ingredients and
              designed to deliver exceptional flavor. Each item is chosen to
              represent the best of what we offer, giving customers a taste of
              our signature desserts and drinks while showcasing seasonal
              favorites and customer favorites alike.
            </p>
            <div className="space-x-4 mt-6">
              <Link
                to="drinks"
                className="font-semibold bg-[#736EAE] hover:scale-105 text-white rounded-full px-5 py-2 "
              >
                Drink Menu
              </Link>
              <Link
                to="dessert"
                className="font-semibold bg-[#736EAE] hover:scale-105 text-white rounded-full px-5 py-2 "
              >
                Dessert Menu
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {featured.map((item) => (
              <div key={item.id} className="rounded-xl hover:scale-105 transition">
                <div className="h-[300px]">
                  {" "}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover border border-gray-500/30 rounded-xl"
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
