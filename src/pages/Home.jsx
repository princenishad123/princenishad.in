import React from "react";
import myImage from "../assets/my-image.webp";
import { RiArrowRightSLine } from "react-icons/ri";
import Project from "../Components/Project";
import Subscribe from "../Components/Subscribe";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Home = () => {
  const navigate = useNavigate();

  useGSAP(() => {
    gsap.from(".customeTextStyle", {
      top: -15,
      opacity: 0.0,
      delay: 1,
    });
  });
  return (
    <div className="mx-64 max-xl:mx-32 max-lg:mx-14 max-md:mx-12 max-sm:mx-4">
      <section id="section1">
        <h1 className="customeTextStyle relative text-7xl max-lg:text-6xl mt-12 max-lg:mt-10 max-md:text-5xl max-sm:my-4 font-bold">
          Full stack developer
        </h1>
        <p className="text-xl my-10 max-md:my-4 text-gray-200">
          Passionate Full-Stack Developer skilled in React, Node.js, and
          MongoDB. Experienced in building scalable web applications,
          integrating payment gateways, and implementing real-time features with
          Socket.IO. Currently developing Collabify, an AI-driven influencer
          sponsorship marketplace. Open to exciting opportunities in web
          development and software engineering.
        </p>

        <div className="relative">
          <button
            onClick={() => navigate("/about")}
            className="button-55  text-white flex items-center justify-between"
          >
            <img
              src="https://i.postimg.cc/j5H7qHRv/1715314418682.jpg"
              alt="prince"
              className="w-8 h-8 rounded-full"
            />
            <span className="px-2 flex items-center font-semibold border-gray-500">
              About me <RiArrowRightSLine className="text-2xl" />
            </span>
          </button>
        </div>
      </section>

      <section id="section2" className="my-12">
        <h2 className="text-2xl font-semibold my-3">My Work</h2>
        <div>
          <Project
            title={"Full Stack E-commerce called E-shop"}
            technology={[
              "React.js",
              "Redux",
              "RTK",
              "Tailwind.css",
              "Firebase",
            ]}
            photo={
              "https://i.postimg.cc/5N7m9hPj/Screenshot-2025-02-13-195128.webp"
            }
          />
          <div className="flex justify-center gap-12 max-md:flex-col ">
            <section>
              <h1 className="text-5xl max-md:text-2xl font-semibold">
                Building an adaptive design system for Archlight
              </h1>
            </section>
            <section>
              <div className="w-20 h-12 relative  ">
                <img
                  src="https://i.postimg.cc/j5H7qHRv/1715314418682.jpg"
                  className="w-12 h-12 rounded-full absolute z-10 shadow-md left-0 top-0"
                  alt="my-photo"
                />
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/039/334/802/small/ai-generated-indian-female-student-free-photo.jpg"
                  className="w-12 h-12 rounded-full absolute left-10 top-0"
                  alt="my-photo"
                />
              </div>
              <div>
                <p className="my-4">
                  In this project, I developed a flexible and scalable design
                  system using Next.js for front-end development and Figma for
                  design collaboration.
                </p>
                <button className="border py-1 flex items-center border-gray-400 px-3 rounded-full">
                  Read Case Study <RiArrowRightSLine size={25} />
                </button>
              </div>
            </section>
          </div>
          <Project
            title={"Building a zomato Design"}
            technology={[
              "React.js",
              "Redux",
              "RTK",
              "Tailwind.css",
              "Shadcn UI",
            ]}
          />
          <Project
            title={"Notebookify"}
            technology={[
              "React.js",
              "Redux",
              "RTK",
              "Tailwind.css",
              "Node.js",
              "Express.js",
              "Mongodb",
              "Daisy UI",
            ]}
            photo={"https://i.postimg.cc/wvvPMXXd/notebookify.webp"}
          />
        </div>
      </section>

      {/* subscribe me section */}
      <section>
        <Subscribe />
      </section>
    </div>
  );
};

export default Home;
