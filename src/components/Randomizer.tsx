import React, { useEffect, useState } from "react";
import MotionNumber from "motion-number";
import { easeOut } from "framer-motion";

type RandomizerProps = {
  title: string;
  RenderAfter?: () => React.ReactNode;
};

// Utility function to parse title string to number
const parseNumber = (title: string) => {
  return parseFloat(title.replace(/,/g, ""));
};

// Function to split number into digits
const splitNumber = (num: number) => {
  return num
    .toString()
    .split("")
    .map((digit) => parseInt(digit, 10));
};

// Define the Randomizer component
export const Randomizer = (props: RandomizerProps) => {
  const finalNumber = parseNumber(props.title);
  const finalDigits = splitNumber(finalNumber);
  const [currentDigits, setCurrentDigits] = useState<number[]>(new Array(finalDigits.length).fill(0));
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isTransitioning) {
      intervalId = setInterval(() => {
        setCurrentDigits((prevDigits) => prevDigits.map(() => Math.floor(Math.random() * 10)));
      }, 35); // Randomize digits every 100ms

      setTimeout(() => {
        clearInterval(intervalId);
        setCurrentDigits(finalDigits);
        setIsTransitioning(false);
      }, 2000); // Randomize for 2 seconds
    }

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [isTransitioning, finalDigits]);

  // Reconstruct the number from digits
  const reconstructedNumber = currentDigits.join("").padStart(finalDigits.length, "0");

  const RenderAfter = props.RenderAfter ?? (() => <></>);

  return (
    <h1>
      <MotionNumber
        value={parseNumber(reconstructedNumber)}
        transition={{
          opacity: { duration: 0.7, ease: easeOut, times: [0, 0.3] },
          y: { type: "spring", duration: 0.7, bounce: 0.25 },
          layout: { type: "spring", duration: 0.7, bounce: 0 },
        }}
      />

      <RenderAfter />
    </h1>
  );
};
