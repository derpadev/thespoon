import { FaInstagram, FaFacebookF, FaYelp } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

const socials = [
  { icon: FaInstagram, href: "https://www.instagram.com/thespoondessert/", label: "Instagram" },
  { icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=100089959877430", label: "Facebook" },
  { icon: FaYelp, href: "https://www.yelp.com/biz/the-spoon-stanton?osq=Desserts", label: "Yelp" },
];

export default function Contact() {
  return (
    <section id="contact" className="px-8 py-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left side: Text and store info */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h3 className="text-gray-700 text-3xl font-bold mb-6">Get in Touch</h3>
          <p className="text-gray-600 mb-6">
            Have a special request or catering inquiry? We'd love to hear from
            you!
          </p>

          {/* Store Info */}
          <div className="space-y-3 mb-6">
            <p className="text-gray-700 text-lg">
              📍 11382 Beach Blvd #4, Stanton, CA 90680
            </p>
            <a href="tel:+17146224842" className="flex items-center gap-2 text-gray-700 text-lg hover:text-[#D4AF37] transition">
              <Phone size={18} /> (714) 622-4842
            </a>
            <p className="text-gray-700 text-lg">
              ⏰ Mon-Thur: 11am - 9pm | Fri-Sun: 10am - 10pm
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mb-6">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-[#D4AF37] hover:text-white transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* DM CTA */}
          <a
            href="https://www.instagram.com/thespoondessert/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-[#D4AF37] text-gray-700 px-6 py-3 font-semibold hover:bg-[#bfa134] transition w-fit"
          >
            <Mail size={18} />
            Message Us on Instagram
          </a>
        </div>

        {/* Right side: Google Maps */}
        <div className="md:w-1/2 h-80 md:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.586824271313!2d-117.99477875232695!3d33.79716636983965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd29aa5db15417%3A0xb3a89e28e6c7bed5!2sThe%20Spoon!5e0!3m2!1sen!2sus!4v1773134084620!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
