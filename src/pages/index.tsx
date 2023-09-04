import { Layout } from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import Title from "../assets/landing/TomasinoWeb Title.svg";
import styles from "./index.module.scss";
import { HoverableImageFade } from "../components/HoverableImage";

import dynamic from "next/dynamic";

const DynamicImage = dynamic(
  Promise.resolve(({ str }: { str: (typeof People)[number] }) => {
    const index = Math.floor(Math.random() * str.base.length);
    const base = str.base[index];
    const hovered = str.hovered[index];

    return (
      <div className={styles.eroBlock} key={str.name}>
        <HoverableImageFade alt={`image for the ${str.name} department`} image={base} hoveredImage={hovered} active />
      </div>
    );
  }),
  { ssr: false }
);

const People = [
  {
    name: "secretariat",
    base: ["/assets/landing/Departments-Secretariat-0.png"],
    hovered: ["/assets/landing/Departments-Secretariat-1.png"],
  },
  {
    name: "finance",
    base: ["/assets/landing/Departments-Finance-0.png"],
    hovered: ["/assets/landing/Departments-Finance-1.png"],
  },
  {
    name: "external affairs",
    base: ["/assets/landing/Departments-ExtAff-0.png"],
    hovered: ["/assets/landing/Departments-ExtAff-1.png"],
  },
  {
    name: "human resources",
    base: ["/assets/landing/Departments-HR-0.png"],
    hovered: ["/assets/landing/Departments-HR-1.png"],
  },
  {
    name: "writing",
    base: ["/assets/landing/Departments-Writing-0.png"],
    hovered: ["/assets/landing/Departments-Writing-1.png"],
  },
  {
    name: "web technologies",
    base: ["/assets/landing/Departments-WebTech-0v1.png", "/assets/landing/Departments-WebTech-0.png"],
    hovered: ["/assets/landing/Departments-WebTech-1v1.png", "/assets/landing/Departments-WebTech-0.png"],
  },
  {
    name: "creatives",
    base: ["/assets/landing/Departments-Creatives-0v1.png", "/assets/landing/Departments-Creatives-0.png"],
    hovered: ["/assets/landing/Departments-Creatives-1v1.png", "/assets/landing/Departments-Creatives-1.png"],
  },
  {
    name: "publicity and communications",
    base: ["/assets/landing/Departments-PubComm-0.png"],
    hovered: ["/assets/landing/Departments-PubComm-1.png"],
  },
  {
    name: "videography",
    base: ["/assets/landing/Departments-Videography-0.png"],
    hovered: ["/assets/landing/Departments-Videography-1.png"],
  },
  {
    name: "photography",
    base: ["/assets/landing/Departments-Photography-0.png", "/assets/landing/Departments-Photography-0v1.png"],
    hovered: ["/assets/landing/Departments-Photography-1.png", "/assets/landing/Departments-Photography-1v1.png"],
  },
];

export default function () {
  return (
    <div className={styles.index}>
      <div className={styles.main}>
        <div className={`${styles.eroBlockContainerTop} ${styles.eroBlockContainer}`}>
          {People.slice(0, 5).map((str) => (
            <DynamicImage str={str} />
          ))}
        </div>

        <div className={`${styles.center} ${styles.titleContainer}`}>
          <div className={styles.titleSection}>
            <Image className={styles.titleImage} src={Title} alt="tomasino r101 title"></Image>
            <ul className={`${styles.links}`}>
              <li className={styles.linkItem}>
                <Link href="/about">ABOUT</Link>
              </li>
              <li className={styles.linkBullet}>•</li>
              <li className={styles.linkItem}>
                <Link href="/r101">R101</Link>
              </li>
              <li className={styles.linkBullet}>•</li>
              <li className={styles.linkItem}>
                <Link href="/faq">FAQ</Link>
              </li>
              <li className={styles.linkBullet}>•</li>
              <li className={styles.linkItem}>
                <Link href="https://discord.gg/BHtvRaRr">THE POOL</Link>
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
          {People.slice(5, 10).map((str) => (
            <DynamicImage str={str} />
          ))}
        </div>
      </div>
      <div className={`${styles.eroBlockContainerDesktop} ${styles.eroBlockContainer}`}>
        {People.slice(5, 10).map((str) => (
          <DynamicImage str={str} />
        ))}
      </div>
    </div>
  );
}
