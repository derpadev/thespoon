import { FaInstagram, FaFacebookF, FaYelp } from "react-icons/fa";

const socials = [
  { icon: FaInstagram, href: "https://www.instagram.com/thespoondessert/", label: "Instagram" },
  { icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=100089959877430", label: "Facebook" },
  { icon: FaYelp, href: "https://www.yelp.com/biz/the-spoon-stanton?osq=Desserts", label: "Yelp" },
];

export default function Footer() {
  return (
    <footer className="bg-[#FFF7E8] py-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <div className="flex gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-500 hover:text-[#D4AF37] transition"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} The Spoon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}