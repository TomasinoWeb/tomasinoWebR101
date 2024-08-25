import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import styles from "./RepeatingIcons.module.scss"; // Adjust path if necessary
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

const icons = [
  { src: "/assets/orgCulture/culture/GhibliIcon-5.png", width: 100, height: 100 },
  { src: "/assets/orgCulture/culture/GhibliIcon-6.png", width: 100, height: 100 },
  { src: "/assets/orgCulture/culture/GhibliIcon-7.png", width: 100, height: 100 },
  { src: "/assets/orgCulture/culture/GhibliIcon-8.png", width: 100, height: 100 },
  { src: "/assets/orgCulture/culture/GhibliIcon-9.png", width: 100, height: 100 },
  { src: "/assets/orgCulture/culture/GhibliIcon-10.png", width: 100, height: 100 },
  { src: "/assets/orgCulture/culture/GhibliIcon-11.png", width: 100, height: 100 },
  { src: "/assets/orgCulture/culture/GhibliIcon-12.png", width: 100, height: 100 },
  { src: "/assets/orgCulture/culture/GhibliIcon-13.png", width: 100, height: 100 },
  { src: "/assets/orgCulture/culture/GhibliIcon-14.png", width: 100, height: 100 },
];

const generateIconsArray = (numIcons) => {
  const repeatedIcons = [];
  while (repeatedIcons.length < numIcons) {
    repeatedIcons.push(...icons);
  }
  return repeatedIcons.slice(0, numIcons);
};

const useResponsiveIcons = () => {
  const [numIconsToShow, setNumIconsToShow] = useState(10);
  const [iconSize, setIconSize] = useState(100); // Default icon size

  useEffect(() => {
    const handleResize = () => {
      let newNumIcons;
      let newIconSize;

      if (window.innerWidth >= 1300) {
        newNumIcons = 30;
        newIconSize = 100; // Large screens
      } else if (window.innerWidth >= 992) {
        newNumIcons = 25;
        newIconSize = 80; // Medium screens
      } else if (window.innerWidth >= 768) {
        newNumIcons = 20;
        newIconSize = 60; // Small screens
      } else {
        newNumIcons = 15;
        newIconSize = 50; // Extra small screens
      }

      setNumIconsToShow(newNumIcons);
      setIconSize(newIconSize);
    };

    handleResize(); // Set initial values
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Update the icons array with the new icon size
  const iconsArray = generateIconsArray(numIconsToShow).map((icon) => ({
    ...icon,
    width: iconSize,
    height: iconSize,
  }));

  return iconsArray;
};

const RepeatingIcons = () => {
  const displayedIcons = useResponsiveIcons();

  // Scroll velocity effect (unchanged)
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * 1 * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={styles["ghibli-icons-layout"]}>
      <motion.div className={styles["ghibli-icons-scroller"]} style={{ x }}>
        {displayedIcons.concat(displayedIcons).map((icon, index) => (
          <Image
            key={index}
            className={styles["ghibli-icons"]}
            src={icon.src}
            alt="Ghibli Icon"
            width={icon.width}
            height={icon.height}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default RepeatingIcons;
