import { Layout } from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import Title from "../assets/landing/TomasinoWeb Title.svg";
import styles from "./index.module.scss";
import { HoverableImageFade } from "../components/HoverableImage";

const People = [
  {
    name: "secretariat",
    base: "/assets/landing/Departments-Secretariat-0.png",
    hovered: "/assets/landing/Departments-Secretariat-1.png",
  },
  {
    name: "finance",
    base: "/assets/landing/Departments-Finance-0.png",
    hovered: "/assets/landing/Departments-Finance-1.png",
  },
  {
    name: "external affairs",
    base: "/assets/landing/Departments-ExtAff-0.png",
    hovered: "/assets/landing/Departments-ExtAff-1.png",
  },
  {
    name: "human resources",
    base: "/assets/landing/Departments-HR-0.png",
    hovered: "/assets/landing/Departments-HR-1.png",
  },
  {
    name: "writing",
    base: "/assets/landing/Departments-Writing-0.png",
    hovered: "/assets/landing/Departments-Writing-1.png",
  },
  {
    name: "web technologies",
    base: "/assets/landing/Departments-WebTech-0v1.png",
    hovered: "/assets/landing/Departments-WebTech-1v1.png",
  },
  {
    name: "creatives",
    base: "/assets/landing/Departments-Creatives-0v1.png",
    hovered: "/assets/landing/Departments-Creatives-1v1.png",
  },
  {
    name: "publicity and communications",
    base: "/assets/landing/Departments-PubComm-0.png",
    hovered: "/assets/landing/Departments-PubComm-1.png",
  },
  {
    name: "videography",
    base: "/assets/landing/Departments-Videography-0.png",
    hovered: "/assets/landing/Departments-Videography-1.png",
  },
  {
    name: "photography",
    base: "/assets/landing/Departments-Photography-0.png",
    hovered: "/assets/landing/Departments-Photography-1.png",
  },
];

export default function () {
  return (
    <div className={styles.index}>
      <div className={styles.main}>
        <div className={`${styles.eroBlockContainerTop} ${styles.eroBlockContainer}`}>
          {/* TODO: Add eroblock images */}
          {People.slice(0, 5).map((str) => {
            return (
              <div className={styles.eroBlock} key={str.base}>
                <HoverableImageFade
                  alt={`image for the ${str.name} department`}
                  image={str.base}
                  hoveredImage={str.hovered}
                  active
                />
              </div>
            );
          })}
        </div>

        <div className={`${styles.center} ${styles.titleContainer}`}>
          <div className={styles.titleSection}>
            <Image className={styles.titleImage} src={Title} alt="tomasino r101 title"></Image>
            <ul className={`${styles.links}`}>
              <li className={styles.linkItem}>
                <Link href="">ABOUT</Link>
              </li>
              <li className={styles.linkBullet}>•</li>
              <li className={styles.linkItem}>
                <Link href="">R101</Link>
              </li>
              <li className={styles.linkBullet}>•</li>
              <li className={styles.linkItem}>
                <Link href="">FAQ</Link>
              </li>
              <li className={styles.linkBullet}>•</li>
              <li className={styles.linkItem}>
                <Link href="">THE POOL</Link>
              </li>
            </ul>
            <div className={styles.center}>
              <Link href="" className={`${styles.callToAction}`}>
                GET YOUR TICKETS NOW
              </Link>
            </div>
          </div>
        </div>
        <div className={`${styles.eroBlockContainerMobile} ${styles.eroBlockContainer}`}>
          {/* TODO: Add eroblock images */}
          {People.slice(5, 10).map((str) => {
            return (
              <div className={styles.eroBlock} key={str.base}>
                <HoverableImageFade
                  alt={`image for the ${str.name} department`}
                  image={str.base}
                  hoveredImage={str.hovered}
                  active
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className={`${styles.eroBlockContainerDesktop} ${styles.eroBlockContainer}`}>
        {/* TODO: Add eroblock images */}
        {People.slice(5, 10).map((str) => {
          return (
            <div className={styles.eroBlock} key={str.base}>
              <HoverableImageFade
                alt={`image for the ${str.name} department`}
                image={str.base}
                hoveredImage={str.hovered}
                active
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
