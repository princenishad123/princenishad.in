import React from "react";
import Menu from "./Menu";
import { NavLink } from "react-router-dom";
import { IoEarth } from "react-icons/io5";
import LocalTime from "../Components/LocalTime";

const Navbar = () => {
  return (
    <div className="w-full h-auto py-4 flex justify-between max-md:px-2 px-12 items-center sticky top-0 z-40 ">
      <section>
        <h2 className="flex items-center max-lg:hidden gap-2">
          <IoEarth size={19} />
          UP/INDIA
        </h2>
      </section>
      <nav className="max-lg:fixed top-1 left-0 max-lg:w-full max-lg:flex max-lg:justify-center">
        <Menu />
      </nav>
      <section className="max-lg:hidden">
        <LocalTime />
      </section>
    </div>
  );
};

export default Navbar;
