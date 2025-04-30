import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosMenu, IoMdClose } from "react-icons/io";

type NavItems = {
  name: string;
  path: string;
};

const navData: NavItems[] = [
  { name: "Home", path: "/" },
  { name: "Gym", path: "/gym" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const navAuth: NavItems[] = [
  { name: "Login", path: "/login" },
  { name: "Signup", path: "/signup" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-gradient-to-b from-slate-900/80 to-transparent backdrop-blur-sm shadow-md px-6 py-4">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">FitWorld</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navData.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-white text-lg hover:text-yellow-400 transition duration-200 ${
                  isActive ? "font-bold underline underline-offset-4" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {navAuth.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-white px-4 py-2 rounded-md text-sm font-medium ${
                  item.name === "Signup"
                    ? "bg-yellow-400 hover:bg-yellow-300 text-black"
                    : "border border-yellow-400 hover:bg-yellow-400 hover:text-black"
                } ${isActive ? "underline font-semibold" : ""}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
          aria-label="Toggle Menu"
        >
          {open ? <IoMdClose /> : <IoIosMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-slate-900 text-white py-6 px-6 transition-all duration-300 ease-in-out ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-4">
          {navData.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-white text-lg hover:text-yellow-400 transition ${
                  isActive ? "font-bold underline" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="mt-6 border-t border-slate-700 pt-4 flex flex-col gap-3">
          {navAuth.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-center text-white px-4 py-2 rounded-md text-sm font-medium ${
                  item.name === "Signup"
                    ? "bg-yellow-400 hover:bg-yellow-300 text-black"
                    : "border border-yellow-400 hover:bg-yellow-400 hover:text-black"
                } ${isActive ? "underline font-semibold" : ""}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
