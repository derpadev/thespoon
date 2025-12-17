import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#242424] text-white py-12 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left side: branding */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-xl font-bold">The Spoon</h1>
          <p className="text-gray-400 text-sm">Contemporary Dessert</p>
        </div>

        {/* Center: links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="/" className="hover:text-yellow-200 transition">
            Home
          </a>
          <a href="/menu" className="hover:text-yellow-200 transition">
            Menu
          </a>
          <a href="/about" className="hover:text-yellow-200 transition">
            About
          </a>
          <a href="/contact" className="hover:text-yellow-200 transition">
            Contact
          </a>
        </div>

        {/* Right side: social icons */}
        <div className="flex space-x-4 text-2xl">
          <a
            href="https://www.facebook.com/profile.php?id=100089959877430"
            target="_blank"
            className="hover:text-yellow-200 transition"
          >
            <CiFacebook />
          </a>
          <a
            href="https://www.instagram.com/thespoondessert/"
            target="_blank"
            className="hover:text-yellow-200 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} The Spoon. All rights reserved.
      </div>
    </footer>
  );
};
