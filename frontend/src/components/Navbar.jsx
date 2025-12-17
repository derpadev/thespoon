import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="border border-yellow-200/30 bg-[#242424]">
      <div className="h-full max-w-5xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="font-bold text-3xl font-pinyon text-white">The <span className="text-yellow-200">Spoon</span></a>

        <div className="space-x-8 text-yellow-200 font-semibold font-explora">
          <NavLink
            to="/"
            className="text-xl hover:text-yellow-500 transition"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-xl hover:text-yellow-500 transition"
          >
            About Us
          </NavLink>
          <NavLink
            to="/order"
            className="text-xl hover:text-yellow-500 transition"
          >
            Online Order
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
