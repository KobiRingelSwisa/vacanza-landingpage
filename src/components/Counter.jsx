import { div } from "framer-motion/client";
import { useState, useEffect } from "react";

function Counter() {
  const [timeLeft, setTimeLeft] = useState(86400); // 24 hours in seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-6 border border-yellow-400 rounded-full">
      <p className="text-yellow-400 text-3xl font-bold m-4">
        Offer ends in: {Math.floor(timeLeft / 3600)}h:
        {Math.floor((timeLeft % 3600) / 60)}m: {timeLeft % 60}s
      </p>
    </div>
  );
}

export default Counter;
