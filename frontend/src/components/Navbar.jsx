import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed w-full flex items-center justify-between px-8 py-4 z-30 transition-all duration-300
          ${scrolled ? "bg-black/80 backdrop-blur-lg shadow-lg" : "bg-black/20 backdrop-blur-md"}`}
      >
        <h1 className="text-2xl md:text-3xl font-bold font-delius">
          <span className="text-white">The</span>{" "}
          <span className="text-[#D4AF37]">Spoon</span>
        </h1>

        {/* Desktop links */}
        <div className="space-x-6 hidden md:flex">
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} className="text-white hover:text-[#D4AF37] transition">
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button
            className="rounded-2xl bg-[#D4AF37] text-black hover:bg-[#bfa134] hidden md:inline-flex"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            Order Now
          </Button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-1"
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
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-white text-2xl font-semibold hover:text-[#D4AF37] transition"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
          <Button
            className="rounded-2xl bg-[#D4AF37] text-black hover:bg-[#bfa134] text-lg px-8 py-3"
            onClick={() => {
              setMobileOpen(false);
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            Order Now
          </Button>
        </div>
      )}
    </>
  );
}
