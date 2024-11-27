import React, { useEffect, useState } from "react";

const LocalTime = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  return (
    <div>
      <h2 className="font-semibold w-16 text-center">{time}</h2>
    </div>
  );
};

export default LocalTime;
