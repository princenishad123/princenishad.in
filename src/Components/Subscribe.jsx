import React from "react";
import StyleCircle from "./StyleCircle";

const Subscribe = () => {
  return (
    <div className="w-[80%] max-lg:w-full overflow-hidden h-96 border mx-auto relative border-slate-500 rounded-lg">
      <div className="ml-[-75px] mt-[-75px]">
        <StyleCircle />
      </div>
      <div className="mr-[-75px] mb-[-75px] absolute right-0 bottom-0">
        <StyleCircle />
      </div>

      <div className="w-full h-full bg-transparent backdrop-blur-sm absolute content-center left-0 top-0 z-[4] ">
        <h2 className="text-4xl max-md:text-2xl font-bold text-center">
          Subscribe to Prince's Newsletter
        </h2>
        <p className="text-center w-[60%]  mx-auto max-md:w-full px-2 my-4">
          Join my newsletter for insights on Web Development, creative
          engineering, and the latest in frameworks like Next.js and Node.js!
        </p>
        <form className="w-[60%] max-sm:w-[90%] mx-auto  flex justify-center max-md:flex-col gap-4">
          <input
            className="outline-none max-sm:w-full border border-slate-500 py-1 px-4 bg-transparent rounded-full"
            type="email"
            placeholder="Enter Your Email"
          />
          <button className="py-1 max-sm:w-full  px-3 rounded-full border border-slate-500">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
