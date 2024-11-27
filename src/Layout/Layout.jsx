import React from "react";
import Navbar from "./Navbar";
import "./Layout.css";
import Dots from "./Dots";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div className=" w-full h-screen select-none bg-black text-white relative">
      <div className="fixed top-0 left-0 w-full h-screen ">
        {/* here is all overlay layout */}
        <div>
          <div className="w-0 h-0 customShadow rounded-full bg-red-100 fixed top-0 right-72 max-lg:right-44 max-md:right-28 max-sm:right-5 shadow-2xl shadow-indigo-400"></div>
          <div className="w-0 h-0 customShadow2 rounded-full bg-red-100 fixed bottom-0 left-72 max-lg:left-44 max-md:left-28 max-sm:left-5 shadow-2xl shadow-indigo-400"></div>
        </div>
        <div className="flex flex-wrap">
          <Dots />
        </div>
      </div>

      <div className=" w-full overflow-x-hidden overflow-y-scroll scroll-smooth h-screen mainSection fixed top-0 left-0 z-20">
        <Navbar />
        <main className="mainSection min-h-[75vh]  max-xl:mx-32 max-lg:mx-14 max-md:mx-12 max-sm:mx-4">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
