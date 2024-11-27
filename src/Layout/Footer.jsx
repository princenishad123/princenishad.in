import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex justify-between  max-sm:flex-col-reverse px-16 max-sm:px-2 pt-8 pb-4 bg-transparent">
      <section>
        <h3>
          © 2024 /Prince Nishad/ Lets Connect and Fill some Gap in Society
        </h3>
      </section>
      <section className="flex justify-center max-sm:py-2 gap-4">
        <button className="">
          <IoLogoInstagram size={20} />
        </button>
        <button className="">
          <FaGithub size={20} />
        </button>
        <button className="">
          <SiLeetcode size={20} />
        </button>
        <button className="">
          <FaLinkedin size={20} />
        </button>
      </section>
    </footer>
  );
};

export default Footer;
