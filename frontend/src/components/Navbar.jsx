import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav className="fixed w-full flex items-center justify-between px-8 py-4 z-30 transition-all duration-300 bg-white backdrop-blur-md shadow-sm">
        <Link to="/" className="text-2xl md:text-3xl font-bold tracking-widest uppercase">
          <span className="text-gray-800">The</span>{" "}
          <span className="text-[#D4AF37]">Spoon</span>
        </Link>

        {/* Desktop links */}
        <div className="space-x-6 hidden md:flex items-center">
          <Link
            to="/menu"
            className="text-gray-700 hover:text-[#D4AF37] transition"
          >
            Menu
          </Link>
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-700 hover:text-[#D4AF37] transition"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-700 hover:text-[#D4AF37] transition"
          >
            Contact
          </button>
        </div>

        <div className="flex items-center gap-3">
          <Button
            className="rounded-2xl bg-[#D4AF37] text-black hover:bg-[#bfa134] hidden md:inline-flex"
            onClick={() => scrollToSection("contact")}
          >
            Order Now
          </Button>

          <button
            className="md:hidden text-gray-800 p-1"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-20 bg-black/90 flex flex-col items-center justify-center gap-8 md:hidden">
          <Link
            to="/menu"
            className="text-white text-2xl font-semibold hover:text-[#D4AF37] transition"
            onClick={() => setMobileOpen(false)}
          >
            Menu
          </Link>
          <button
            className="text-white text-2xl font-semibold hover:text-[#D4AF37] transition"
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
          <button
            className="text-white text-2xl font-semibold hover:text-[#D4AF37] transition"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
          <Button
            className="rounded-2xl bg-[#D4AF37] text-black hover:bg-[#bfa134] text-lg px-8 py-3"
            onClick={() => scrollToSection("contact")}
          >
            Order Now
          </Button>
        </div>
      )}
    </>
  );
}
