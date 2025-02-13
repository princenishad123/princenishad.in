import React from "react";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import myImage from "../assets/my-image.webp";
import project1 from "../assets/project1.webp";
import { Link, NavLink } from "react-router-dom";
import ScheduleCall from "../Components/ScheduleCall";
const About = () => {
  return (
    <div className="w-full h-auto xl:flex relative xl:gap-24 xl:mx-6">
      {/* side bar section */}
      <aside className="w-64 max-xl:hidden h-[80vh] sticky top-20 left-0 ">
        <ul className="px-2">
          <a href="#profile">
            <li className="text-md my-3">Inroduction</li>
          </a>
          <a href="#work-experiance">
            <li className="text-md my-3">Experiance</li>
          </a>

          <a href="#studies">
            {" "}
            <li className="text-md my-3">Studeis</li>
          </a>

          <a href="#skills">
            <li className="text-md my-3">Technical Skills</li>
          </a>
          <a href="#nodejs">
            <li className="text-md my-3">Node.js</li>
          </a>
          <a href="#expressjs">
            <li className="text-md my-3">Express.js</li>
          </a>
          <a href="#typescript">
            <li className="text-md my-3">TypeScript.js</li>
          </a>
          <a href="#nextjs">
            <li className="text-md my-3">Next.js</li>
          </a>
          <a href="#mongodb">
            <li className="text-md my-3">Mongodb</li>
          </a>
        </ul>
      </aside>

      {/* content sections */}
      <div className="w-[70%] max-lg:mt-5 max-xl:w-full ">
        <div
          id="profile"
          className="flex gap-16 max-md:w-auto max-lg:gap-2 items-center max-lg:flex-col"
        >
          {/* Profile sections */}
          <div className="w-44 max-md:w-auto">
            <div className="w-44 max-md:w-40 h-44 overflow-hidden max-md:h-40 rounded-full">
              <img
                src={"https://i.postimg.cc/j5H7qHRv/1715314418682.jpg"}
                alt="prince"
                className="object-fill"
              />
            </div>
            <div>
              <span className="flex items-center justify-center my-4 gap-2 text-center">
                <FaEarthAmericas size={25} className="text-yellow-400" />{" "}
                UP/INDIA
              </span>
            </div>
            <div className="w-full flex justify-center gap-4 my-4">
              <button className="py-1 px-3 rounded-full border border-slate-500">
                Hindi
              </button>
              <button className="py-1 px-3 rounded-full border border-slate-500">
                English
              </button>
            </div>
          </div>
          {/* right section of the profile */}
          <div className="max-lg:flex max-lg:flex-col justify-center items-center">
            <ScheduleCall />
            <h1 className="text-7xl font-semibold my-4 max-md:text-5xl  max-sm:text-4xl max-md:my-2">
              Prince Nishad
            </h1>
            <h1 className="text-3xl my-4 max-sm:text-2xl max-sm:my-2">
              Full Stack Develoepr
            </h1>
            <div className=" w-full flex-wrap flex gap-4 justify-center">
              <button className="py-1 hover:scale-[1.025] transition-all gap-2 flex items-center justify-center px-3 rounded-full border border-slate-500">
                <FaLinkedin size={20} /> Linkedin
              </button>
              <button className="py-1 hover:scale-[1.025] transition-all gap-2 flex items-center justify-center px-3 rounded-full border border-slate-500">
                <FaInstagram size={20} /> Instagram
              </button>
              <button className="py-1 hover:scale-[1.025] transition-all gap-2 flex items-center justify-center px-3 rounded-full border border-slate-500">
                <FaGithub size={20} /> GitHub
              </button>
              <button className="py-1 hover:scale-[1.025] transition-all gap-2 flex items-center justify-center px-3 rounded-full border border-slate-500">
                <HiOutlineMail size={20} /> Email
              </button>
            </div>
          </div>
        </div>

        <div className="w-full my-4">
          <p>
            Passionate Full-Stack Developer skilled in React, Node.js, and
            MongoDB. Experienced in building scalable web applications,
            integrating payment gateways, and implementing real-time features
            with Socket.IO. Currently developing Collabify, an AI-driven
            influencer sponsorship marketplace. Open to exciting opportunities
            in web development and software engineering.
          </p>
          <hr className="my-4" />
          {/* section 1  */}
          <section id="work-experiance">
            <h1 className="text-4xl pt-16 max-md:pt-2 max-md:text-2xl font-semibold my-4">
              Work Expreriance
            </h1>
            <div className="w-full flex justify-between items-center max-sm:flex-col max-sm:items-start">
              <div>
                <h2 className="text-2xl font-medium">Codsoft</h2>
                <span className="text-cyan-300 text-xl">
                  Frontend Developer (Internship)
                </span>
              </div>
              <span className="text-slate-300">May 2024 - Aug 2024</span>
            </div>
            <ul className="mt-4 list-disc mx-4">
              <li className="my-2  ">
                Collaborated with the development team to create a Frontend UI
                using React.js, Bootstrap, ShadcnUI, enhancing user experiance'
                learning experience through practical application.
              </li>

              <li>
                Contributed to the development of showcase demos for investors,
                demonstrating the UI's potential and value proposition.
              </li>
            </ul>
            <div className="p-2 w-96 mt-4 max-sm:w-full h-auto bg-black border border-slate-600 rounded-md">
              <img
                src={project1}
                className="rounded-md w-full"
                alt="project-image"
              />
            </div>
          </section>
          {/* section 2 */}'
          <hr className="my-4" />
          <section id="studies">
            <h1 className="text-4xl pt-16 max-md:pt-2 max-md:text-2xl font-semibold my-4">
              Studies
            </h1>
            <div>
              <h2 className="text-3xl max-md:text-2xl py-2 font-medium">
                Ramkrita Intermediate Collage
              </h2>
              <span className="text-slate-200 text-xl max-sm:text-sm ">
                Class X | Marks : 80% | 2020 - 2021
              </span>{" "}
              <br />
              <span className="text-slate-200 text-xl max-sm:text-sm  ">
                Class XII | Marks : 72% | 2022 - 2023
              </span>
            </div>
            <div className="my-6">
              <h2 className="text-3xl max-md:text-2xl font-medium py-2">
                Uttranchal University
              </h2>
              <span className="text-slate-200 text-xl max-sm:text-sm ">
                1 <sub>st</sub> Year | 8.2 CGPA | 2023 - 2024
              </span>{" "}
              <br />
              <span className="text-slate-200 text-xl max-sm:text-sm ">
                2 <sub>nd</sub> Year | coming soon | 2024 - 2025
              </span>
            </div>
          </section>
          <hr className="my-4" />
          {/* technical Skills */}
          <section id="skills" className="pt-16 max-md:pt-2">
            <h1 className="text-4xl max-md:text-2xl font-semibold my-4">
              Technical Skills
            </h1>

            <div className="my-4">
              <h2 className="text-xl max-md:text-2xl font-medium py-2">
                HTML,CSS,JavaScript (base)
              </h2>
              <p className="text-slate-300">
                Firsty I Improve the base of Web development using
                HTML,CSS,JavaScript.
              </p>
            </div>
            <div className="my-4">
              <h2 className="text-xl max-md:text-2xl font-medium py-2">
                JavaScript (ES5/ES6)
              </h2>
              <p className="text-slate-300">
                Skilled in JavaScript, with a strong understanding of ES6+
                features for modern web development.
              </p>
            </div>
            <div className="my-4">
              <h2 className="text-xl max-md:text-2xl font-medium py-2">
                React.js
              </h2>
              <p className="text-slate-300">
                Proficient in building dynamic, responsive UIs with React.js for
                web applications.
              </p>
            </div>
            <div className="my-4">
              <h2 className="text-xl max-md:text-2xl font-medium py-2">
                TailwindCSS
              </h2>
              <p className="text-slate-300">
                Skilled in TailwindCSS for rapid, responsive UI design with
                utility-first CSS.
              </p>
            </div>
            <div className="my-4">
              <h2 className="text-xl max-md:text-2xl font-medium py-2">
                Redux ToolKit
              </h2>
              <p className="text-slate-300">
                Experienced with Redux for state management in complex React
                applications.
              </p>
            </div>
            <div className="my-4">
              <h2 className="text-xl max-md:text-2xl font-medium py-2">
                RTK Query
              </h2>
              <p className="text-slate-300">
                Experienced with RTK Query for handle APIs
              </p>
            </div>
            <div id="nodejs" className="my-4">
              <h2 className="text-xl max-md:text-2xl font-medium py-2">
                Node.js
              </h2>
              <p className="text-slate-300">
                Proficient in Node.js for building scalable backend services,
                REST APIs, authentication, and real-time applications using
                Express and Socket.IO.
              </p>
            </div>
            <div id="expressjs" className="my-4">
              <h2 className="text-xl max-md:text-2xl font-medium py-2">
                Express.js
              </h2>
              <p className="text-slate-300">
                Skilled in Express.js for building fast, scalable REST APIs,
                middleware integration, and authentication.
              </p>
            </div>
            <div id="typescript" className="my-4">
              <h2 className="text-xl max-md:text-2xl font-medium py-2">
                TypeScript.js
              </h2>
              <p className="text-slate-300">
                Familiar with TypeScript for writing scalable, type-safe
                JavaScript applications.
              </p>
            </div>
            <div id="nextjs" className="my-4">
              <h2 className="text-xl max-md:text-2xl font-medium py-2">
                Next.js
              </h2>
              <p className="text-slate-300">
                Skilled in Next.js for building fast, SEO-friendly, and
                server-side rendered React applications.
              </p>
            </div>
            <div id="mongodb" className="my-4">
              <h2 className="text-xl max-md:text-2xl font-medium py-2">
                Mongodb
              </h2>
              <p className="text-slate-300">
                Proficient in MongoDB for building scalable, NoSQL databases
                with Mongoose and aggregation pipelines.
              </p>
            </div>
            <div className="my-4">
              <h2 className="text-xl max-md:text-2xl font-medium py-2">
                Figma
              </h2>
              <p className="text-slate-300">
                Experienced with Figma for creating impactfull and looking
                Designs.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
