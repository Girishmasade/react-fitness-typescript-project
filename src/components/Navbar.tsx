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

const navAuthantication: NavItems[] = [
  { name: "Login", path: "/login" },
  { name: "Signup", path: "/signup" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="bg-green-700 w-full p-3 relative">
      <div className="flex justify-between items-center">
     
        <h1 className="text-xl font-bold text-white">Logo</h1>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white text-2xl">
          {open ? <IoMdClose /> : <IoIosMenu />}
        </button>

        <div className="hidden md:flex flex-1 justify-center gap-6">
          {navData.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-white hover:text-red-200 transition-colors duration-200 ${
                  isActive ? "underline font-bold" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="hidden md:flex gap-3">
          {navAuthantication.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 transition-all duration-200 ${
                  isActive ? "underline font-bold" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      <div
        className={`md:hidden flex flex-col gap-5 text-xl absolute top-16 right-0 bg-green-800 p-4 w-full z-50 transform transition-all duration-300 ease-in-out ${
          open ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
        }`}
      >
        {navData.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `text-white hover:text-red-200 transition-colors duration-200 ${
                isActive ? "font-bold underline" : ""
              }`
            }
            onClick={() => setOpen(false)}
          >
            {item.name}
          </NavLink>
        ))}
        <div className="flex flex-col gap-3 border-t border-white pt-3">
          {navAuthantication.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 transition-all duration-200 ${
                  isActive ? "underline font-bold" : ""
                }`
              }
              onClick={() => setOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
