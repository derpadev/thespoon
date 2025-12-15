import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="h-16 bg-[#736EAE] border-b fixed w-full">
      <div className="h-full max-w-5xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="font-bold text-3xl font-pinyon text-white">The <span className="text-yellow-500">Spoon</span></a>

        <div className="space-x-8">
          <NavLink
            to="/dessert"
            className="text-xl text-white font-semibold text-black hover:text-yellow-500 transition"
          >
            Dessert
          </NavLink>
          <NavLink
            to="/drinks"
            className="text-xl text-white font-semibold text-black hover:text-yellow-500 transition"
          >
            Drinks
          </NavLink>
          <NavLink
            to="/about"
            className="text-xl text-white font-semibold text-black hover:text-yellow-500 transition"
          >
            About Us
          </NavLink>
          <NavLink
            to="/order"
            className="text-xl text-white font-semibold text-black hover:text-yellow-500 transition"
          >
            Order Now
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
