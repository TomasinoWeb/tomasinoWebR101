import { Layout } from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import Title from "../assets/landing/TomasinoWeb Title.svg";
import styles from "./index.module.scss";
import { HoverableImageFade } from "../components/HoverableImage";
import { People } from "../../public/assets/data/landing-data";
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
                <Link href="/discord" target="_blank">
                  THE POOL
                </Link>
              </li>
            </ul>
            <div className={styles.center}>
              <Link href="/apply" className={`${styles.callToAction}`}>
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
