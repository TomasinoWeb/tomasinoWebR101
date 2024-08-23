import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./RepeatingIcons.module.scss"; // Adjust path if necessary

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
  const [numIconsToShow, setNumIconsToShow] = useState(() => 10);

  useEffect(() => {
    const handleResize = () => {
      let newNumIcons;
      if (window.innerWidth >= 1300) {
        newNumIcons = 30; // for large screens
      } else if (window.innerWidth >= 992) {
        newNumIcons = 25; // for medium screens
      } else if (window.innerWidth >= 768) {
        newNumIcons = 20; // for small screens
      } else {
        newNumIcons = 15; // for extra small screens
      }
      setNumIconsToShow(newNumIcons);
    };

    handleResize(); // Set the initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return generateIconsArray(numIconsToShow);
};

const RepeatingIcons = () => {
  const displayedIcons = useResponsiveIcons();

  return (
    <div className={styles["ghibli-icons-layout"]}>
      {displayedIcons.map((icon, index) => (
        <Image
          key={index}
          className={styles["ghibli-icons"]}
          src={icon.src}
          alt="Ghibli Icon"
          width={icon.width}
          height={icon.height}
        />
      ))}
    </div>
  );
};

export default RepeatingIcons;
