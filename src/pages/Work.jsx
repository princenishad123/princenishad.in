import React from "react";
import Project from "../Components/Project";
import myImage from "../assets/my-image.webp";
import { RiArrowRightSLine } from "react-icons/ri";
import project2 from "../assets/project1.webp";

const Work = () => {
  return (
    <div className="w-full xl:px-64">
      <div>
        <Project
          title={"Building a zomato Design"}
          technology={["React.js", "Redux", "RTK", "Tailwind.css", "Shadcn UI"]}
        />
        <div className="flex justify-center gap-12 max-md:flex-col my-16">
          <section>
            <h1 className="text-5xl max-md:text-2xl font-semibold">
              Building an adaptive design system for Archlight
            </h1>
          </section>
          <section>
            <div className="w-20 h-12 relative  ">
              <img
                src={myImage}
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
          title={"Building a agency Design "}
          technology={["React.js", "Redux", "RTK", "Tailwind.css"]}
          photo={"https://i.postimg.cc/Xq6gChK6/project1.webp"}
        />
      </div>
    </div>
  );
};

export default Work;
