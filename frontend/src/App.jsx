import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import desserts from "@/data/menu.json";

export default function DessertShop() {
  const [search, setSearch] = useState("");

  const filteredDesserts = desserts.filter((dessert) =>
    dessert.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold font-delius text-green-600">
          The Spoon
        </h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#menu" className="hover:text-green-500 transition">
            Menu
          </a>
          <a href="#about" className="hover:text-green-500 transition">
            About
          </a>
          <a href="#contact" className="hover:text-green-500 transition">
            Contact
          </a>
        </div>
        <Button className="rounded-2xl">Order Now</Button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Freshly Baked <br />{" "}
            <span className="text-green-500 font-delius">Delights</span>
          </h2>
          <p className="text-lg mb-6 text-gray-600">
            Indulge in handcrafted desserts made with love and the finest
            ingredients.
          </p>
          <Button className="rounded-2xl px-6 py-3 text-lg">
            Explore Menu
          </Button>
        </motion.div>
        <motion.img
          src="https://images.unsplash.com/photo-1551024601-bec78aea704b"
          alt="Desserts"
          className="md:w-1/2 rounded-2xl shadow-xl mt-10 md:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
      </section>

      {/* Menu Section */}
      <section id="menu" className="px-8 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <h3 className="text-3xl font-bold">Our Menu</h3>
            <Input
              placeholder="Search desserts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="max-w-sm"
            />
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredDesserts.map((dessert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="rounded-2xl shadow-md">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-2">
                      {dessert.name}
                    </h4>
                    <p className="text-gray-500 mb-4">{dessert.category}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-green-600">
                        {dessert.price}
                      </span>
                      <Button size="sm" className="rounded-xl">
                        Add
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 py-16 bg-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">About Us</h3>
          <p className="text-gray-600 text-lg">
            At The Spoon, we believe desserts bring people together. Our
            pastries are baked fresh daily with premium ingredients to ensure
            every bite is unforgettable.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
          <p className="text-gray-600 mb-6">
            Have a special request or catering inquiry? We'd love to hear from
            you!
          </p>

          {/* Store Info */}
          <div className="mb-6">
            <p className="text-gray-700 text-lg">
              📍 11382 Beach Blvd #4, Stanton, CA 90680
            </p>
            <p className="text-gray-700 text-lg">☎ (714) 622-4842</p>
            <p className="text-gray-700 text-lg">
              ⏰ Mon-Thur: 11am - 9pm | Fri-Sun: 10am - 10pm
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Input placeholder="Your Email" className="max-w-sm" />
            <Button className="rounded-2xl">Send</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white text-center py-6 mt-10">
        <p>© {new Date().getFullYear()} The Spoon. All rights reserved.</p>
      </footer>
    </div>
  );
}
