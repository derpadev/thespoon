import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const menuCtaClassName =
  "rounded-2xl bg-[#D4AF37] text-gray-900 font-bold text-base px-6 py-2.5 shadow-md " +
  "hover:bg-[#c9a227] hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.03] " +
  "transition-all duration-200 ease-out";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollToSection = (id) => {
    setMobileOpen(false);
    if (isHome) {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -80;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <>
      <nav className="fixed w-full flex items-center justify-between px-8 py-4 z-30 transition-all duration-300 bg-white backdrop-blur-md shadow-sm">
        <Link to="/" className="text-2xl md:text-3xl font-bold tracking-widest uppercase">
          <span className="text-gray-800">The</span>{" "}
          <span className="text-[#D4AF37]">Spoon</span>
        </Link>

        {/* Desktop links */}
        <div className="space-x-6 hidden md:flex items-center">
          <button onClick={() => scrollToSection("order")} className="text-gray-700 hover:text-[#D4AF37] transition">
            Order Now
          </button>
          <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-[#D4AF37] transition">
            About
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-[#D4AF37] transition">
            Contact
          </button>
        </div>

        <div className="flex items-center gap-3">
          <Button asChild className={`${menuCtaClassName} hidden md:inline-flex animate-[fade-in_0.6s_ease-out]`}>
            <Link to="/menu">Menu</Link>
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
          <button
            className="text-white text-2xl font-semibold hover:text-[#D4AF37] transition"
            onClick={() => scrollToSection("order")}
          >
            Order Now
          </button>
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
          <Button asChild className={`${menuCtaClassName} text-lg px-8 py-3`}>
            <Link to="/menu" onClick={() => setMobileOpen(false)}>Menu</Link>
          </Button>
        </div>
      )}
    </>
  );
}
