import React, { useEffect, useState } from "react";

const Dots = () => {
  const [dotCount, setDotCount] = useState([]);
  useEffect(() => {
    const dots = [];
    for (let i = 0; i < 2000; i++) {
      dots.push("");
    }
    setDotCount(dots);
  }, []);
  return (
    <div className="flex flex-wrap">
      {dotCount.map((dot, index) => (
        <span
          key={index}
          className="w-1 h-1 bg-slate-100 rounded-full m-3 scale-[0.15]"
        ></span>
      ))}
    </div>
  );
};

export default Dots;
