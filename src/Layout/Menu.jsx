import React from "react";
import { NavLink } from "react-router-dom";
import "./Layout.css";
import { GoHome } from "react-icons/go";
import { LuUserCircle2 } from "react-icons/lu";
import { CiGrid31, CiUser } from "react-icons/ci";
import { GrBlog } from "react-icons/gr";

const Menu = () => {
  return (
    <div className="menusBox p-1 bg-black rounded-full border border-gray-600 ">
      <ul>
        <li className="inline-block mx-1 ">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "linksButtons px-3 rounded-full py-1 flex justify-between items-center mx-1 "
                : "px-2 my-1 rounded-full flex justify-between items-center mx-1 "
            }
            to={"/"}
          >
            <GoHome size={19} className="md:mr-1 max-sm:mx-2 " />{" "}
            <span className="max-sm:hidden">Home</span>
          </NavLink>
        </li>
        <li className="inline-block mx-1 ">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "linksButtons px-3 rounded-full py-1 flex justify-between items-center mx-1 "
                : "px-2 my-1 rounded-full flex justify-between items-center mx-1 "
            }
            to={"/about"}
          >
            <LuUserCircle2 size={19} className="md:mr-1 max-sm:mx-2 " />{" "}
            <span className="max-sm:hidden">About</span>
          </NavLink>
        </li>
        <li className="inline-block mx-1 ">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "linksButtons px-3 rounded-full py-1 flex justify-between items-center mx-1 "
                : "px-2 my-1 rounded-full flex justify-between items-center mx-1 "
            }
            to={"/work"}
          >
            <CiGrid31 size={19} className="md:mr-1 max-sm:mx-2 " />{" "}
            <span className="max-sm:hidden">Work</span>
          </NavLink>
        </li>
        <li className="inline-block mx-1 ">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "linksButtons px-3 rounded-full py-1 flex justify-between items-center mx-1 "
                : "px-2 my-1 rounded-full flex justify-between items-center mx-1 "
            }
            to={"/blog"}
          >
            <GrBlog size={19} className="md:mr-1 max-sm:mx-2 " />{" "}
            <span className="max-sm:hidden">Blog</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
