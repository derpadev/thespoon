import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.jpg";
import ScrollFadeIn from "../components/ScrollFadeIn";

const featured = [
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
  },
  {
    id: 3,
    name: "Cookie Butter Chestnut Mousse",
    price: 9,
    image: "cookie_butter_chestnut_mousse.jpg",
  },
  {
    id: 4,
    name: "Matcha Strawberry Cheesecake",
    price: 9,
    image: "matcha_strawberry_cheesecake.jpg",
  },
  { id: 5, name: "Flaming Cha Cha", price: 9, image: "flaming_cha_cha.jpg" },
  { id: 6, name: "NO NAME", price: 9, image: "noname.jpg" },
  { id: 7, name: "Nutella Bear", price: 9, image: "nutella_bear.jpg" },
  {
    id: 8,
    name: "Apple White Chocolate Mousse",
    price: 9,
    image: "apple_white_chocolate_mousse.jpg",
  },
  {
    id: 9,
    name: "Pumpkin Cheesecake Delight",
    price: 9,
    image: "pumpkin_cheesecake_delight.jpg",
  },
];

export const Home = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <ScrollFadeIn>
        <section className="min-h-screen">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 p-4 min-h-screen">
            <div
              className="col-span-1 sm:col-span-2 md:col-span-4 rounded-xl bg-center bg-cover relative"
              style={{ backgroundImage: "url('/hero1.png')" }}
            >
              <div className="opacity-0 animate-fade-in-delay-2 bg-[#171717ff] border border-black/30 m-16 p-2 inline-flex items-center text-white font-semibold space-x-4 rounded-md">
                <div className="border inline-flex items-center p-2 rounded border-yellow-200/30 bg-[#242424]">
                  <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="active:scale-120 hover:scale-110 text-2xl text-yellow-200"
                  >
                    <FiMenu />
                  </button>
                </div>
                {isOpen ? (
                  <>
                    <h1 className="font-explora">THE SPOON</h1>
                    <Link
                      to="menu"
                      className="font-explora active:scale-110 hover:scale-105 text-yellow-200"
                    >
                      MENU
                    </Link>
                    <Link
                      to="about"
                      className="font-explora active:scale-110 hover:scale-105 text-yellow-200"
                    >
                      ABOUT
                    </Link>
                    <Link className="font-explora active:scale-110 hover:scale-105 text-yellow-200 bg-[#242424] p-2 rounded border border-yellow-200/30">
                      ORDER ONLINE
                    </Link>
                  </>
                ) : (
                  <></>
                )}
              </div>

              <h1
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl
    p-4 sm:p-8 md:p-12 lg:p-16 text-yellow-200 font-explora font-extrabold absolute bottom-0 left-0 opacity-0 animate-fade-in-delay-2"
              >
                HEAVENLY
                <br />
                BITES
              </h1>

              <div className="absolute bottom-0 right-0 bg-[#171717ff] p-4 text-2xl rounded-tl-xl text-yellow-200 flex space-x-4">
                <a
                  className="rounded border border-yellow-200/30 bg-[#242424] p-2"
                  href="https://www.instagram.com/thespoondessert/"
                  target="_blank"
                >
                  <FaInstagram />
                </a>
                <a
                  className="rounded border border-yellow-200/30 bg-[#242424] p-2"
                  href="https://www.facebook.com/profile.php?id=100089959877430"
                  target="_blank"
                >
                  <CiFacebook />
                </a>
              </div>
            </div>
            <div className="grid grid-rows-3 gap-4 font-semibold">
              <div
                className="relative rounded-xl bg-cover"
                style={{ backgroundImage: "url('/hero2.jpg')" }}
              >
                {" "}
                <div className="opacity-0 animate-fade-in-delay-2 absolute bottom-0 right-0 bg-[#171717ff] p-2 text-sm rounded-tl-xl text-yellow-200">
                  {" "}
                  Raspberry Mousse Santa Hat
                </div>
              </div>
              <div
                className="relative rounded-xl bg-cover"
                style={{ backgroundImage: "url('/hero3.jpg')" }}
              >
                {" "}
                <div className="opacity-0 animate-fade-in-delay-2 absolute bottom-0 right-0 bg-[#171717ff] p-2 text-sm rounded-tl-xl text-yellow-200">
                  {" "}
                  Citrus Brulee Cheesecake
                </div>
              </div>
              <div
                className="relative rounded-xl bg-cover"
                style={{ backgroundImage: "url('/hero4.jpg')" }}
              >
                {" "}
                <div className="opacity-0 animate-fade-in-delay-2 absolute bottom-0 right-0 bg-[#171717ff] p-2 text-sm rounded-tl-xl text-yellow-200">
                  {" "}
                  Mocha Cake
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>
      <section>
        <div className="text-center space-y-12">
          <h1 className="text-8xl font-explora text-white mt-[8rem]">
            The Spoon
          </h1>
          <h1 className="text-5xl font-extrabold font-explora text-yellow-200">
            Featured Desserts
          </h1>
          <p className="text-white max-w-5xl mx-auto">
            Our featured products highlight our most popular and carefully
            crafted selections, made with high-quality ingredients and designed
            to deliver exceptional flavor. Each item is chosen to represent the
            best of what we offer, giving customers a taste of our signature
            desserts and drinks while showcasing seasonal favorites and customer
            favorites alike.
          </p>
          <div className="container max-w-6xl mx-auto mt-12 border border-yellow-200/30 bg-[#242424] p-4 rounded-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {featured.map((item) => (
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

            <div className="flex justify-center">
              <Link
                to="menu"
                className="font-semibold border border-yellow-200/30 bg-[#242424] hover:scale-105 text-yellow-200 rounded-full px-5 py-2 mt-8 "
              >
                View Full Menu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
