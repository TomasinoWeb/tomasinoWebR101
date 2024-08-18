import { useState, useEffect } from "react";
import { PublicLayoutFrontend } from "../layouts/public/frontend";
import { PublicLayoutBackend } from "../layouts/public/static";
import styles from "../css/orgCulture.module.scss";
import Image from "next/image";
import ghibliIcon5 from "../../assets/OrgCulture/GhibliIcon-5.png";
import ghibliIcon6 from "../../assets/OrgCulture/GhibliIcon-6.png";
import ghibliIcon7 from "../../assets/OrgCulture/GhibliIcon-7.png";
import ghibliIcon8 from "../../assets/OrgCulture/GhibliIcon-8.png";
import ghibliIcon9 from "../../assets/OrgCulture/GhibliIcon-9.png";
import ghibliIcon10 from "../../assets/OrgCulture/GhibliIcon-10.png";
import ghibliIcon11 from "../../assets/OrgCulture/GhibliIcon-11.png";
import ghibliIcon12 from "../../assets/OrgCulture/GhibliIcon-12.png";
import ghibliIcon13 from "../../assets/OrgCulture/GhibliIcon-13.png";
import ghibliIcon14 from "../../assets/OrgCulture/GhibliIcon-14.png";

const icons = [
  ghibliIcon5,
  ghibliIcon6,
  ghibliIcon7,
  ghibliIcon8,
  ghibliIcon9,
  ghibliIcon10,
  ghibliIcon11,
  ghibliIcon12,
  ghibliIcon13,
  ghibliIcon14,
];

const generateIconsArray = (numIcons) => {
  const repeatedIcons = [];
  while (repeatedIcons.length < numIcons) {
    repeatedIcons.push(...icons);
  }
  return repeatedIcons.slice(0, numIcons);
};

const useResponsiveIcons = () => {
  const [numIconsToShow, setNumIconsToShow] = useState(() => {
    // Initialize with a default value
    return 10;
  });

  useEffect(() => {
    const handleResize = () => {
      let newNumIcons;
      if (window.innerWidth >= 1300) {
        newNumIcons = 30; // for large screens
      } else if (window.innerWidth >= 992) {
        newNumIcons = 25; //  for medium screens
      } else if (window.innerWidth >= 768) {
        newNumIcons = 20; //  for small screens
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
interface OrgPageProps {}
export default PublicLayoutFrontend.use(() => {
  const displayedIcons = useResponsiveIcons();
  return {
    children: (
      <div>
        <div className={styles.side}>
          {" "}
          <h1 className={`${styles["title-page-outline-right"]} ${styles["title-page-outline"]}`}> Org Culture</h1>
          <h1 className={`${styles["title-page"]}`}> Org Culture</h1>
          <h1 className={`${styles["title-page-outline-left"]} ${styles["title-page-outline"]} `}> Org Culture</h1>
        </div>
        <div className={styles["org-culture"]}>
          <h4 className={styles["title-caption"]}>
            We're gonna take you to a quick ride of what TomasinoWeb is behind the scenes. From doing org work to having
            fun, we've got it all here in our own silly world.
          </h4>
          <div className={`${styles["row"]}`}>
            <div className={`${styles["column"]}`}>
              <h1 className={`${styles["text-3xl"]}`}>5 Websites</h1>
              <h6 className={styles["text-caption"]}>up and running for the Thomasian community</h6>
            </div>
            <div className={`${styles["column"]}`}>
              <h1 className={`${styles["text-3xl"]}`}>5 Websites</h1>
              <h6 className={styles["text-caption"]}>up and running for the Thomasian community</h6>
            </div>
            <div className={`${styles["column"]}`}>
              <h1 className={`${styles["text-3xl"]}`}>5 Websites</h1>
              <h6 className={styles["text-caption"]}>up and running for the Thomasian community</h6>
            </div>
          </div>{" "}
          <div className={`${styles["row"]}`}>
            <div className={`${styles["column"]}`}>
              <h1 className={`${styles["text-3xl"]}`}>5 Websites</h1>
              <h6 className={styles["text-caption"]}>up and running for the Thomasian community</h6>
            </div>
            <div className={`${styles["column"]}`}>
              <h1 className={`${styles["text-3xl"]}`}>5 Websites</h1>
              <h6 className={styles["text-caption"]}>up and running for the Thomasian community</h6>
            </div>
            <div className={`${styles["column"]}`}>
              <h1 className={`${styles["text-3xl"]}`}>5 Websites</h1>
              <h6 className={styles["text-caption"]}>up and running for the Thomasian community</h6>
            </div>
          </div>{" "}
        </div>
        {/* END OF ORG CULTURE */}

        <div className={styles["ghibli-icons-layout"]}>
          {displayedIcons.map((icon, index) => (
            <Image key={index} className={styles["ghibli-icons"]} src={icon} alt="Ghibli Icon" />
          ))}
        </div>
        <div className={`${styles["org-culture"]} ${styles["video"]}`}>
          <iframe
            width="560"
            height="315"
            className={`${styles["video-border"]}`}
            src="https://www.youtube.com/embed/-Naoomw8gO4?si=g_hRxQNjkgICh9ov"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className={styles["ghibli-icons-layout"]}>
          {displayedIcons.map((icon, index) => (
            <Image key={index} className={styles["ghibli-icons"]} src={icon} alt="Ghibli Icon" />
          ))}
        </div>
        {/* END OF MAIN */}
      </div>
    ),
  };
});

export const getStaticProps = PublicLayoutBackend.use<OrgPageProps>({});
